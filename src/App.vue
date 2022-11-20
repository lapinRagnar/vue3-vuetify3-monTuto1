<template>
  <v-app>

    <div>Bonjour</div>

    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<script setup>

  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
