<template>
  <div class="profile-card">
    <FileInput
      v-model="selectedImage"
      name="profile-image"
      id="profile-image"
      :disabled="false"
      :required="false"
    />
    <div class="profile_card__content">
      <h3>{{ profile }}</h3>
      <p>{{ profile.description }}</p>
      <RouterLink :to="{ name: 'edit' }">Редактировать профиль</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FileInput from '../input/FileInput.vue'
import type { FileUploadResult } from '@/utils/fileUpload'
import type { ProfileCardTypes } from '@/types/ProfileCardTypes'

const selectedImage = ref<FileUploadResult | null>(null)

withDefaults(
  defineProps<{
    profile: ProfileCardTypes
  }>(),
  {
    profile: () => ({
      name: 'Нет имени',
      description: 'Нет описания',
      image: null,
    }),
  },
)
</script>

<style scoped></style>
