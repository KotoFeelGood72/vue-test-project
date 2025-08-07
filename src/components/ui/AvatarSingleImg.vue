<template>
  <div class="avatar_single__img">
    <img :src="image.src" :alt="image.alt" v-if="image" />
    <div v-else class="avatar_single__img__default">
      <span>Аватар</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { AvatarSingleImgProps } from '@/types/ProfileCardTypes'

defineProps<{
  image: AvatarSingleImgProps | null
}>()
</script>

<style scoped></style>
