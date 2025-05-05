<template>
  <section class="w-full bg-gradient-to-b from-gray-700 to-gray-600">
    <section class="container-section pb-12">
      <HeaderSection text-color="text-gray-100" subtitle="With all due respect, we invite our invited guests to attend our series of events." title="Sequence of Events"></HeaderSection>
      <Card>
        <template v-slot:body>
          <div class="bg-gray-900 px-6 py-8 text-center text-sm font-medium" v-for="(timeline, index) in timelines" :key="index">
            <section data-aos="fade-up">
              <h1 class="text-xl satisfy-font text-amber-400">{{ timeline.title }}</h1>
              <p class="font-medium text-gray-100">{{ timeline.date }} | {{ timeline.time }}</p>
              <decoration class="w-2/12 mx-auto my-2 fill-amber-500"></decoration>
              <p class="text-amber-500">{{ timeline.location }}</p>
              <p class="text-gray-200">{{ timeline.address }}</p>
              <a 
                @click.prevent="openMap(timeline.maplink)" 
                class="btn" 
                href="javascript:void(0)">
                <i class="fa-solid fa-map"></i>
                View on Maps
              </a>
              <decoration class="w-2/12 mx-auto my-2 fill-amber-500 rotate-180"></decoration>
            </section>
          </div>
        </template>
        <template v-slot:footer>
          <section class="bg-gray-900">
            <Countdown></Countdown>
            <div class="px-6 pt-5 pb-8 text-center">
            </div>
            <img src="@/assets/images/couples1.jpeg" alt="">
          </section>
        </template>
      </Card>
    </section>
  </section>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'
import Countdown from '@/components/Countdown.vue'

const timelines = ref(null)

onMounted(() => {
  axios.get('contents/timelines.json')
    .then(res => timelines.value = res.data.timelines)
    .catch(err => alert(err))
})

// Function to open map with the provided link
const openMap = (mapLink) => {
  if (mapLink) {
    window.open(mapLink, '_blank');  // Open the provided map link in a new tab
  } else {
    console.error("No map link provided for this timeline.");
  }
}

// Handler for navigating to guest book
const emits = defineEmits(['goToGuestBook'])
const goToGuestBook = () => setTimeout(() => { emits('goToGuestBook') }, 300)
</script>

<style scoped>
.btn {
  @apply active:scale-95 active:ring-gray-200 active:ring duration-300 rounded-3xl px-3 py-2 text-amber-500 bg-gray-800 inline-block w-10/12 mt-4;
}
</style>