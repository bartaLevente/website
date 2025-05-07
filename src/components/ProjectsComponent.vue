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
    title: "Phi-1.5 Code Generation Finetuning Project",
    short_description: "A finetuning project for a university nlp course",
    long_description: "During my NLP course at university, I tackled the challenge of making smaller language models perform better at coding tasks without needing expensive hardware. I created a Colab notebook that finetunes Microsoft's phi-1.5 model on a subset of the CodeAlpaca dataset using QLoRA.\nThis project was really useful because I got to implement quantization methods that squeeze the model down to 4-bit precision while maintaining its capabilities. I added trainable adapters that let me update just a small fraction of the parameters. The end result was an improved code generation model that could understand programming instructions and generate relevant code snippets much better than the original. I also saved the model to my Huggingface account.\nThis project deepened my understanding of efficient finetuning approaches and showed me how smaller models can be optimized for specific tasks without the massive compute requirements of larger models.",
    image_path: "img/images/Finetuning_phi15_codepaca.png",
    used_skills: ["Python", "Huggingface", "Google Colab"],
    link: "https://colab.research.google.com/github/bartaLevente/nlp/blob/main/Finetune_phi15_codealpaca_Barta_Levente.ipynb"
  },
  {
    title: "Fact-checker hungarian chatbot with RAG",
    short_description: "A fact-checker RAG that uses advanced techniques",
    long_description: "For my thesis project, I was part of a 3-person team that developed an advanced fact-checking system leveraging Retrieval-Augmented Generation (RAG) methodology. \nThe Fact-Checker is a Hungarian-language chatbot that connects to a database compiled from 2014 news articles, providing verified information and contextual fact-checking capabilities to users.\nOur system enhances factual accuracy by dynamically retrieving relevant information from a database during query processing. My responsibility centered on advanced RAG techniques and embeddings. I implemented vector embeddings to transform textual data into mathematical representations, enabling efficient similarity searches that retrieve contextually appropriate documents for user queries. \n I also implemented and evaluated Hypothetical Document Embeddings (HyDE) and Reranking techniques, measuring their effectiveness in improving retrieval precision.",
    image_path: "img/images/fact_checker.png",
    used_skills: ["Python", "Django", "Langchain"],
    link: "https://github.com/MrZArmin/fact-checker"
  },
  {
    title: "Udemy Course on Langchain and Streamlit",
    short_description: "A course on how to build several chatbots with Langchain's agents, tools and Streamlit",
    long_description: "I took a Udemy course on Langchain ang Generative AI, where I learned the theoretical foundations of language models, including RNNs, LSTM RNNs, and the Transformer architecture. I got to know about Langchain agents and tools, and how to build chatbots with them. I created basic Streamlit apps that allows users to interact with the chatbot and ask questions.\nI also learned about Langchain's memory capabilities, which allow the chatbot to remember previous interactions and provide more personalized responses. Through the course I used OpenAi's and Groq's API to create embeddings and LLMs. I also implemented a very simple RAG workflow, including gathering and cleaning data, chunking it into smaller pieces, embedding it, and storing it in a vector database. I also learned about Langchain's document loaders and how to use them to load data from different sources, such as PDFs and text files.\nOverall, this course provided me with a solid foundation in using Langchain and Streamlit to build chatbots and applications that leverage the power of LLMs.",
    image_path: "img/images/udemy_genai_cert.jpg",
    used_skills: ["Python", "Langchain", "Google Colab"],
    link: "https://www.udemy.com/course/complete-generative-ai-course-with-langchain-and-huggingface/"
  },
  {
    title: "Udemy Course on Tensorflow, Pandas and Numpy",
    short_description: "A course on how to build several chatbots with Langchain's agents, tools and Streamlit",
    long_description: "I took a Udemy course on Langchain ang Generative AI, where I learned the theoretical foundations of language models, including RNNs, LSTM RNNs, and the Transformer architecture. I got to know about Langchain agents and tools, and how to build chatbots with them. I created basic Streamlit apps that allows users to interact with the chatbot and ask questions.\nI also learned about Langchain's memory capabilities, which allow the chatbot to remember previous interactions and provide more personalized responses. Through the course I used OpenAi's and Groq's API to create embeddings and LLMs. I also implemented a very simple RAG workflow, including gathering and cleaning data, chunking it into smaller pieces, embedding it, and storing it in a vector database. I also learned about Langchain's document loaders and how to use them to load data from different sources, such as PDFs and text files.\nOverall, this course provided me with a solid foundation in using Langchain and Streamlit to build chatbots and applications that leverage the power of LLMs.",
    image_path: "img/images/udemy_tensorflow.png",
    used_skills: ["Python", "Langchain", "Google Colab"],
    link: "https://www.udemy.com/course/complete-generative-ai-course-with-langchain-and-huggingface/"
  },
])

</script>
