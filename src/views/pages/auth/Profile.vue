<template>

  <v-row class="background conteneur mt-15">

    <v-col cols="10" sm="4" >

      <v-card
        class=" text-center pa-4 bg-indigo-lighten-4"
        max-width="600"
        variant="flat"
      >

        <v-avatar color="surface-variant" size="100">

          <v-img
            v-if="authStore.user.photoURL"
            :src="authStore.user.photoURL"
          ></v-img>

          <v-icon
            v-else
            size="60"
            icon="mdi:mdi-account"
          ></v-icon>

        </v-avatar>

        <v-form
          ref="form"
          v-model="state.isValid"
        >
          <v-card-text>

            <v-text-field
              v-model="authStore.user.displayName"
              :rules="state.NonEmptyRule"
              label="Display Name"
              required
              type="text"
              prepend-inner-icon="fa-regular fa-keyboard"
            ></v-text-field>


            <v-text-field
              v-model="authStore.user.photoURL"
              label="Photo"
              required
              type="text"
              prepend-inner-icon="fa-solid fa-image"
            ></v-text-field>

            <v-text-field
              v-model="authStore.user.phoneNumber"
              label="Phone Number"
              required
              type="text"
              prepend-inner-icon="fa-solid fa-mobile"
            ></v-text-field>

            <v-text-field
              v-model="authStore.user.email"
              :rules="state.emailRules"
              label="E-mail"
              required
              type="email"
              prepend-inner-icon="mdi:mdi-account"
              disabled
            ></v-text-field>



            <v-text-field
              v-model="authStore.user.lastLoginAt"
              label="Last login at"
              required
              type="text"
              prepend-inner-icon="fa-regular fa-clock"
              disabled
            ></v-text-field>

            <v-text-field
              v-model="authStore.user.createdAt"
              label="Created at"
              required
              type="text"
              prepend-inner-icon="fa-regular fa-clock"
              disabled
            ></v-text-field>

          </v-card-text>

          <v-card-actions>

            <v-btn
              color="success"
              class="mr-4"
              @click="valider"
              :loading="loading"
            >
              Update
            </v-btn>

          </v-card-actions>

        </v-form>


      </v-card>

    </v-col>

    <v-col cols="10" sm="6" class="droite" >

    </v-col>

  </v-row>

</template>

<script setup>

  import { reactive, ref } from 'vue'
  import { useAuthStore } from '@/stores/auth'
  import { useRouter } from "vue-router"


  const router = useRouter()
  const form = ref(null)
  const authStore = useAuthStore()

  const loading = ref(false)

  const state = reactive({
    isValid: false,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    NonEmptyRule: [
      v => !!v || 'Champ requis'
    ]
  })


  async function valider(){

  const { valid } = await form.value.validate()

  if (valid) {
    loading.value = true
    authStore.profile()
    loading.value = false

  } else {
    console.log('erreur de validation')
  }
  }

  const goToLogin = async () => {
    await router.push({ name: 'login'})
  }


</script>

<style lang="scss">
  .background {
    background-image: url('yellow-green-abstract.jpg');
    max-height: 600px;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    background-size: cover;
  }

  .conteneur {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .droite {
    height: 500px;
    background-color: rgba($color: #527b52, $alpha: 1.0);
  }
</style>
