<template>
  <div>

    <h1>Home - salut</h1>

    <v-toolbar color="green" >

      <v-list
        style="display: flex;"
        :items="items"
        active-color="red"
        active-class="active-class-selected"
        lines="one"
        variant="elevated"
      ></v-list>
    </v-toolbar>


    <v-toolbar class="bg-orange">

      <v-list density="compact">

        <v-list-item
          class="d-inline-flex"
          v-for="(liste, i) in maListes"
          :key="i"
          :value="liste"
          active-color="primary"
          mandatory
        >
          <template v-slot:prepend>
            <v-icon :icon="liste.icon"></v-icon>
          </template>

          <v-list-item-title v-text="liste.text"></v-list-item-title>

        </v-list-item>
      </v-list>

    </v-toolbar>

    <v-color-picker></v-color-picker>



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
