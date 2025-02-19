<script setup>
import { useInfoStore } from '@/stores/info.js'

const store = useInfoStore()
</script>

<template>
  <div class="mt-5">
    <v-row justify="center">
      <v-col lg="8" md="8" sm="10">
        <v-card class="pa-8" elevation="2">
          <div class="d-flex flex-column align-center">
            <span class="mdi mdi-check text-green text-h1"></span>

            <h1 class="mt-2 mb-3">Summary</h1>
          </div>

          <hr class="mb-3" />

          <p class="text-h6 mb-2"><b>First Name:</b> {{ store.firstName }}</p>
          <p class="text-h6 mb-2"><b>Last Name:</b> {{ store.lastName }}</p>
          <p class="text-h6 mb-2"><b>Birth Date:</b> {{ store.birthDate }}</p>
          <p class="text-h6 mb-2"><b>Gender:</b> {{ store.gender }}</p>
          <p class="text-h6 mb-2"><b>Health Card Number:</b> {{ store.healthCardNumber }}</p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
