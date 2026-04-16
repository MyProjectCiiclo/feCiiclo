<template>
  <div
    class="min-h-screen px-[180px] py-20 bg-[#0f375a] text-white border-b border-gray-200"
  >
    <div class="mb-14">
      <h1 class="text-4xl font-bold">Featured Work</h1>
      <div
        class="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mt-4 rounded-full"
      ></div>
    </div>

    <div class="grid grid-cols-2 gap-12">
      <div
        v-for="project in projects"
        :key="project.id"
        class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition"
      >
        <div
          class="h-52 bg-pink-100 flex items-center justify-center text-pink-400 text-sm group-hover:scale-105 transition"
        >
          {{ project.imageText }}
        </div>

        <div class="p-6 space-y-4">
          <h2 class="font-semibold text-lg text-gray-900">
            {{ project.title }}
          </h2>

          <p class="text-gray-600 text-sm leading-relaxed">
            {{ project.description }}
          </p>

          <div class="flex gap-2 flex-wrap">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs bg-pink-100 text-pink-500 px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>

          <a
            href="#"
            class="inline-flex items-center gap-2 text-pink-500 text-sm font-medium group-hover:gap-3 transition"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    imageText: "Project 1",
    title: "E-commerce Website",
    description:
      "Built a full-stack e-commerce platform with authentication, product management, and payment integration.",
    tags: ["Vue", "Laravel", "MySQL"],
  },
  {
    id: 2,
    imageText: "Project 2",
    title: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio showcasing projects, skills, and experience.",
    tags: ["Vue", "Tailwind", "UI/UX"],
  },
  {
    id: 3,
    imageText: "Project 3",
    title: "Task Management App",
    description:
      "Created a task management system with CRUD features and real-time updates.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    imageText: "Project 4",
    title: "Booking System",
    description:
      "Developed a booking system for scheduling and managing appointments efficiently.",
    tags: ["Laravel", "API", "Bootstrap"],
  },
];
</script>
