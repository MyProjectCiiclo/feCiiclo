<template>
  <div class="card">
    <button class="close-btn" @click="emit('close')">×</button>

    <h1 class="title">
      {{ props.project ? "Edit Project" : "Create Project" }}
    </h1>
    <p class="subtitle">Create and manage your next amazing project</p>

    <form class="container" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Project Name</label>
        <input class="input" type="text" v-model="form.project_name" />
      </div>

      <div class="form-group">
        <label>Language</label>
        <input class="input" type="text" v-model="form.language" />
      </div>

      <div class="form-group">
        <label>Description</label>
        <textarea class="input" v-model="form.description"></textarea>
      </div>

      <div class="form-group">
        <label>Image</label>
        <input
          class="input"
          type="file"
          accept="image/*"
          @change="onFileChange"
        />
      </div>

      <div class="form-group">
        <label>Project Type</label>
        <select class="select" v-model="form.project_type">
          <option disabled value="">Select a project type</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Fullstack</option>
          <option>UI/UX</option>
        </select>
      </div>

      <button type="submit" class="btn">
        {{ props.project ? "Update" : "Create"}}
      </button>
    </form>
  </div>
</template>
<style>
.card {
  position: relative;
  width: 100%;
  max-width: 420px;
  padding: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.title {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
}

.subtitle {
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 16px;
}

.label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 14px;
  color: #111827;
}
.input,
.select {
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

.btn {
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
}

.preview {
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px;
}

.project-card {
  background: white;
  padding: 16px;
  border-radius: 12px;
}

.project-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tags span {
  font-size: 12px;
  background: #eee;
  padding: 4px 8px;
  border-radius: 999px;
}
</style>

<script setup lang="ts">
import { createProject, updateProject } from "@/services/project.service";
import { reactive, watch } from "vue";
const emit = defineEmits(["close"]);

const form = reactive({
  project_name: "",
  language: "",
  description: "",
  project_type: "",
  image: null as File | null,
});

const props = defineProps({
  project: {
    type: Object,
    default: null,
  },
});

watch(
  () => props.project,
  (newVal) => {
    if (newVal) {
      form.project_name = newVal.project_name;
      form.language = newVal.language;
      form.description = newVal.description;
      form.project_type = newVal.project_type;
    } else {
      form.project_name = "";
      form.language = "";
      form.description = "";
      form.project_type = "";
      form.image = null;
    }
  },
  { immediate: true }
);
const handleSubmit = async () => {
  try {
    const data = new FormData();
    data.append("project_name", form.project_name);
    data.append("language", form.language);
    data.append("description", form.description);
    data.append("project_type", form.project_type);

    if (form.image) {
      data.append("image", form.image);
    }

    if (props.project) {
      await updateProject(props.project.id, data);
      console.log("Update Success");
    } else {
      await createProject(data);
      console.log("Create Success");
    }

    emit("close");
  } catch (error) {
    console.log(error);
  }
};
const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (target.files && target.files[0]) {
    form.image = target.files[0];
  }
};
</script>
