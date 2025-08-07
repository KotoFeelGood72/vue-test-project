<template>
  <div class="profile-card">
    <AvatarSingleImg :image="profile.image" />
    <div class="profile_card__content">
      <h3>{{ profile.name }}</h3>
      <p>{{ profile.description }}</p>
      <RouterLink :to="'/profile/edit'"> Редактировать профиль </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProfileCardTypes } from '@/types/ProfileCardTypes'
import AvatarSingleImg from '@/components/ui/AvatarSingleImg.vue'

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
