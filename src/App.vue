<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";
import ProfileEditModal from "@/components/modals/ProfileEditModal.vue";

const { modals } = useModalStore();
</script>

<template>
  <RouterView />
  <Transition name="modal">
    <ProfileEditModal v-if="modals.editProfile" />
  </Transition>
</template>

<style scoped lang="scss">
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
