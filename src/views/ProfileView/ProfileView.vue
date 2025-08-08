<template>
  <div class="profile_view">
    <ProfileCard :profile="user" @open-modal="openModal('editProfile')" />
  </div>
</template>

<script setup lang="ts">
import ProfileCard from "@/components/cards/ProfileCard.vue";
import { useUserStoreRefs, useUserStore } from "@/stores/useUserStore";
import { onMounted } from "vue";
import { useModalStore } from "@/stores/useModalStore";

const { user } = useUserStoreRefs();
const { fetchUser } = useUserStore();

const { openModal } = useModalStore();

onMounted(() => {
  fetchUser();
});
</script>

<style scoped lang="scss">
.profile_view {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
}
</style>
