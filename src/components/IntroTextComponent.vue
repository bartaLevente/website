<template>
  <div class="intro-text">
    <h1>{{ title }}</h1>
    <h2>{{ welcomeMessage }}</h2>
</div>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  welcomeMessage: {
    type: String,
    required: true
  }
});

</script>
