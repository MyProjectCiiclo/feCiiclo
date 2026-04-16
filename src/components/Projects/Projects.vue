<template>
  <div class="bg-gray-50 min-h-screen px-[180px] py-6">
    <header class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Project</h2>
      <button
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
            <th class="px-4 py-3 w-[80px] text-left">ID</th>
            <th class="px-4 py-3 w-[200px] text-left">Project Name</th>
            <th class="px-4 py-3 w-[150px] text-left">Language</th>
            <th class="px-4 py-3 w-[120px] text-left">Status</th>
            <th class="px-4 py-3 w-[150px] text-left">Tags</th>
            <th class="px-4 py-3 w-[200px] text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="project in projects"
            :key="project.id"
            class="border-b hover:bg-gray-50 items-center"
          >
            <td class="px-4 py-3">
              <input type="checkbox" />
            </td>

            <td class="px-4 py-3">{{ project.id }}</td>

            <td class="px-4 py-3 font-medium">
              {{ project.name }}
            </td>

            <td class="px-4 py-3">
              {{ project.language }}
            </td>

            <td class="px-4 py-3">
              <span
                :class="
                  project.status === 'Active'
                    ? 'text-green-600'
                    : 'text-red-500'
                "
              >
                {{ project.status }}
              </span>
            </td>

            <td class="px-4 py-3">
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-xs bg-pink-100 text-pink-500 px-2 py-1 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </td>

            <td class="px-4 py-3">
              <div class="flex gap-2">
                <button
                  class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    name: "E-commerce Website",
    language: "Vue + Laravel",
    status: "Active",
    tags: ["Vue", "Laravel"],
  },
  {
    id: 2,
    name: "Portfolio Website",
    language: "Vue + Tailwind",
    status: "Active",
    tags: ["Vue", "UI"],
  },
  {
    id: 3,
    name: "Task App",
    language: "React + Node",
    status: "Inactive",
    tags: ["React", "Node"],
  },
];
</script>
