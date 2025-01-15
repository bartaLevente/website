<template>
  <div class="institution-description">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
  </div>
</template>


<script setup>

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

</script>
