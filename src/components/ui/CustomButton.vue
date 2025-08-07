<template>
  <div class="custom_button" :class="buttonClasses">
    <button :type="type" :disabled="disabled" @click="onClick">
      <p>{{ text }}</p>
      <div class="custom_button__loader" v-if="loading"></div>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ButtonTypes } from '@/types/ButtonTypes'
import { computed } from 'vue'

const props = withDefaults(defineProps<ButtonTypes>(), {
  text: 'Button',
  type: 'button',
  disabled: false,
  onClick: () => {},
  loading: false,
  theme: 'primary',
})

const buttonClasses = computed(() => {
  return `custom_button__${props.theme}`
})
</script>

<style scoped></style>
