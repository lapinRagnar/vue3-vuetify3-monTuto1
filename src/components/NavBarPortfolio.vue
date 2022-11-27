<template>
  <v-app-bar
    app
    color="black"
    dark
    flat
    class="px-12 mon-app-bar"
    height="100"
  >


    <v-app-bar-title class="text-orange">

      <v-icon

        left
        class="mr-2"
        :to="{name: 'home'}"
      >fas fa-signature
      </v-icon>
      LapinRagnar

    </v-app-bar-title>


    <v-spacer></v-spacer>

    <div>


      <v-btn
        :to="{name: 'home'}"
        :class="hashSelected == 'home' ? 'navigation-selectionnee' : '' "
      >
        <v-icon left class="mr-2" icon="fa-solid fa-house" />
        <span class="hidden-sm-and-down"> <span>Home</span></span>
      </v-btn>


      <v-btn
        @click="scroll('about')"
        :class="hashSelected == 'about' ? 'navigation-selectionnee' : '' "
      >
        <v-icon left class="mr-2" icon="fa-solid fa-question" />
        <span class="hidden-sm-and-down"> <span>About</span></span>
      </v-btn>

      <v-btn
        @click="scroll('portfolio')"
        :class="hashSelected == 'portfolio' ? 'navigation-selectionnee' : '' "
      >
        <v-icon left class="mr-2" icon="fa-solid fa-list-check" />
        <span class="hidden-sm-and-down">
          Portfolio
        </span>
      </v-btn>

      <v-btn
        @click="scroll('service')"
        :class="hashSelected == 'service' ? 'navigation-selectionnee' : '' "
      >
        <v-icon left class="mr-2" icon="fa-solid fa-person-digging" />
        <span class="hidden-sm-and-down">
          Service
        </span>
      </v-btn>

      <v-btn
        @click="scroll('page')"
        :class="hashSelected == 'page' ? 'navigation-selectionnee' : '' "
      >
        <v-icon left class="mr-2" icon="fa-solid fa-pencil" />
        <span class="hidden-sm-and-down">
          Page
        </span>
      </v-btn>

      <v-btn
        @click="scroll('blog')"
        :class="hashSelected == 'blog' ? 'navigation-selectionnee' : '' "
      >
        <v-icon left class="mr-2" icon="fa-solid fa-blog" />
        <span class="hidden-sm-and-down">
          Blog
        </span>
      </v-btn>

      <v-btn
        @click="scroll('contact')"
        :class="hashSelected == 'contact' ? 'navigation-selectionnee' : '' "
      >
        <v-icon left class="mr-2" icon="fa-solid fa-address-card" />
        <span class="hidden-sm-and-down">
          Contact
        </span>
      </v-btn>


    </div>





  </v-app-bar>
</template>

<script setup>

  import { ref } from 'vue';


  const hashSelected = ref('')

  function scroll(refName) {

    const element = document.getElementById(refName)
    element.scrollIntoView({ behavior: 'smooth' })

    hashSelected.value = refName
    console.log('hashSelected', hashSelected.value)
  }


</script>

<style lang="scss" scoped>
  .navigation-selectionnee {
    border-bottom: 2px solid orange;
    color: greenyellow;
  }

  .mon-app-bar {
    min-width: 800px;
    overflow: auto;
  }
</style>


