<template>
  <div class="profile-card">
    <AvatarSingleImg :image="profile.image" />
    <div class="profile_card__content">
      <div class="profile_card__content_name">
        <h3>{{ profile.name }}</h3>
        <p>{{ profile.description }}</p>
      </div>
      <RouterLink :to="'/profile/edit'" class="profile_card__edit_link">
        Редактировать профиль
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProfileCardTypes } from "@/types/ProfileCardTypes";
import AvatarSingleImg from "@/components/ui/AvatarSingleImg.vue";

withDefaults(
  defineProps<{
    profile: ProfileCardTypes;
  }>(),
  {
    profile: () => ({
      name: "Нет имени",
      description: "Нет описания",
      image: null,
    }),
  }
);
</script>

<style scoped lang="scss">
.profile-card {
  border-radius: 20px;
  border: 1px solid #000;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  text-align: center;
}

.profile_card__content_name {
  display: flex;
  flex-direction: column;
  gap: 14px;

  h3 {
    font-size: 26px;
  }
}

.profile_card__content {
  display: flex;
  flex-direction: column;
  gap: 37px;
}

.profile_card__edit_link {
  font-size: 16px;
  color: #8d8d8d;
  text-decoration: none;
  border-bottom: 1px solid #8d8d8d;
  transition: all 0.3s ease;

  &:hover {
    color: #000;
    border-bottom: 1px solid #000;
  }
}
</style>
