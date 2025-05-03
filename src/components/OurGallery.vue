<template>
  <section class="w-full bg-slate-100 py-8">
    <section class="max-w-6xl mx-auto px-4">
      <viewer :images="galleries">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <template v-for="src in galleries" :key="src" data-aos="zoom-in">
            <div class="w-full overflow-hidden rounded-lg shadow-md" data-aos="fade-up">
              <img
                :src="src"
                :alt="src"
                class="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-300"
              />
            </div>
          </template>
        </div>
      </viewer>

      <!-- Our Story -->
      <OurStory class="mt-10" />
      <!-- Our Video -->
      <OurVideo class="mt-10" />
    </section>
  </section>
</template>


<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import OurVideo from '@/components/OurVideo.vue'
import OurStory from '@/components/OurStory.vue'
import wave from '@/assets/svg/wave.svg'

const galleries = ref(null)
onMounted(() => {
  axios.get('contents/galleries.json')
    .then( res => galleries.value = res.data.galleries )
    .catch( err => alert(err) )
})

</script>
