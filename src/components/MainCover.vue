<template>
  <section class="w-full mx-auto bg-couples bg-cover bg-center h-screen">
    <section class="container-section h-screen grid content-end">
      <div 
        class="animate__animated animate__fadeInUpBig text-gray-100 text-center bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-t-3xl px-6 py-10">
        <p>Wedding</p>
        <h1 class="tangerine-font text-title font-bold">{{ couples.join(' & ') }}</h1>
        <decoration class="fill-amber-400 mx-auto w-3/12 mb-3"></decoration>
        <p class="text-sm">
          <p class="font-medium">To the Honorable Sir/Madam</p>
          <p class="font-medium my-2 text-lg">{{ query.to }}</p>
          <small>Please allow us to invite you to our event.</small>
        </p>
      </div>
    </section>
  </section>
</template>


<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import decoration from '@/assets/svg/decoration-2.svg'

const couples = ['Kapil', 'Tejal']

const route = useRoute()
let query = computed(() => route.query)

if ( route.query.to === undefined ) query = { to: 'Brother/sister' }

</script>
