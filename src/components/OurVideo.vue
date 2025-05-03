<template>
  <section class="bg-slate-100 py-8 px-4 overflow-x-hidden">
    <HeaderSection title="Short Video" />

    <div class="max-w-4xl w-full mx-auto aspect-video">
      <iframe
        class="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/N72wylw-B9k"
        title="YouTube video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import HeaderSection from '@/components/HeaderSection.vue'
</script>
