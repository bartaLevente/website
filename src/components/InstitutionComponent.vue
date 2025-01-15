<template>
  <div class="institution">
    <h2>{{ year }}</h2>
    <p>{{ title }}</p>
  </div>
</template>


<script setup>

const props = defineProps({
  year: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

</script>
