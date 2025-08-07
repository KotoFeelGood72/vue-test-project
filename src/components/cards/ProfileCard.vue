<template>
  <div>
    <FileInput
      v-model="selectedImage"
      name="profile-image"
      id="profile-image"
      :disabled="false"
      :required="false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FileInput from '../input/FileInput.vue'
import type { FileUploadResult } from '@/utils/fileUpload'

const selectedImage = ref<FileUploadResult | null>(null)
</script>

<style scoped></style>
