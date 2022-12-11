<template>
  <div>

    <h1>Home - salut</h1>




  </div>
</template>

<script setup>

  import { ref } from 'vue'

  const items = ref([
    {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
  ])

  const maListes = ref([
    { text: 'Real-Time', icon: 'fa-solid fa-house' },
    { text: 'Audience', icon: 'fa-solid fa-house' },
    { text: 'Conversions', icon: 'fa-solid fa-house' },
  ])

</script>

<style>
  .active-class-selected{
    background-color: red;
    border: 1px solid green;
  }
</style>
