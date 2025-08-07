import { defineStore, storeToRefs } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => ({
    user: {
      name: 'Нет имени',
      description: 'Нет описания',
      image: null,
    },
  }),
  actions: {},
})

export const useUserStoreRefs = () => storeToRefs(useUserStore())
