<template>
    <footer class="footer">
      <p>
        © {{ currentYear }} Kapil Weds Tejal Shaddi. Created by 
        <a
          href="https://www.instagram.com/_its.yash.03_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yash Deshmukh
        </a>.
      </p>
    </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 1rem;
  background-color: #f8f8f8;
  color: #333;
  font-size: 0.9rem;
}
.footer a {
  color: #0077cc;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
</style>
  
  <script setup>
  </script>
  