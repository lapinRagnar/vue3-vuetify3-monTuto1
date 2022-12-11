import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { auth } from '@/firebase/config.js'
import { useRouter } from "vue-router"


export const useAuthStore = defineStore('auth', () => {

  const router = useRouter()

  const user = reactive({
    id: '',
    pseudoEmail: '',
    email: '',
    password: '',
    isAuthenticated: false,
    messageAuth: '',
  })


  async function signup() {

    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(async (userCredential) => {
      // Signed in
      const utilisateur = userCredential.user
      user.messageAuth = 'utilisateur bien enregistré!'
      user.isAuthenticated = true
      console.log('bien enregistré', utilisateur)
      await router.push({ name: 'home'})
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('erreur code, errorMessage', errorCode, errorMessage)
    })

  }


  function initialisationUser() {

    onAuthStateChanged(auth, (utilisateur) => {
      if (utilisateur) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        user.id = utilisateur.uid
        user.isAuthenticated = true
        user.email = utilisateur.email
        user.pseudoEmail = user.email.substring(0, user.email.indexOf('@'))
        console.log(`----- l'user ${user.id} - ${user.email} - isAuthenticated = ${user.isAuthenticated}`)
        console.log('##################################################################')
        console.log("tout l'user", utilisateur)
        console.log('*********************************************************************')
      } else {
        // User is signed out
        // ...
        console.log('user deconnecté')
        user.email = ''
        user.password = ''
        user.id = ''
        user.isAuthenticated = false
      }
    })
  }

  async function logout() {

    await signOut(auth)
    .then(async () => {
      console.log('bien deconnecté!')
      user.messageAuth = 'bien connecté!'
      await router.push({ name: 'home'})
    }).catch((error) => {
      console.log('error', error)
    });

  }

  async function login() {

    await signInWithEmailAndPassword(auth, user.email, user.password)
    .then( async (userCredential) => {
      // Signed in
      const utilisateur = userCredential
      console.log('mon credential', utilisateur)

      await router.push({ name: 'home'})

    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      user.messageAuth = 'Login ou Password incorrect'
      console.log('errorCode, errorMessage', errorCode, errorMessage)
    })

  }


  return {
    user, signup, initialisationUser, logout, login
  }

})
