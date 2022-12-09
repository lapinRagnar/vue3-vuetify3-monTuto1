import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {

  const user = reactive({
    id: '',
    email: '',
    password: '',
    isAuthenticated: false
  })

  return {
    user
  }

})
