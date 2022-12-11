import { defineStore } from 'pinia'
import { ref } from 'vue'



export const useAutreVariableGlobale = defineStore('autreVariableGlobale', () => {

  const dialog = ref(false)



  return {
    dialog
  }

})
