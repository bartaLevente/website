<template>
  <div class="career">
    <div class="timeline">
      <h3>{{ reactiveSectionTitle }}</h3>
      <div class="timeline-container">
        <div
          v-for="(item,index) in reactiveData"
          :key="index"
          class="timeline-item"
        >
          <InstitutionComponent :year="item.year" :title="item.title"/>
          <InstitutionDescriptionComponent :name="item.name" :description="item.description"/>

        </div>
      </div>
    </div>
  </div>
</template>


<script setup>

import { computed } from 'vue';
import InstitutionComponent from './InstitutionComponent.vue';
import InstitutionDescriptionComponent from './InstitutionDescriptionComponent.vue';

const props = defineProps({
  sectionTitle: {
    type: String,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
});

const reactiveSectionTitle = computed(() => props.sectionTitle);
const reactiveData = computed(() => props.data);

</script>
