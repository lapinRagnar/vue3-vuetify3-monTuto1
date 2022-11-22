<template>
  <div>

    <h1>Mon Portfolio Layout</h1>

    <div>
      <RouterView />
    </div>

    <RouterLink :to="{name: 'home'}">Home</RouterLink>

  </div>



</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'


</script>
