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
          class="h-52 w-full overflow-hidden bg-gray-100 flex items-center justify-center"
        >
          <img :src="project.image" class="h-full w-full object-contain" />
        </div>

        <div class="p-6 space-y-4">
          <h2 class="font-semibold text-lg text-gray-900">
            {{ project.project_name }}
          </h2>

          <p class="text-gray-600 text-sm leading-relaxed">
            {{ project.description }}
          </p>

          <div class="flex gap-2 flex-wrap">
            <span
              class="text-xs bg-pink-100 text-pink-500 px-3 py-1 rounded-full"
            >
              {{ project.language }}
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
import { onMounted, ref } from "vue";
import { getProjects } from "@/services/project.service";

const projects = ref([]);

onMounted(async () => {
  try {
    const res = await getProjects();

    console.log("API RESPONSE:", res);

    const data = res.data ?? res;
    projects.value = data.slice(0, 4);
  } catch (error) {
    console.log(error);
  }
});
</script>
