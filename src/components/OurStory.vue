<template>
  <section class="w-full">
   
  </section>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'
import decoration from '@/assets/svg/decoration-2.svg'

const stories = ref(null)
onMounted(() => {
  axios.get('contents/story.json')
    .then( res => stories.value = res.data.stories )
    .catch( err => alert(err) )
})

</script>
