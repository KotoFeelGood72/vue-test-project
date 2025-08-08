<template>
  <div class="image_upload">
    <input
      type="file"
      accept="image/*"
      :name="name"
      :id="id"
      class="image_upload__input"
      :disabled="disabled"
      :required="required"
      @change="handleFileChange"
    />
    <div class="image_upload__preview">
      <AvatarSingleImg
        :image="
          modelValue
            ? {
                id: 0,
                src: modelValue.preview || '',
                file_name: modelValue.file.name,
                ext: modelValue.file.name.split('.').pop() || '',
              }
            : null
        "
      />
      <button type="button" class="image_upload__remove" @click="handleRemoveFile">
        ✕
      </button>
    </div>
    <button type="button" class="image_upload__button" @click="triggerFileInput">
      Загрузить новое фото
    </button>
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, ref } from "vue";
import type { FileInputTypes, FileInputEmits } from "@/types/FileInputTypes";
import { uploadImage } from "@/utils/fileUpload";
import AvatarSingleImg from "@/components/ui/AvatarSingleImg.vue";

const props = withDefaults(defineProps<FileInputTypes>(), {
  modelValue: null,
  accept: "image/*",
  name: "",
  id: "",
  disabled: false,
  required: false,
  showPreview: true,
});

const emit = defineEmits<FileInputEmits>();

const error = ref("");

const handleFileChange = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;

  if (!files || files.length === 0) {
    emit("update:modelValue", null);
    error.value = "";
    return;
  }

  const file = files[0];

  try {
    const result = await uploadImage(file);

    if (result.error) {
      error.value = result.error;
      emit("error", error.value);
      return;
    }

    emit("update:modelValue", result);
    error.value = "";
  } catch {
    error.value = "Ошибка при обработке изображения";
    emit("error", error.value);
  }
};

const triggerFileInput = () => {
  const fileInput = document.getElementById(props.id) as HTMLInputElement;
  if (fileInput) {
    fileInput.click();
  }
};

const handleRemoveFile = () => {
  emit("update:modelValue", null);
  error.value = "";
};
</script>

<style scoped lang="scss">
.image_upload__input {
  display: none;
}

.image_upload {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.image_upload__preview {
  position: relative;
}

.image_upload__remove {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f5f5f5;
  padding: 5px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f56666;
  }
}

.image_upload__button {
  border-bottom: 1px solid #000;
  cursor: pointer;
}
</style>
