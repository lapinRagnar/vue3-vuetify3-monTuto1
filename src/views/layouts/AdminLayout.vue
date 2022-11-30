<template>

  <v-app id="inspire">

    <!-- la navbar -->

    <v-app-bar
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      elevation="4"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <!---------------------- formulaire de recherche ----------------------------------------- -->

      <v-col cols="12" sm="6">

        <v-form class="mt-6">
          <v-text-field
            type="text"
            placeholder="tapez ce que tu veux ..."
            label="recherche"
            outlined
            color="primary"
            append-inner-icon="fa-solid fa-magnifying-glass"
          >
          </v-text-field>
        </v-form>

      </v-col>

      <v-spacer />

      <!----------------------------------- menu avec la cloche ---------------------- -->

      <v-btn
        color="primary"
        stacked
      >

        <v-badge content="2" color="error">
          <v-icon>fa-regular fa-bell</v-icon>
        </v-badge>

        <v-menu activator="parent">
          <v-list
            :items="items"
            item-props
            lines="three"
            width="250"
          >
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
          </v-list>

        </v-menu>

      </v-btn>

      <!----------------------- bouton login avec image -------------------------------------------------- -->

      <div>LapinRagnar</div>

      <v-btn
        color="primary"
        stacked
      >
        <v-avatar size="35">
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          ></v-img>
        </v-avatar>

        <v-menu activator="parent">
          <v-list >
            <v-list-item
              v-for="(item, index) in menusNav"
              :key="index"
              :value="index"
              width="150"
              class="d-flex"
            >

              <v-icon class="mr-5">{{ item.icon }}</v-icon>   {{ item.texte }}

            </v-list-item>
          </v-list>
        </v-menu>

    </v-btn>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer">

      <v-img
        class="pa-5"
        src="https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2015/12/Samsung-GalaxyS7-600.jpg"
      >

        <div class="text-center mt-5">

          <v-avatar
            class="mb-4"
            color="grey-darken-1"
            size="64"

          >
            <v-img
              src="https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg"

            ></v-img>

          </v-avatar>

          <h3 class="text-white">Tableau de bord</h3>


        </div>

      </v-img>



      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <template v-slot:prepend>
            <v-icon>{{ icon }}</v-icon>
          </template>

          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <router-view></router-view>

      </v-container>
    </v-main>
  </v-app>

</template>



<script setup>

  import { ref } from 'vue'

  // import NavBarAdmin from '@/components/NavBarAdmin.vue'

  const cards = ref(['Today', 'Yesterday'])
  const drawer = ref(true)
  const links = ref([
    ['fa-solid fa-gauge-simple', 'Dashboard'],
    ['fa-regular fa-user', 'Profile'],
    ['fa-brands fa-product-hunt', 'Product'],
    ['fa-solid fa-cart-shopping', 'Order'],
    ['fa-solid fa-gears', 'Settings'],
  ])
  const items = ref([
    { type: 'subheader', title: 'Today' },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?',
      subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      title: 'Summer BBQ',
      subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      title: 'Birthday gift',
      subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      title: 'Recipe to try',
      subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    },
  ])

  const menusNav = ref([
    { icon: 'fa-regular fa-user', texte: 'Login' },
    { icon: 'fa-solid fa-address-book', texte: 'Profile' },
    { icon: 'fa-solid fa-user-pen', texte: 'Settings' },
    { icon: 'fa-solid fa-right-from-bracket', texte: 'Logout' },
  ])


</script>


