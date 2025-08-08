<template>
  <div class="custom_input" :class="{ error: error }">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      v-model="localValue"
      :placeholder="placeholder"
      type="text"
      :name="name"
      :id="id"
      :class="className"
      :style="style"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
    />
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, computed } from "vue";
import type { InputTypes } from "@/types/InputTypes";

const props = withDefaults(defineProps<InputTypes>(), {
  modelValue: "",
  placeholder: "",
  name: "",
  id: "",
  className: "",
  style: "",
  label: "",
  disabled: false,
  readonly: false,
  required: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<style scoped lang="scss">
.custom_input {
  display: block;

  &.error {
    input {
      border-color: #ff0000;
    }
    .error-message {
      color: #ff0000;
      font-size: 10px;
      margin-top: 5px;
      display: block;
    }

    label {
      color: #ff0000;
    }
  }
  label {
    font-size: 14px;
    margin-bottom: 10px;
    display: block;
  }
  input {
    appearance: none;
    border: 1px solid #000;
    border-radius: 16px;
    padding: 10px;
    width: 100%;
    display: block;
    min-height: 60px;
    font-size: 16px;
  }
}
</style>
