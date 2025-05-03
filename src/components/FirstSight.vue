<template>
  <section class="w-full mb-12">
    <wave class="fill-gray-800"></wave>
    <section class="container-section">
      <HeaderSection title="First Look"></HeaderSection>
      <Card title="Kisah kami berawal dari">
        <template v-slot:body>
          <p class="text-sm p-6 text-justify">
            <br><br>
            </p>
        </template>
        <template v-slot:footer>
          <img src="@/assets/images/couples.png" class="w-full" alt="">
        </template>
      </Card>
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'
import wave from '@/assets/svg/wave.svg'

</script>
