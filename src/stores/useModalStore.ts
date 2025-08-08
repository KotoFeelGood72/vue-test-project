import { defineStore, storeToRefs } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: (): { modals: Record<string, boolean> } => ({
    modals: {
      editProfile: false,
    },
  }),
  actions: {
    openModal(modalName: string) {
      this.modals[modalName] = !this.modals[modalName]
    },
    closeModal(modalName: string): void {
      this.modals[modalName] = false
    },
    closeAllModals() {
      Object.keys(this.modals).forEach((modalName) => {
        this.modals[modalName as keyof Record<string, boolean>] = false
      })
    },
  },
})

export const useModalStoreRefs = () => storeToRefs(useModalStore())
