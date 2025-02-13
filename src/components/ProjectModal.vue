<template>
  <VueFinalModal
    :model-value="isModalOpen"
    @update:model-value="$emit('update:model-value', $event)"
    class="modal-container"
    content-class="modal-content"
  >
  <div class="modal-blur">
    <div class="modal-header">
      <h3>{{ project.title }}</h3>
      <h2>{{ project.short_description }}</h2>
    </div>

    <div class="modal-description-wrapper">
      <p class="modal-description">{{ project.long_description }}</p>
      <img :src="imageUrl" alt="Project Image" class="modal-image" />
    </div>
    <div class="modal-skills">
      <div v-for="(skill, index) in project.used_skills" :key="index" class="modal-skill-item">{{ skill }}</div>
    </div>
  </div>
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from 'vue-final-modal';
import { ref, computed } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      short_description: '',
      long_description: '',
      image_path: '',
      used_skills: []
    })
  },
  isModalOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['update:model-value']);

const imageUrl = computed(() => {
  try {
    return new URL(`../assets/${props.project.image_path}`, import.meta.url).href;
  } catch (e) {
    return ''; // Return an empty string if the image doesn't exist
  }
});
</script>
