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

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
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
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card"
            cols="12"
          >
            <v-card>

              <v-list lines="two">
                <v-list-subheader>{{ card }}</v-list-subheader>
                <template v-for="n in 6" :key="n">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-avatar color="grey-darken-1"></v-avatar>
                    </template>

                    <v-list-item-title>Message {{ n }}</v-list-item-title>

                    <v-list-item-subtitle>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
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


</script>


