<template>
  <div class="project">
    <h2>{{ title }}</h2>
    <div class="image-wrapper">
      <img :src="image_path" alt="">
      <p class="description">{{ short_description }}</p>
    </div>
    <div class="used-skills-wrapper">
      <div
        v-for="(item,index) in used_skills"
        :key="index"
        class="used-skill-item"
      >
        {{ item }}
      </div>
      <a href="">read more</a>
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
  short_description: {
    type: String,
    required: true
  },
  image_path: {
    type: String,
    required: true
  },
  used_skills: {
    type: Array,
    required: true
  },
});

onMounted(() => {

});

</script>
