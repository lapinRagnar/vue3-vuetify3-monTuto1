<template>

  <div class="dashboard">

    <div class="d-flex align-center justify-space-between bg-amber-lighten-2 pa-5 pb-15 rounded-b-circle">
      <div class="text-h2 font-weight-bold">Dashboard</div>
      <v-btn color="success">Orders</v-btn>
    </div>

    <v-row class="mt-5">

      <!-- colonne à gauche -->

      <v-col
        lg="7" sm="12"  cols="12"
      >

        <v-alert
          density="comfortable"
          type="success"
          variant="tonal"
          class="mb-10"
        >
          Hi <strong>LapinRagnar</strong>
        </v-alert>

        <v-divider></v-divider>

        <v-row>

          <v-col cols="12" sm="12" md="6" lg="6" xl="6" v-for="(item, index) in activities" :key="index" class="bg-green-lighten-2">

            <v-card elevation="2" class="rounded-lg">

              <v-card-text class="d-flex align-center justify-space-between">
                <div class="">
                  <strong> {{ item.title }}</strong><br>
                  <small class="mr-16">last 2 weeks</small>

                  <v-avatar :color="item.color" size="100">
                    <span class="text-white">{{ item.amounts }}</span>
                  </v-avatar>
                </div>

              </v-card-text>

            </v-card>

          </v-col>





        </v-row>

      </v-col>


      <!-- colonne à droite -->

      <v-col cols="12" sm="12" lg="5" xl="5">

        <v-card>

          <v-card-title>activities</v-card-title>

          <v-timeline side="end" align="start">

            <v-timeline-item
              dot-color="pink"
              size="small"
            >
              <div class="d-flex">
                <strong class="mr-4">5pm</strong>
                <div>
                  <strong>New Icon</strong>
                  <div class="text-caption">
                    Mobile App
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item
              dot-color="teal-lighten-3"
              size="small"
            >
              <div class="d-flex">
                <strong class="mr-4">3-4pm</strong>
                <div>
                  <strong>Design Stand Up</strong>
                  <div class="text-caption mb-2">
                    Hangouts
                  </div>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item
              dot-color="pink"
              size="small"
            >
              <div class="d-flex">
                <strong class="mr-4">12pm</strong>
                <div>
                  <strong>Lunch break</strong>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item
              dot-color="teal-lighten-3"
              size="small"
            >
              <div class="d-flex">
                <strong class="mr-4">9-11am</strong>
                <div>
                  <strong>Finish Home Screen</strong>
                  <div class="text-caption">
                    Web App
                  </div>
                </div>
              </div>
            </v-timeline-item>

          </v-timeline>

        </v-card>

      </v-col>

    </v-row>

  </div>

</template>

<script setup>

  import { ref } from 'vue';

  const activities = ref([
    { title: 'Total Products', color: 'red', amounts: '1 020 €' },
    { title: 'Total Category', color: 'purple', amounts: '5 320 €' },
    { title: 'Total Orders', color: 'indigo', amounts: '20 €' },
    { title: 'Pending Orders', color: 'light-blue', amounts: '15 020 €' },
  ])

</script>
