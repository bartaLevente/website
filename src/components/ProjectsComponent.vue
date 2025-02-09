<template>
  <div class="projects">
    <h3>My previous projects</h3>
    <h2>Check out my latest work below </h2>
    <div class="projects-wrapper">
        <ProjectComponent
          v-for="(item,index) in projects"
          :key="index"
          :project="item"
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
    short_description: "A simple portfolio website written in Vue.js",
    long_description: "For my portfolio project, I created a simple Vue.js application to familiarize myself with the framework and its core concepts. This project showcases a basic yet clean user interface with responsive design. I used Vue’s component-based structure to break down the UI into smaller, reusable components, passing data between them through props. This allowed me to maintain a clear separation of concerns while keeping the code modular and organized. Additionally, I explored the concept of refs for handling component state and direct DOM manipulation, which provided a deeper understanding of Vue’s reactivity system. Although this project does not incorporate a store for state management, I gained knowledge about how Vuex or Pinia could be integrated in larger projects to manage global state. The current structure works well without a store due to the simplicity of the application, but learning about stores has prepared me to handle more complex scenarios in future projects where state management across multiple components is essential. This portfolio project served as an excellent entry point into Vue.js, giving me confidence in building more sophisticated apps in the future.",
    image_path: "img/images/software.jpg",
    used_skills: ["Vue.js", "HTML", "CSS", "Javascript"]
  },
  {
    title: "Fact-checker RAG",
    short_description: "A fact-checker RAG that uses advanced techniques",
    long_description: "For our thesis project, we developed a fact-checking AI system using Retrieval-Augmented Generation (RAG) techniques, with Django as the web framework. Our goal was to create a system that can generate factually accurate responses by retrieving relevant information from an external knowledge base. We worked with embeddings to convert textual data into vector representations, allowing us to perform efficient similarity searches and pull in contextually appropriate documents during user queries. This helped the system generate more reliable and context-aware answers, leveraging real-time retrieval rather than relying solely on pre-trained language models.\n\n As a team, we experimented with several RAG techniques, testing different approaches for document retrieval and generation. We explored both dense retrieval, using embeddings and vector similarity, and sparse retrieval methods to balance precision and recall in our fact-checking model. By combining these strategies, we aimed to enhance the accuracy of responses, making sure the system could verify facts across diverse queries. Django served as our web framework, helping us integrate the backend logic seamlessly and provide a robust platform for this project.",
    image_path: "img/images/software.jpg",
    used_skills: ["Python", "Django", "Langchain", "Tensorflow"]
  },
  {
    title: "Personal finance tracker",
    short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolore nesciunt ducimus veniam soluta saepe",
    long_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolore nesciunt ducimus veniam soluta saepe corrupti est, laudantium mollitia nihil obcaecati, autem corporis incidunt nam explicabo sit excepturi reprehenderit. Beatae!",
    image_path: "img/images/software.jpg",
    used_skills: ["Vue.js", "HTML", "CSS", "Javascript", "Pinia"]
  },
])

</script>
