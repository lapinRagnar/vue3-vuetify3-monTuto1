<template>

  <v-row class="background conteneur">

    <v-col cols="10" lg="4" >

      <v-card
        class=" text-center pa-4 bg-indigo-lighten-4"
        max-width="600"
        variant="flat"
      >

        <v-avatar color="surface-variant" size="100">
          <v-icon size="60" icon="mdi:mdi-account"></v-icon>
        </v-avatar>

        <v-form
          ref="form"
          v-model="state.isValid"
        >
          <v-card-text>

            <v-text-field
              v-model="state.email"
              :rules="state.emailRules"
              label="E-mail"
              required
              type="email"
              prepend-inner-icon="mdi:mdi-account"
            ></v-text-field>

            <v-text-field
              v-model="state.password"
              :rules="state.passwordRules"
              label="Password"
              required
              :type="state.passwordShow ? 'text' : 'password'"
              prepend-inner-icon="mdi:mdi-key"
              :append-inner-icon="state.passwordShow ? 'mdi:mdi-eye' : 'mdi:mdi-eye-off'"
              @click:append-inner="(state.passwordShow = !state.passwordShow)"
            ></v-text-field>

            <v-switch></v-switch>

          </v-card-text>

          <v-card-actions>

            <v-btn
              color="success"
              class="mr-4"
              @click="valider"
            >
              Signup
            </v-btn>

          </v-card-actions>

        </v-form>


        <v-card-actions>
          <v-btn
            @click="goToLogin"
          >Already have an account?</v-btn>
        </v-card-actions>


      </v-card>

    </v-col>

  </v-row>

</template>

<script setup>

  import { reactive, ref } from 'vue'
  import { useAuthStore } from '@/stores/auth'
  import { uid } from 'uid'
  import { useRouter } from "vue-router"


  const router = useRouter()
  const form = ref(null)
  const authStore = useAuthStore()

  const state = reactive({
    isValid: false,
    password: '',
    passwordShow: false,
    email: '',
    passwordRules: [
      v => !!v || 'Name is required',
      v => v.length >= 4 || 'Password must 4 characters and more',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  })

  async function valider(){

    const { valid } = await form.value.validate()

    authStore.user.email = state.email
    authStore.user.password = state.password

    console.log('dans signup view', authStore.user)

    if (valid) {
      console.log('c valid')
      authStore.signup()

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

</style>
