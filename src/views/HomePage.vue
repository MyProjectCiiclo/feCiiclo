<script setup>
import MainLayout from "@/layouts/MainLayout.vue";

import IntroSection from '../components/Home/IntroSection.vue';
import AboutSection from '../components/Home/AboutSection.vue';
import ProjectSection from '../components/Home/ProjectSection.vue';
import ContactSection from '../components/Home/ContactSection.vue';
</script>

<template>
  <MainLayout>
    <IntroSection />
    <AboutSection />
    <ProjectSection />
    <ContactSection />
  </MainLayout>
</template>