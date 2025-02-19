<script setup>
import { ref } from 'vue'
import { useInfoStore } from '@/stores/info.js'
import { useRouter } from 'vue-router'

//to share and manage state across components
const store = useInfoStore()
const firstName = ref(store.firstName)
const lastName = ref(store.lastName)
const requiredRule = (value) => !!value || 'Field is required'
const alphabeticRule = (value) => /^[A-Za-z\s]+$/.test(value) || 'Invalid name'

const router = useRouter()

function onSubmit() {
  if (!firstName.value || !lastName.value) return

  store.setName(firstName, lastName)
  router.push({ name: 'extra' })
}
</script>

<template>
  <div class="mt-5">
    <v-row justify="center">
      <v-col lg="8" md="8" sm="10">
        <v-card class="pa-8" elevation="2">
          <h1>Enter your name</h1>

          <v-form class="mt-5" @submit.prevent="onSubmit">
            <v-text-field
              v-model="firstName"
              :rules="[requiredRule, alphabeticRule]"
              clearable
              label="First name"
              required
            />

            <v-text-field
              v-model="lastName"
              :rules="[requiredRule, alphabeticRule]"
              class="mt-2"
              clearable
              label="Last name"
              required
            />

            <v-btn block class="mt-2" color="#1EA896" text="Save" type="submit" />
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
