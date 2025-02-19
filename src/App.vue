<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-layout>
      <v-app-bar :elevation="2" color="#1EA896">
        <v-app-bar-title>SPA</v-app-bar-title>
      </v-app-bar>

      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>
