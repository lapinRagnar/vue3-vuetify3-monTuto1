<template>
  <div>

    <h1>Mon Portfolio Layout</h1>

    <div>
      <RouterView />
    </div>

    <v-btn class="mt-15" :to="{name: 'home'}">Home</v-btn>

  </div>



</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'


</script>
