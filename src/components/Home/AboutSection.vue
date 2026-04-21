<template>
  <section
    class="min-h-screen bg-[#0f375a] text-white px-4 py-16 sm:px-6 lg:px-8 border-b border-gray-200"
  >
    <div class="mx-auto max-w-6xl">
      <div class="mb-16 space-y-4">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1>
        <div
          class="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
        ></div>
      </div>

      <div class="grid gap-12 lg:grid-cols-2 mb-16">
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold mb-2">Design Expertise</h2>
            <div class="h-0.5 w-12 bg-blue-500 rounded-full"></div>
          </div>

          <p class="text-lg leading-relaxed">
            {{ aboutData.design_description }}
          </p>

          <ul class="space-y-3">
            <li
              v-for="(item, index) in designExpertise"
              :key="index"
              class="flex items-start gap-3"
            >
              <span class="text-blue-500">✔</span>
              <span class="font-medium">{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              {{ aboutData.title }}
            </h2>
            <div class="h-0.5 w-12 bg-indigo-600 rounded-full"></div>
          </div>

          <p class="text-lg leading-relaxed">
            I specialize in building performant, scalable, and user-focused
            applications using modern technologies. With experience across both
            front-end and back-end development, I create seamless digital
            experiences that are fast, reliable, and easy to maintain.
          </p>

          <div class="grid grid-cols-2 gap-4 pt-4 text-black">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 hover:shadow-lg"
            >
              <div class="space-y-2">
                <p class="text-sm font-semibold">
                  {{ skill.title }}
                </p>
                <p class="text-xs">
                  {{ skill.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6 mb-16">
        <h2 class="text-2xl font-bold">Tech Stack</h2>
        <div class="h-0.5 w-12 bg-blue-500 rounded-full"></div>

        <div class="grid grid-cols-3 gap-6 text-black">
          <div class="bg-white p-5 rounded-xl">
            <p class="font-semibold mb-3 text-blue-600">Frontend</p>
            <ul class="space-y-2 text-sm">
              <li>HTML, CSS, JavaScript</li>
              <li>Vue.js / React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div class="bg-white p-5 rounded-xl">
            <p class="font-semibold mb-3 text-indigo-600">Backend</p>
            <ul class="space-y-2 text-sm">
              <li>PHP (Laravel)</li>
              <li>Node.js</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          <div class="bg-white p-5 rounded-xl">
            <p class="font-semibold mb-3 text-pink-500">Database & Tools</p>
            <ul class="space-y-2 text-sm">
              <li>MySQL</li>
              <li>Git & GitHub</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <button
          @click="handleReload"
          :disabled="isLoading"
          class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg"
        >
          {{ isLoading ? "Loading..." : "Reload About" }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const aboutData = ref({
  title: "Development Expertise",
  design_description:
    "Creating beautiful, functional, and accessible digital experiences is my passion...",
});

const isLoading = ref(false);

const skills = [
  { title: "React & Next.js", description: "Full-stack JavaScript" },
  { title: "Tailwind CSS", description: "Utility-first styling" },
  { title: "TypeScript", description: "Type safety & scalability" },
  { title: "Web APIs", description: "Modern standards" },
];

const designExpertise = [
  "Responsive design & mobile-first approach",
  "Accessibility (WCAG 2.1) compliance",
  "Modern design systems & component libraries",
];

async function handleReload() {
  isLoading.value = true;
  try {
    console.log("About data reloaded");
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  handleReload();
});
</script>
