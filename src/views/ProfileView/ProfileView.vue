<template>
  <div class="profile_view">
    <ProfileCard :profile="user" />
  </div>
</template>

<script setup lang="ts">
import ProfileCard from "@/components/cards/ProfileCard.vue";
import { useUserStoreRefs } from "@/stores/useUserStore";

const { user } = useUserStoreRefs();
</script>

<style scoped lang="scss">
.profile_view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
}
</style>
