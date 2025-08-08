<template>
  <div class="custom_button" :class="buttonClasses">
    <button :type="type" :disabled="disabled" @click="onClick">
      <p>{{ text }}</p>
      <GlobalLoader v-if="loading" :size="14" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ButtonTypes } from "@/types/ButtonTypes";
import { computed, defineEmits } from "vue";
import GlobalLoader from "./GlobalLoader.vue";

const props = withDefaults(defineProps<ButtonTypes>(), {
  text: "Button",
  type: "button",
  disabled: false,
  loading: false,
  theme: "primary",
});

const emit = defineEmits<{
  (e: "click"): void;
}>();

const buttonClasses = computed(() => {
  return `custom_button__${props.theme}`;
});

const onClick = () => {
  emit("click");
};
</script>

<style scoped lang="scss">
.custom_button {
  button {
    appearance: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    padding: 20px 29px;
    border-radius: 16px;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover {
      opacity: 0.8;
    }
  }
}

.custom_button__primary {
  button {
    background-color: #000;
    color: #fff;
  }
}

.custom_button__secondary {
  button {
    background-color: #dedede;
    color: #000;
  }
}
</style>
