<template>
  <div>

    <h1>Mon layout pour l'authentication</h1>

    <div>
      <RouterView />
    </div>

    <RouterLink :to="{name: 'home'}">Home</RouterLink>

  </div>
</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>
