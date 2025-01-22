<template>
  <div class="projects">
    <h3>My previous projects</h3>
    <h2>Check out my latest work below </h2>
    <div class="projects-wrapper">
        <ProjectComponent
          v-for="(item,index) in projects"
          :key="index"
          :title="item.title"
          :short_description="item.short_description"
          :image_path="item.image_path"
          :used_skills="item.used_skills"
        />
    </div>
  </div>
</template>

<script setup>

import {ref} from 'vue';
import ProjectComponent from '@/components/ProjectComponent.vue';

const projects = ref([
  {
    title: "Portfolio website",
    short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolore nesciunt ducimus veniam soluta saepe",
    long_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolore nesciunt ducimus veniam soluta saepe corrupti est, laudantium mollitia nihil obcaecati, autem corporis incidunt nam explicabo sit excepturi reprehenderit. Beatae!",
    image_path: "img/images/software.jpg",
    used_skills: ["Vue.js", "HTML", "CSS", "Javascript", "Pinia"]
  },
  {
    title: "Portfolio website",
    short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolore nesciunt ducimus veniam soluta saepe",
    long_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolore nesciunt ducimus veniam soluta saepe corrupti est, laudantium mollitia nihil obcaecati, autem corporis incidunt nam explicabo sit excepturi reprehenderit. Beatae!",
    image_path: "img/images/software.jpg",
    used_skills: ["Vue.js", "HTML", "CSS", "Javascript", "Pinia"]
  },
  {
    title: "Portfolio website",
    short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolore nesciunt ducimus veniam soluta saepe",
    long_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolore nesciunt ducimus veniam soluta saepe corrupti est, laudantium mollitia nihil obcaecati, autem corporis incidunt nam explicabo sit excepturi reprehenderit. Beatae!",
    image_path: "img/images/software.jpg",
    used_skills: ["Vue.js", "HTML", "CSS", "Javascript", "Pinia"]
  },
])

</script>
