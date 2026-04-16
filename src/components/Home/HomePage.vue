<script setup>
import HomeAboutSection from "./sections/AboutSection.vue";
import IntroSection from "./sections/IntroSection.vue";
import HomeProjectSection from "./sections/ProjectSection.vue";
import HomeContactSection from "./sections/ContactSection.vue";
</script>

<template> 
 <header class="flex justify-between items-center px-[180px] py-4 bg-[#0f375a] shadow-sm sticky top-0 z-50">
  <div>
    <img
      src="../../../src/assets/image-personal.png"
      alt="Avatar"
      class="w-[50px] h-[50px] rounded-full object-cover border-2 border-gray-300 hover:scale-105 transition duration-300"
    />
  </div>

  <nav>
    <ul class="flex items-center gap-6 text-gray-700 font-medium text-white">
      <li class="cursor-pointer hover:text-orange-400 transition">Project</li>
      <li class="cursor-pointer hover:text-orange-400 transition">About</li>
      <li class="cursor-pointer hover:text-orange-400 transition">Experience</li>
      <li class="cursor-pointer hover:text-orange-400 transition">Skills</li>
      <li class="cursor-pointer hover:text-orange-400 transition">Education</li>
      <li class="cursor-pointer hover:text-orange-400 transition">Contact</li>
      <li>
        <button class="ml-4 px-4 py-2 border border-orange-400 text-orange-400 rounded-lg hover:bg-orange-400 hover:text-white transition">
          Resume
        </button>
      </li>
    </ul>
  </nav>
</header>
  <IntroSection />
  <HomeAboutSection />
  <HomeProjectSection />
  <HomeContactSection />
</template>
