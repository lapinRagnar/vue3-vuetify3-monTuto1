<template>
  <v-app>

      <v-toolbar
        dark
        prominent
        color="orange-lighten-3"
      >

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="text-green-darken-4 font-weight-bold">
        Decouverte Vuetify 3
      </v-toolbar-title>

      <v-toolbar-items>

        <v-btn
          :to="{name: 'home'}"
        >
          <v-icon>mdi:mdi-home</v-icon>
          <span class="ml-2">Home</span>
        </v-btn>

        <v-btn
          :to="{name: 'portfolio'}"
        >
          <v-icon>fa-solid fa-briefcase</v-icon>
          <span class="ml-2">Portfolio</span>
        </v-btn>

        <v-btn
          :to="{name: 'about'}"
        >
          <v-icon>fa-solid fa-info</v-icon>
          <span class="ml-2">About</span>
        </v-btn>


        <v-btn
        >
          <v-avatar color="surface-variant">
            <v-img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
          </v-avatar>

          <v-menu activator="parent" width="150" >
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
                class="bg-blue-darken-4"
                :to="{name: item.lien}"
              >
                <div class="d-flex ma-2">
                  <v-icon class="mr-4">{{item.icon}}</v-icon>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </div>
              </v-list-item>
            </v-list>
          </v-menu>


        </v-btn>

      </v-toolbar-items>

    </v-toolbar>

    <v-container fluid justify="center" align-content="center" class="fill-height bg-green-lighten-5">

      <v-row class="fill-height">

        <v-col
          class="d-flex flex-column align-center justify-space-around bg-amber  "
        >

          <v-main class="bg-blue-grey-lighten-5 w-25 text-center w-100">
            <RouterView></RouterView>
          </v-main>

        </v-col>

      </v-row>

    </v-container>

  </v-app>

</template>

<script setup>

  import { RouterLink, RouterView } from 'vue-router'
  import { useAuthStore } from '@/stores/auth'
  import { ref } from 'vue';

  const authStore = useAuthStore()

  const items = ref([
    { title: 'Login', icon: 'fa-solid fa-user-tie', lien: 'login' },
    { title: 'Settings', icon: 'fa-solid fa-gear', lien: '' },
    { title: 'Profile', icon: 'fa-solid fa-person-circle-exclamation', lien: '' },
    { title: 'Admin', icon: 'fa-solid fa-unlock', lien: '' },
    { title: 'Logout', icon: 'fa-solid fa-right-from-bracket', lien: '' },
  ])


  console.log('authStore', authStore)

</script>

<style lang="scss">

</style>
