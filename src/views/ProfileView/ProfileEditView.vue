<template>
  <div class="profile_edit">
    <div class="profile_edit__form">
      <FileInput
        v-model="user.image"
        name="profile-image"
        id="profile-image"
        :disabled="false"
        :required="false"
      />
      <div class="profile_edit__inputs">
        <CustomInput
          label="Имя"
          v-model="user.name"
          name="profile-name"
          id="profile-name"
          placeholder="Введите имя"
          type="text"
          className=""
          :style="''"
          :disabled="false"
          :required="false"
          :readonly="false"
        />
        <CustomInput
          label="Фамилия"
          v-model="user.name"
          name="profile-name"
          id="profile-name"
          placeholder="Введите имя"
          type="text"
          className=""
          :style="''"
          :disabled="false"
          :required="false"
          :readonly="false"
        />
        <CustomInput
          label="Отчество"
          v-model="user.name"
          name="profile-name"
          id="profile-name"
          placeholder="Введите имя"
          type="text"
          className=""
          :style="''"
          :disabled="false"
          :required="false"
          :readonly="false"
        />
        <CustomInput
          label="Описание"
          v-model="user.name"
          name="profile-name"
          id="profile-name"
          placeholder="Введите имя"
          type="text"
          className=""
          :style="''"
          :disabled="false"
          :required="false"
          :readonly="false"
        />
      </div>
      <div class="profile_edit__buttons">
        <CustomButton
          text="Сохранить"
          type="submit"
          disabled
          loading
          theme="primary"
          :onClick="onProfileSave"
        />
        <CustomButton
          text="Отмена"
          type="button"
          disabled
          loading
          theme="primary"
          :onClick="cancelProfileEdit"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomButton from "@/components/ui/CustomButton.vue";
import FileInput from "@/components/input/FileInput.vue";
import CustomInput from "@/components/input/CustomInput.vue";
import { useUserStoreRefs } from "@/stores/useUserStore";
import { useRouter } from "vue-router";

const { user } = useUserStoreRefs();
const router = useRouter();

const onProfileSave = () => {
  console.log("Сохранение профиля");
};

const cancelProfileEdit = () => {
  router.push("/profile");
};
</script>

<style scoped lang="scss">
.profile_edit {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  flex-direction: column;
  gap: 20px;
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
}
</style>
