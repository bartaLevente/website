<template>
  <div class="home">
    <div class="wrapper">
      <PictureComponent />
      <IntroTextComponent :title="intro_text_title" :welcome-message="intro_text_welcome"/>
    </div>
    <AboutComponent :title="about_text_title" :about-text-p1="about_text_p1" :about-text-p2="about_text_p2"/>
    <div class="bg-dir-change">
      <CareerComponent :section-title="'Education'" :data="educationItems" />
      <CareerComponent :section-title="'Experience'" :data="experienceItems" />
    </div>
  </div>
</template>

<script setup>
import PictureComponent from '../components/PictureComponent.vue';
import IntroTextComponent from '../components/IntroTextComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import CareerComponent from '../components/CareerComponent.vue';



const intro_text_title = "Barta Levente";
const intro_text_welcome = "Welcome to my portfolio! I'm a passionate software developer with a focus on creating innovative, efficient solutions through clean code and modern technologies. With experience across web development, deep learning, and AI projects, I'm constantly seeking to push the boundaries of what's possible. Let's get started!";
const about_text_title = "About Me";
const about_text_p1 = "My name is Levente Barta, and I am currently pursuing a Bachelor's Degree in Computer Science at the University of Pécs (PTE). After graduation, I plan to continue my studies by enrolling in a Master's program at Eötvös Loránd University (ELTE), with a specialization in Artificial Intelligence. For my thesis, I am working on a fact-checker AI project that explores Retrieval-Augmented Generation (RAG) and embedding techniques. I developed a strong interest in AI after completing a Deep Learning course at university, and since then, I have become passionate about the field."
const about_text_p2 = "This has led me to seek career opportunities in AI/ML, where I can apply my knowledge and grow professionally. As I approach graduation, I am actively looking for positions where I can kickstart my career, particularly in AI or machine learning. In addition, I also enjoy working with frontend technologies and frameworks, such as Vue.js and React. These experiences give me a well-rounded skill set, and I am eager to contribute to innovative projects that align with my passion for AI and software development."

const educationItems = [
  {
    name: 'Köztársaság Téri Általános Iskola ',
    year: '2010 - 2018',
    title: 'Elementary School',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni numquam ab provident'
  },
  {
    name: 'PTE Babits Mihály Gyakorló Gimnázium',
    year: '2018 - 2022',
    title: 'Graduation Certicate',
    description: ' veniam assumenda reprehenderit optio dicta quis aspernatur! '
  },
  {
    name: 'PTE Természettudományi Kar ',
    year: '2022 -',
    title: 'Computer Science BsC',
    description: 'Exercitationem mollitia autem impedit consequuntur laudantium fuga explicabo qui rem?'
  }
]

const experienceItems = [
{
    name: 'Cubicfox Kft. ',
    year: '2024.04. - 2024.06.',
    title: 'Professional practice',
    description: 'Exercitationem mollitia autem impedit consequuntur laudantium fuga explicabo qui rem?'
  }
]

</script>
