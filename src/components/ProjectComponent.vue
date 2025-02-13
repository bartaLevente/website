<template>
  <div class="project">
    <h2>{{ project.title }}</h2>
    <img :src="imageUrl" alt="">
    <div class="used-skills-wrapper">
      <div
        v-for="(item, index) in project.used_skills.slice(0,3)"
        :key="index"
        class="used-skill-item"
      >
        {{ item }}
      </div>
      <div v-if="project.used_skills.length>3" class="used-skill-item">+{{ project.used_skills.length - 3 }}</div>
    </div>
    <div @click="openProjectModal(project)" class="modal-opener">
      Read more -->
    </div>
    <ProjectModal
      v-model:isModalOpen="isProjectModalOpen"
      :project="selectedProject"
      @update:model-value="isProjectModalOpen = $event"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProjectModal from '@/components/ProjectModal.vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const imageUrl = new URL(`../assets/${props.project.image_path}`, import.meta.url).href;

const isProjectModalOpen = ref(false);
const selectedProject = ref({});

const openProjectModal = (project) => {
  selectedProject.value = project;
  isProjectModalOpen.value = true;
};
</script>
