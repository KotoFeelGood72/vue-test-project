import { defineStore, storeToRefs } from 'pinia'
import type { UserProfile, EditUserRequest } from '@/types/api'
import { ApiService } from '@/services/api'

export const useUserStore = defineStore('users', {
  state: () => ({
    user: null as UserProfile | null,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchUser() {
      this.loading = true
      this.error = null
      try {
        this.user = await ApiService.getUser()
      } catch (error) {
        this.error = 'Ошибка при загрузке данных пользователя'
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateUser(data: EditUserRequest) {
      this.loading = true
      this.error = null
      try {
        this.user = await ApiService.editUser(data)
      } catch (error) {
        this.error = 'Ошибка при обновлении данных пользователя'
        console.error(error)
      } finally {
        this.loading = false
      }
    },
  },
})

export const useUserStoreRefs = () => storeToRefs(useUserStore())
