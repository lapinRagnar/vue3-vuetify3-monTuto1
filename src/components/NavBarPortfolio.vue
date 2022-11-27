<template>
  <v-app-bar
    app
    color="black"
    dark
    flat
    class="px-12 flex-column"
    height="100"
  >
    <v-btn>
      <v-icon
        color="yellow"
        left
        class="mr-2"
        :to="{name: 'home'}"
      >fas fa-signature
      </v-icon>
      LapinRagnar
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
      @click="scroll('home')"
      :class="hashSelected == 'home' ? 'navigation-selectionnee' : '' "
    >
      <v-icon left class="mr-2" icon="fa-solid fa-house" />
      <span class="d-xl-none"> <span>Home</span></span>
    </v-btn>


    <v-btn
      @click="scroll('about')"
      :class="hashSelected == 'about' ? 'navigation-selectionnee' : '' "
    >
      <v-icon left class="mr-2" icon="fa-solid fa-question" />
      <span class="d-xl-none"> <span>About</span></span>
    </v-btn>

    <v-btn
      @click="scroll('portfolio')"
      :class="hashSelected == 'portfolio' ? 'navigation-selectionnee' : '' "
    >
      <v-icon left class="mr-2" icon="fa-solid fa-list-check" />
      Portfolio
    </v-btn>

    <v-btn
      @click="scroll('service')"
      :class="hashSelected == 'service' ? 'navigation-selectionnee' : '' "
    >
      <v-icon left class="mr-2" icon="fa-solid fa-person-digging" />
      Service
    </v-btn>

    <v-btn
      @click="scroll('page')"
      :class="hashSelected == 'page' ? 'navigation-selectionnee' : '' "
    >
      <v-icon left class="mr-2" icon="fa-solid fa-pencil" />
      Page
    </v-btn>

    <v-btn
      @click="scroll('blog')"
      :class="hashSelected == 'blog' ? 'navigation-selectionnee' : '' "
    >
      <v-icon left class="mr-2" icon="fa-solid fa-blog" />
      Blog
    </v-btn>

    <v-btn
      @click="scroll('contact')"
      :class="hashSelected == 'contact' ? 'navigation-selectionnee' : '' "
    >
      <v-icon left class="mr-2" icon="fa-solid fa-address-card" />
      Contact
    </v-btn>



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
</style>


