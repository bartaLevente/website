<template>
  <div class="school">
    <h2>{{ name }}</h2>
    <p>{{ year }}</p>
    <p>{{ description }}</p>
  </div>
</template>


<script setup>

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

</script>
