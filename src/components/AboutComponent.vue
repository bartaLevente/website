<template>
  <div class="about">
    <div class="about-content">
      <h3>{{ title }}</h3>
      <p>{{ aboutTextP1 }}</p>
      <p>{{ aboutTextP2 }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  aboutTextP1: {
    type: String,
    required: true
  },
  aboutTextP2: {
    type: String,
    required: true
  },
});

onMounted(() => {
  window.addEventListener('scroll', function () {
    const aboutSection = document.querySelector('.about');
    let scrollPosition = window.scrollY;
    aboutSection.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
  });
});
</script>
