import { defineStore } from 'pinia'
import { ref } from 'vue'
//using pinia library
export const useInfoStore = defineStore('info', () => {
  const firstName = ref()
  const lastName = ref()
  const gender = ref()
  const birthDate = ref()
  const healthCardNumber = ref()

  function setName(fName, lName) {
    firstName.value = fName
    lastName.value = lName
  }

  function setExtraInfo(g, bDate, hNumber) {
    gender.value = g
    birthDate.value = bDate
    healthCardNumber.value = hNumber
  }

  return { firstName, lastName, gender, birthDate, healthCardNumber, setName, setExtraInfo }
})
