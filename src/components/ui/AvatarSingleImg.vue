<template>
  <div class="avatar_single__img">
    <img :src="image.src" :alt="image.alt" v-if="image" />
    <div v-else class="avatar_single__img__default">
      <span>НЕТ ФОТО</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { AvatarSingleImgProps } from "@/types/ProfileCardTypes";

defineProps<{
  image: AvatarSingleImgProps | null;
}>();
</script>

<style scoped lang="scss">
.avatar_single__img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.avatar_single__img__default {
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #8d8d8d;
}
</style>
