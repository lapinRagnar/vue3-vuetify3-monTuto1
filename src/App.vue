<template>
  <v-app>

    <h1>Bonjour</h1>
    <div>connecté : {{ authStore.isAuthenticated}}</div>


    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<script setup>

  import { RouterLink, RouterView } from 'vue-router'

  import { useAuthStore } from '@/stores/auth'

  const authStore = useAuthStore()

  console.log('authStore', authStore)

</script>
