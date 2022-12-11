<template>

  <v-dialog
    v-model="autreVariableGlobale.dialog"
  >
    <v-card>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="autreVariableGlobale.dialog = false">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>



</template>

<script setup>

  import { useAutreVariableGlobale } from '@/stores/autreVariableGlobale'

  const autreVariableGlobale = useAutreVariableGlobale()


</script>


