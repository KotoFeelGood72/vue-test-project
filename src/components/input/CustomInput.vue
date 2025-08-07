<template>
  <div>
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      v-model="localValue"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :id="id"
      :class="className"
      :style="style"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, computed } from 'vue'
import type { InputTypes } from '@/types/InputTypes'

const props = withDefaults(defineProps<InputTypes>(), {
  modelValue: '',
  placeholder: '',
  type: 'text',
  name: '',
  id: '',
  className: '',
  style: '',
  label: '',
  disabled: false,
  readonly: false,
  required: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<style scoped></style>
