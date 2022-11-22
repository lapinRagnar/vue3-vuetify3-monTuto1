<template>
  <div>
    <h1>Page 404 - Not found</h1>
  </div>

  <div>
    <RouterLink :to="{name: 'home'}">Retour Home</RouterLink>
  </div>

</template>

<script setup>
  import { RouterLink } from 'vue-router'
</script>
