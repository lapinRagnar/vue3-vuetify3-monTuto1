<template>

  <v-row class="background conteneur">

    <v-col cols="10" sm="6" class="gauche">


      <v-dialog
        v-model="autreVariableGlobale.dialog"
        width="500"
      >
        <v-card>
          <v-card-text>
            <div class="text-red">
              {{ authStore.user.messageAuth }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="autreVariableGlobale.dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


    </v-col>

    <v-col cols="10" sm="4" class="droite" >
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

          </v-card-text>

          <v-card-actions>

            <v-btn
              color="success"
              class="mr-4"
              @click="valider"
            >
              Login
            </v-btn>

          </v-card-actions>

        </v-form>


        <v-card-actions>

          <v-btn
            @click="goToSignUp"
            :loading="loading"
          >
            create an account
          </v-btn>

        </v-card-actions>

      </v-card>

    </v-col>

  </v-row>

</template>

<script setup>

  import { reactive, ref } from 'vue'

  import { useAuthStore } from '@/stores/auth'
  import { useAutreVariableGlobale } from '@/stores/autreVariableGlobale'

  import { useRouter } from 'vue-router'


  const router = useRouter()
  const form = ref(null)

  const loading = ref(false)

  const authStore = useAuthStore()
  const autreVariableGlobale = useAutreVariableGlobale()

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

    if (valid) {
      authStore.user.email = state.email
      authStore.user.password = state.password

      loading.value = true
      authStore.login()
      loading.value = false

    } else {
      console.log('erreur de connexion')
      authStore.user.messageAuth = 'Non connecté!'
    }

  }

  const goToSignUp = async() => {
    await router.push({ name: 'signup'})
  }


</script>


<style lang="scss">

  .conteneur {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .gauche {
      width: 100%;
      background-color: yellowgreen;
    }

    .droite {
      margin-left: -90px;
    }
  }

</style>
