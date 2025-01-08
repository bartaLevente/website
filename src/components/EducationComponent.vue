<template>
  <div class="education">
    <div class="timeline">
      <div class="timeline-line"></div>
      <div class="timeline-container">
        <div
          v-for="(item,index) in educationItems"
          :key="index"
          class="timeline-item"
          :class="index%2===0 ? 'left' : 'right'"
        >
          <SchoolComponent :name="item.school" :year="item.year" :description="item.description"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>

import { ref } from 'vue';

import SchoolComponent from './SchoolComponent.vue';

const educationItems = ref([
  {
    school: 'Köztársaság Téri Általános Iskola ',
    year: '2010-2018',
    description: 'Elementary School'
  },
  {
    school: 'PTE Babits Mihály Gyakorló Gimnázium',
    year: '2018-2022',
    description: 'Graduation Certicate'
  },
  {
    school: 'PTE Természettudományi Kar ',
    year: '2022-',
    description: 'Computer Science BsC'
  },
]);

</script>
