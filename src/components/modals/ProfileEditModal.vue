<template>
  <div class="profile_edit_modal" @click="cancelProfileEdit">
    <div class="profile_edit" @click.stop>
      <div class="profile_edit__form">
        <FileInput
          v-model="avatarFile"
          name="profile-image"
          id="profile-image"
          :disabled="false"
          :required="false"
        />
        <div class="profile_edit__inputs">
          <CustomInput
            label="Имя"
            v-model="formData.first_name"
            name="first-name"
            id="first-name"
            :disabled="false"
            :required="true"
            :readonly="false"
            :error="getFieldError('first_name')"
          />
          <CustomInput
            label="Фамилия"
            v-model="formData.last_name"
            name="last-name"
            id="last-name"
            :disabled="false"
            :required="true"
            :readonly="false"
            :error="getFieldError('last_name')"
          />
          <CustomInput
            label="Отчество"
            v-model="formData.middle_name"
            name="middle-name"
            id="middle-name"
            :disabled="false"
            :required="false"
            :readonly="false"
            :error="getFieldError('middle_name')"
          />
          <CustomInput
            label="Описание"
            v-model="formData.about_text"
            name="about-text"
            id="about-text"
            :disabled="false"
            :required="false"
            :readonly="false"
            :error="getFieldError('about_text')"
          />
        </div>
        <div class="profile_edit__buttons">
          <CustomButton
            text="Сохранить изменения"
            type="submit"
            :disabled="loading"
            :loading="loading"
            theme="primary"
            @click="onProfileSave"
          />
          <CustomButton
            text="Отмена"
            type="button"
            :disabled="loading"
            :loading="false"
            theme="secondary"
            @click="cancelProfileEdit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import CustomButton from "@/components/ui/CustomButton.vue";
import FileInput from "@/components/input/FileInput.vue";
import CustomInput from "@/components/input/CustomInput.vue";
import { useUserStore, useUserStoreRefs } from "@/stores/useUserStore";
import { validateEditForm } from "@/utils/validation";
import { ApiService } from "@/services/api";
import type { FileUploadResult } from "@/utils/fileUpload";
import { useModalStore } from "@/stores/useModalStore";
import type { ValidationError, UserInfo } from "@/types/api";

const { closeModal } = useModalStore();
const { user, loading } = useUserStoreRefs();
const { updateUser } = useUserStore();

// Данные формы
const formData = ref({
  first_name: "",
  last_name: "",
  middle_name: "",
  about_text: "",
});

// Аватар
const avatarFile = ref<FileUploadResult | null>(null);

// Ошибки
const validationErrors = ref<ValidationError[]>([]);

// Получаем данные пользователя
const initializeForm = () => {
  if (user.value) {
    formData.value.first_name = user.value.user.first_name;
    formData.value.last_name = user.value.user.last_name;
    formData.value.middle_name = user.value.user.middle_name || "";
    formData.value.about_text = user.value.about_text;
  }
};

// Валидация полей
const getFieldError = (fieldName: string): string => {
  const error = validationErrors.value.find((err) => err.field === fieldName);
  return error ? error.message : "";
};

const onProfileSave = async () => {
  // Валидация
  const validation = validateEditForm(formData.value);
  validationErrors.value = validation.errors;

  if (!validation.isValid) {
    console.log("Не пройдена валидация", validation.errors);
    return;
  }

  console.log("Успешная валидация");

  try {
    let avatarId = user.value?.avatar.id || 1;

    // Загружаем файл
    if (avatarFile.value?.file) {
      const uploadResponse = await ApiService.uploadFile(avatarFile.value.file);
      avatarId = uploadResponse.file_id;
      console.log(" Файл загружен");
    } else {
      console.log(" Новый файл не выбран");
    }

    // Подготовка данных для отправки
    const updateData = {
      id: user.value?.id || 1,
      avatar_id: avatarId,
      user: {
        first_name: formData.value.first_name,
        last_name: formData.value.last_name,
        middle_name: formData.value.middle_name || null,
      } as UserInfo,
      about_text: formData.value.about_text || null,
    };

    await updateUser(updateData);

    console.log("Профиль успешно обновлен");
    closeModal("editProfile");
  } catch (error) {
    console.error(error);
  }
};

const cancelProfileEdit = () => {
  closeModal("editProfile");
};

onMounted(() => {
  initializeForm();
});
</script>

<style scoped lang="scss">
.profile_edit_modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile_edit {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  max-width: 608px;
  width: 100%;
}

.profile_edit__inputs {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  grid-gap: 10px 20px;
}

.profile_edit__form {
  width: 100%;
  max-width: 608px;
  display: flex;
  flex-direction: column;
  gap: 68px;
}

.profile_edit__buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 12px;
}
</style>
