<template>

  <v-app class="fond">
    <RouterView />
  </v-app>

</template>

<script setup>
</script>

<style lang="scss">
  .fond {
    /* Created with https://www.css-gradient.com */
    background: #357B5A !important;
    background: -webkit-linear-gradient(top left, #357B5A, #0EC311) !important;
    background: -moz-linear-gradient(top left, #357B5A, #0EC311) !important;
    background: linear-gradient(to bottom right, #357B5A, #0EC311) !important;
  }
</style>
