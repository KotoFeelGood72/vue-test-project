<template>
  <div>
    <ProfileCard :profile="user" />
  </div>
</template>

<script setup lang="ts">
import ProfileCard from '@/components/cards/ProfileCard.vue'
import { useUserStoreRefs } from '@/stores/useUserStore'

const { user } = useUserStoreRefs()
</script>

<style scoped></style>
