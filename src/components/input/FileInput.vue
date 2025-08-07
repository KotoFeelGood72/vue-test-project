<template>
  <div class="image-upload">
    <input
      type="file"
      accept="image/*"
      :name="name"
      :id="id"
      class="image-input"
      :disabled="disabled"
      :required="required"
      @change="handleFileChange"
    />
    <div v-if="modelValue" class="image-preview">
      <img
        :src="modelValue.preview || undefined"
        :alt="modelValue.file.name"
        class="preview-image"
      />
      <button type="button" class="remove-btn" @click="handleRemoveFile">✕</button>
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, ref } from 'vue'
import type { FileInputTypes, FileInputEmits } from '@/types/FileInputTypes'
import { uploadImage } from '@/utils/fileUpload'

withDefaults(defineProps<FileInputTypes>(), {
  modelValue: null,
  accept: 'image/*',
  name: '',
  id: '',
  disabled: false,
  required: false,
  showPreview: true,
})

const emit = defineEmits<FileInputEmits>()

const error = ref('')

const handleFileChange = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files

  if (!files || files.length === 0) {
    emit('update:modelValue', null)
    error.value = ''
    return
  }

  const file = files[0]

  try {
    const result = await uploadImage(file)

    if (result.error) {
      error.value = result.error
      emit('error', error.value)
      return
    }

    emit('update:modelValue', result)
    error.value = ''
  } catch {
    error.value = 'Ошибка при обработке изображения'
    emit('error', error.value)
  }
}

const handleRemoveFile = () => {
  emit('update:modelValue', null)
  error.value = ''
}
</script>

<style scoped></style>
