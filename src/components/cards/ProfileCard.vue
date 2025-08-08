<template>
  <div class="profile-card">
    <AvatarSingleImg :image="profile?.avatar" />
    <div class="profile_card__content">
      <div class="profile_card__content_name">
        <h3>{{ fullName }}</h3>
        <p v-if="profile?.about_text">{{ profile?.about_text }}</p>
      </div>
      <div @click="onClickEditProfile" class="profile_card__edit_link">
        Редактировать профиль
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits } from "vue";
import type { UserProfile } from "@/types/api";
import AvatarSingleImg from "@/components/ui/AvatarSingleImg.vue";
import { buildString } from "@/utils/buildString";

const emit = defineEmits<{
  (e: "open-modal", modalName: string): void;
}>();

const onClickEditProfile = () => {
  emit("open-modal", "editProfile");
};

const props = defineProps<{
  profile: UserProfile | null;
}>();

const fullName = computed(() => {
  const { first_name, last_name } = props.profile?.user || {};
  return buildString([last_name, first_name]);
});
</script>

<style scoped lang="scss">
.profile-card {
  border-radius: 20px;
  border: 1px solid #000;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  text-align: center;
  max-width: 270px;
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
  text-decoration: underline;
  text-underline-offset: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #000;
  }
}
</style>
