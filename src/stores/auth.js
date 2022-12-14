import { reactive } from 'vue'
import { defineStore } from 'pinia'
import {
  updateProfile,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

import { auth } from '@/firebase/config.js'
import { useRouter } from "vue-router"

import { useAutreVariableGlobale } from '@/stores/autreVariableGlobale'


export const useAuthStore = defineStore('auth', () => {

  const router = useRouter()
  const autreVariableGlobale = useAutreVariableGlobale()

  const user = reactive({
    id: '',
    pseudoEmail: '',
    email: '',
    password: '',
    isAuthenticated: false,
    messageAuth: '',
    photoURL: '',
    phoneNumber: '',
    lastLoginAt: '',
    createdAt: '',
    displayName: '',

  })


  async function signup() {

    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(async (userCredential) => {
      // Signed in
      const utilisateur = userCredential.user
      user.messageAuth = 'utilisateur bien enregistrĂ©!'
      user.isAuthenticated = true
      console.log('bien enregistrĂ©', utilisateur)
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
        user.photoURL = utilisateur.photoURL
        user.phoneNumber = utilisateur.phoneNumber
        user.lastLoginAt = utilisateur.metadata.lastSignInTime
        user.createdAt = utilisateur.metadata.lastSignInTime
        user.displayName = utilisateur.displayName

        console.log('##################################################################')
        console.log("tout l'user", utilisateur)
      } else {
        // User is signed out
        // ...
        console.log('user deconnectĂ©')
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
      console.log('bien deconnectĂ©!')
      user.messageAuth = 'bien connectĂ©!'
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
      await router.push({ name: 'home'})

    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      user.messageAuth = 'Login ou Password incorrect'
      autreVariableGlobale.dialog = true

      console.log('errorCode, errorMessage', errorCode, errorMessage)
    })

  }

  async function profile() {

    await updateProfile(auth.currentUser, {
      displayName: user.displayName,
      photoURL: user.photoURL
    }).then(async () => {
      // Profile updated!
      // ...
      console.log('user bien mises Ă  jour!')
      await router.push({ name: 'home'})
    }).catch((error) => {
      // An error occurred
      // ...
      console.log('erreur de mises Ă  jour')
      console.log('mon erreur', error)
      user.messageAuth = 'erreur de mise Ă  jour - champ incorrect!'
      autreVariableGlobale.dialog = true
    })
  }


  return {
    user, signup, initialisationUser, logout, login, profile
  }

})
