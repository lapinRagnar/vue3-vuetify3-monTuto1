<template>
  <v-app>

    <v-toolbar
      class="bg-green-accent-2"
    >

      <v-toolbar-title class="text-green-darken-4 font-weight-bold">
        Decouverte Vuetify 3
      </v-toolbar-title>

      <v-toolbar-items>

        <v-btn
        :to="{name: 'home'}"
        color="white"
        >Home</v-btn>

        <v-btn
          :to="{name: 'about'}"
          color="primary"
        >About</v-btn>

        <v-btn
          :to="{name: 'login'}"
          color="primary"
        >Login</v-btn>

        <v-btn
          :to="{name: 'administration'}"
          color="primary"
        >Admin</v-btn>


      </v-toolbar-items>



    </v-toolbar>

    <v-container fluid justify="center" align-content="center" class="fill-height bg-green-lighten-5">

      <v-row class="fill-height">

        <v-col
          class="d-flex flex-column align-center justify-space-around bg-amber  "
        >

          <h1 class="bg-brown-lighten-4 w-25 text-center" >Bonjour</h1>
          <div class="bg-teal-lighten-4">connecté : {{ authStore.isAuthenticated}}</div>

          <div class="bg-blue-grey-lighten-2 w-25 text-center">
            je suis la
            <RouterView></RouterView>
          </div>

        </v-col>

      </v-row>

    </v-container>

  </v-app>

</template>

<script setup>

  import { RouterLink, RouterView } from 'vue-router'

  import { useAuthStore } from '@/stores/auth'

  const authStore = useAuthStore()

  console.log('authStore', authStore)

</script>

<style lang="scss">

</style>
