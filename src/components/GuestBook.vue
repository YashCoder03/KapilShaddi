<style scoped>

.frame {
  @apply w-4/12 rotate-180;
}

.input-wrapper {
  @apply w-full flex flex-wrap gap-1 mb-3;
}

label {
  @apply w-full text-gray-600 font-medium;
}

input, textarea, select, option {
  @apply w-full px-2 py-3 rounded-lg bg-gray-800 border border-gray-100 shadow-lg duration-300 focus:border-gray-500 text-gray-200 placeholder:text-gray-400;
}

</style>

<template>
  
</template>

<script setup>

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import HeaderSection from '@/components/HeaderSection.vue'
import Alert from '@/components/Alert.vue'
//import Gift from '@/components/Gift.vue'

// Form handler
const form = ref(null)
const GuestName = ref(null)
const GuestMessage= ref(null)
const GuestStatus = ref('Hadir')

// Alert handler
const statusResponse = ref(false)
const showAlert = ref(false)

//URL
const scriptURL = "https://script.google.com/macros/s/AKfycbzPgWJ7760OwwRlvjhrBMSM9HTVJL2wjDnDB3Up9ZOEIm09LMBwpmSpkQ6eGjAPGPCH/exec"
const sendMessage = ( evt ) => {
  evt.preventDefault()
  
  setTimeout( () => {
    // Post form
    fetch(scriptURL, { method: 'POST', body: new FormData(form.value)})
      .then( res => {
        console.log('Success: ', res)
        statusResponse.value = true
        showAlert.value = true
       })
      .catch( err => {
        console.log('Error: ', err)
        statusResponse.value = false
        showAlert.value = true
      })
  }, 500)
}

// Auto fill guest name with route.query
const route = useRoute()
if ( route.query.to ) GuestName.value = route.query.to

</script>
