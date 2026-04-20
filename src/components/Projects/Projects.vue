<template>
  <div class="bg-gray-50 min-h-screen px-[180px] py-6 relative">
    <header class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Project</h2>

      <button
        @click="openForm"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        New Project
      </button>
    </header>

    <div class="flex justify-between items-center mb-6">
      <input
        type="text"
        placeholder="Search..."
        class="border px-4 py-2 rounded w-1/3"
      />

      <div class="flex gap-2">
        <button class="border px-4 py-2 rounded">Sort</button>
        <button class="border px-4 py-2 rounded">Filter</button>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-white rounded-lg overflow-hidden table-fixed">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-3 w-[50px]">
              <input type="checkbox" />
            </th>
            <th class="px-4 py-3 text-left">Project Name</th>
            <th class="px-4 py-3 text-left">Language</th>
            <th class="px-4 py-3 text-left">Type</th>
            <th class="px-4 py-3 text-left">Description</th>
            <th class="px-4 py-3 text-left">Image</th>
            <th class="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="project in projects"
            :key="project.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="px-4 py-3">
              <input type="checkbox" />
            </td>

            <td class="px-4 py-3 font-medium">{{ project.project_name }}</td>
            <td class="px-4 py-3">{{ project.language }}</td>

            <td class="px-4 py-3">
              <span
                class="px-2 py-1 rounded text-xs"
                :class="{
                  'bg-blue-100 text-blue-600':
                    project.project_type === 'Frontend',
                  'bg-green-100 text-green-600':
                    project.project_type === 'Backend',
                  'bg-purple-100 text-purple-600':
                    project.project_type === 'Fullstack',
                  'bg-pink-100 text-pink-600': project.project_type === 'UI/UX',
                }"
              >
                {{ project.project_type || "N/A" }}
              </span>
            </td>

            <td class="px-4 py-3 truncate max-w-[200px]">
              {{ project.description }}
            </td>

            <td class="px-4 py-3">
              <img
                v-if="project.image"
                :src="getImageUrl(project.image)"
                class="w-16 h-16 object-cover rounded"
              />
              <span v-else class="text-gray-400 text-sm">No image</span>
            </td>

            <td class="px-4 py-3">
              <div class="flex gap-2">
                <button
                  @click="handleEdit(project)"
                  class="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  @click="handleDelete(project)"
                  class="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-if="showForm"
      class="fixed inset-0 bg-black/50 flex items-center justify-center"
    >
      <ProjectsForm :project="selectedProject" @close="closeForm" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getProject } from "@/composables/Project";
import { getImageUrl } from "@/helpers/image.helper";

const showForm = ref(false);

const { projects } = getProject();

const selectedProject = ref(null);

const openForm = () => {
  showForm.value = true;
};

const closeForm = () => {
  showForm.value = false;
};

const handleEdit = (project) => {
  selectedProject.value = project;
  showForm.value = true;
};

const handleDelete = (project) => {
  if (confirm("Are you sure you want to delete this project?")) {
    projects.value = projects.value.filter((p) => p.id !== project.id);
    closeForm();
  }
};
</script>
