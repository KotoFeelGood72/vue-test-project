<template>
  <div>
    <FileInput
      v-model="user.image"
      name="profile-image"
      id="profile-image"
      :disabled="false"
      :required="false"
    />
    <div class="profile_edit__inputs">
      <CustomInput
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
  // Логика сохранения профиля
  console.log("Сохранение профиля");
};

const cancelProfileEdit = () => {
  router.push("/profile");
};
</script>

<style scoped></style>
