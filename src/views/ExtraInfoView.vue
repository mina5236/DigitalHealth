<script setup>
import { useInfoStore } from '@/stores/info.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const genderChoices = ['Male', 'Female']
const today = new Date().toISOString().split('T')[0]

function validateHealthCardNumber(number) {
  //2222222222
  if (!number) return 'Field is required'

  let digits = number.toString().split('').map(Number)
  let sum = 0
  let alternate = false

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i]

    //false
    if (alternate) {
      digit *= 2
      if (digit > 9) digit -= 9
    }

    sum += digit
    alternate = !alternate
  }

  return sum % 10 === 0
}

const store = useInfoStore()
const birthDate = ref(store.birthDate)
const healthCardNumber = ref(store.healthCardNumber)
const gender = ref(store.gender || genderChoices[0])

const requiredRule = (value) => !!value || 'Field is required'
const cardNumberRule = (value) => validateHealthCardNumber(value) || 'Invalid Health Card Number'

const router = useRouter()

function onSubmit() {
 // console.log('Inja')
  if (!birthDate.value || !gender.value || !validateHealthCardNumber(healthCardNumber.value)) return

 // console.log('Unja')
  store.setExtraInfo(gender, birthDate, healthCardNumber)
  router.push({ name: 'summary' })
}
</script>

<template>
  <div class="mt-5">
    <v-row justify="center">
      <v-col lg="8" md="8" sm="10">
        <v-card class="pa-8" elevation="2">
          <h1>Enter Extra Info</h1>

          <v-form class="mt-5" @submit.prevent="onSubmit">
            <v-text-field
              v-model="birthDate"
              :max="today"
              :rules="[requiredRule]"
              required
              type="date"
            />

            <v-text-field
              v-model="healthCardNumber"
              :rules="[cardNumberRule]"
              label="Health Card Number"
              required
            />

            <v-select v-model="gender" :items="genderChoices" :rules="[requiredRule]" />

            <v-btn block class="mt-2" color="#1EA896" text="Save" type="submit" />
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
