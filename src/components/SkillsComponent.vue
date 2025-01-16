<template>
  <div class="skills">
    <div class="skills-content">
      <h3>My Skills</h3>
      <ul>
        <li
          v-for="(item,index) in skillItems"
          :key="index"
        >
          <div class="skill-name">
            {{ item.name }}
          </div>
          <div class="skill-line" :style="{ width: (item.animatedValue/100)*85  + '%' }">
            ""
          </div>
          <div class="skill-value">
            {{ item.value }} %
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted  } from 'vue'

const skillItems = ref([
  { name: "html", value: 90, animatedValue: 0 },
  { name: "css", value: 85, animatedValue: 0 },
  { name: "javascript", value: 85, animatedValue: 0 },
  { name: "c++", value: 50, animatedValue: 0 },
  { name: "c#", value: 75, animatedValue: 0 },
  { name: "java", value: 70, animatedValue: 0 },
  { name: "php", value: 60, animatedValue: 0 },
  { name: "python", value: 90, animatedValue: 0 },
  { name: "react", value: 80, animatedValue: 0 },
  { name: "vue", value: 75, animatedValue: 0 },
])

let observer = null

onMounted(() => {
  const skillElement = document.querySelector('.skills-content')

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillItems.value.forEach(skill => {
          skill.animatedValue = skill.value
        })
        observer.disconnect()
      }
    })
  })

  observer.observe(skillElement)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

</script>
