<template>
  <div class="min-h-screen px-[180px] py-6 bg-[#0f375a]">
    <div class="bg-white rounded-xl shadow-lg p-6">
      <header class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Project</h2>

        <button
          @click="openForm"
          class="bg-[#0f375a] text-white px-4 py-2 rounded hover:opacity-90"
        >
          New Project
        </button>
      </header>

      <div class="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          class="border px-4 py-2 rounded w-1/3 focus:outline-none focus:ring-2 focus:ring-[#0f375a]"
        />

        <div class="flex gap-2">
          <button class="border px-4 py-2 rounded hover:bg-gray-100">
            Sort
          </button>
          <button class="border px-4 py-2 rounded hover:bg-gray-100">
            Filter
          </button>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table
          class="min-w-full bg-white rounded-lg overflow-hidden table-fixed"
        >
          <thead class="bg-gray-100 text-gray-700">
            <tr>
              <th class="px-4 py-3 w-[50px]">
                <input type="checkbox" />
              </th>
              <th class="px-4 py-3 text-left">ID</th>
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
              class="border-b hover:bg-gray-50 transition"
            >
              <td class="px-4 py-3">
                <input type="checkbox" />
              </td>
              <td class="px-4 py-3 font-medium">{{ project.id }}</td>

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
                    'bg-pink-100 text-pink-600':
                      project.project_type === 'UI/UX',
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
                  class="w-14 h-14 object-cover rounded"
                />
                <span v-else class="text-gray-400 text-sm">No image</span>
              </td>

              <td class="px-4 py-3">
                <div class="flex gap-2">
                  <button
                    @click="handleEdit(project)"
                    class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    @click="handleDelete(project)"
                    class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex gap-2 mt-4 justify-center">
  <button
    class="px-3 py-1 border rounded"
    :disabled="pagination.current_page === 1"
    @click="fetchProjects(pagination.current_page - 1)"
  >
    Prev
  </button>

  <button
    v-for="page in pagination.last_page"
    :key="page"
    @click="fetchProjects(page)"
    :class="[
      'px-3 py-1 border rounded',
      page === pagination.current_page ? 'bg-[#0f375a] text-white' : ''
    ]"
  >
    {{ page }}
  </button>

  <button
    class="px-3 py-1 border rounded"
    :disabled="pagination.current_page === pagination.last_page"
    @click="fetchProjects(pagination.current_page + 1)"
  >
    Next
  </button>
</div>
      </div>
    </div>

    <div
      v-if="showForm"
      class="fixed inset-0 bg-black/50 flex items-center justify-center"
    >
      <ProjectsForm
        :project="selectedProject"
        @close="closeForm"
        @success="reload"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProjectsForm from "./ProjectsForm.vue";
import { getProjects, deleteProject } from "../../services/project.service";
import { getImageUrl } from "../../helpers/image.helper";

const projects = ref<any[]>([]);
const showForm = ref(false);
const selectedProject = ref<any>(null);
const pagination = ref({
  current_page: 1,
  last_page: 1,
  per_page: 10,
  total: 0,
});
const fetchProjects = async (page = 1) => {
  const res = await getProjects(page);

  projects.value = res.data;
  pagination.value = res.meta;
};

onMounted(() => {
  fetchProjects();
});

const openForm = () => {
  selectedProject.value = null;
  showForm.value = true;
};

const closeForm = () => {
  showForm.value = false;
};

const handleEdit = (project: any) => {
  selectedProject.value = project;
  showForm.value = true;
};

const handleDelete = async (project: any) => {
  if (confirm("Are you sure?")) {
    await deleteProject(project.id);
    await fetchProjects();
  }
};

const reload = async () => {
  showForm.value = false;
  await fetchProjects();
};

onMounted(() => {
  fetchProjects(1);
});
</script>
