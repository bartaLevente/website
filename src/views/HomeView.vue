<template>
  <div class="home">
    <div class="icon-wrapper">
      <a href="https://github.com/bartaLevente"><i class="icon gray large github"></i></a>
      <a href="https://www.linkedin.com/in/levente-barta-298164202/"><i class="icon gray large linkedin"></i></a>
    </div>
    <div class="wrapper">
      <PictureComponent />
      <IntroTextComponent :title="intro_text_title" :welcome-message="intro_text_welcome"/>
    </div>
    <AboutComponent :title="about_text_title" :about-text-p1="about_text_p1" :about-text-p2="about_text_p2"/>
    <div class="bg-dir-change">
      <CareerComponent :section-title="'Education'" :data="educationItems" />
      <CareerComponent :section-title="'Experience'" :data="experienceItems" />
    </div>
    <SkillsComponent />
    <ProjectsComponent />
  </div>
</template>

<script setup>
import PictureComponent from '../components/PictureComponent.vue';
import IntroTextComponent from '../components/IntroTextComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import CareerComponent from '../components/CareerComponent.vue';
import SkillsComponent from '../components/SkillsComponent.vue';
import ProjectsComponent from '../components/ProjectsComponent.vue';



const intro_text_title = "Barta Levente";
const intro_text_welcome = "Welcome to my portfolio! I'm a passionate software development student dedicated to building innovative and efficient solutions using clean code and modern technologies. I'm particularly interested in deep learning, natural language processing, and AI-driven projects.";
const about_text_title = "About Me";
const about_text_p1 = "My name is Levente Barta, and I am currently pursuing a Bachelor's Degree in Computer Science at the University of Pécs (PTE). After graduation, I plan to continue my studies by enrolling in a Master's program at Eötvös Loránd University (ELTE), with a specialization in Artificial Intelligence. For my thesis, I am working on a fact-checker AI project that explores Retrieval-Augmented Generation (RAG) and embedding techniques. I developed a strong interest in AI after completing a Deep Learning course at university."
const about_text_p2 = "This has led me to seek career opportunities in AI/ML, where I can apply my knowledge and grow professionally. As I approach graduation, I am actively looking for positions where I can kickstart my career, particularly in AI or machine learning."

const educationItems = [
  {
    name: 'Köztársaság Téri Általános Iskola ',
    year: '2010 - 2018',
    title: 'Elementary School',
  },
  {
    name: 'PTE Babits Mihály Gyakorló Gimnázium',
    year: '2018 - 2022',
    title: 'Graduation Certicate',
  },
  {
    name: 'PTE Természettudományi Kar ',
    year: '2022 - (2025)',
    title: 'Computer Science BsC',
  }
]

const experienceItems = [
{
    name: 'Cubicfox Kft. ',
    year: '2024.04. - 2024.06.',
    title: 'Professional practice',
    description: 'Collaborated in a team environment to develop automated workflows using Google Apps Script'
  }
]

</script>
