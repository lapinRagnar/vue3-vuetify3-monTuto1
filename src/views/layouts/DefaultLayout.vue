<template>

  <v-app>

    <v-toolbar
      dark
      prominent
      color="black"
    >

      <v-toolbar-title
        class="text-green-darken-4 font-weight-bold"
        v-if="!authStore.user.isAuthenticated"
      >
        Decouverte Vuetify 3
      </v-toolbar-title>

      <v-toolbar-title
        v-else
        class="text-green-darken-4 font-weight-bold"
      >
        Bonjour - {{ authStore.user.pseudoEmail }}
      </v-toolbar-title>



      <v-spacer></v-spacer>

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


        <v-btn>

          <v-avatar color="surface-variant">

            <v-img
              v-if="authStore.user.isAuthenticated"
              :src="authStore.user.photoURL"
            ></v-img>
            <v-icon
              v-else
            >fa-solid fa-unlock-keyhole</v-icon>


          </v-avatar>

          <v-menu activator="parent" width="150"  >
            <v-list v-if="!authStore.user.isAuthenticated" >
              <v-list-item
                class="bg-blue-darken-4"
                :to="{name: 'login'}"
              >
                <div class="d-flex ma-2">
                  <v-icon class="mr-4">fa-solid fa-user-tie</v-icon>
                  <v-list-item-title>Login</v-list-item-title>
                </div>
              </v-list-item>
            </v-list>

            <v-list v-else>
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

              <v-list-item
                class="bg-blue-darken-4"
                @click="authStore.logout"
              >
                <div class="d-flex ma-2">
                  <v-icon class="mr-4">fa-solid fa-right-from-bracket</v-icon>
                  <v-list-item-title>Logout</v-list-item-title>
                </div>

              </v-list-item>
              
            </v-list>

          </v-menu>


        </v-btn>

      </v-toolbar-items>

    </v-toolbar>

    <v-container fluid justify="center" align-content="center" class="fill-height bg-green-accent-1">

      <v-row class="fill-height">

        <v-col
          class="d-flex flex-column align-center justify-space-around "
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
    { title: 'Profile', icon: 'fa-solid fa-person-circle-exclamation', lien: 'profile' },
    { title: 'Admin', icon: 'fa-solid fa-unlock', lien: 'administration' },
    { title: 'Settings', icon: 'fa-solid fa-gear', lien: '' },
  ])


  console.log('authStore', authStore)

</script>

