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
const about_text_p1 = "My name is Levente Barta, and I recently graduated with a BSc in Computer Science from the University of Pécs (PTE) and will be starting my MSc in Computer Science at ELTE in Budapest this fall, specializing in Artificial Intelligence. I'm passionate about AI. At university, I completed courses in NLP and deep learning, and found a strong interest in both. For my thesis, I collaborated with two classmates to develop a Retrieval-Augmented Generation (RAG) system."
const about_text_p2 = " I'm currently looking for opportunities I can pursue alongside my master’s studies, where I can apply my knowledge and grow professionally, particularly in AI."

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
