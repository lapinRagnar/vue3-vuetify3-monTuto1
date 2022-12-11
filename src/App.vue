<template >

  <div>
    <RouterView></RouterView>
  </div>


</template>

<script setup>

  // import { RouterView } from 'vue-router'
  import { useAuthStore } from '@/stores/auth'

  import { onMounted, } from 'vue'

  const authStore = useAuthStore()

  onMounted(() => {
    authStore.initialisationUser()
  })

</script>

<style lang="scss">


</style>
