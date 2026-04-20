import { getProjects, createProject } from "@/services/project.service";
import type { Project } from "@/types/Project";
import { onMounted, ref } from "vue";

export function getProject() {
  const projects = ref<Project[]>([]);
  const loading = ref(false);

  const fetchProjects = async () => {
    loading.value = true;
    try {
      projects.value = await getProjects();
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  const fetchCreateProject = async (data: FormData) => {
    loading.value = true;
    try {
      await createProject(data);

      await fetchProjects();
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchProjects();
  });

  return {
    projects,
    loading,
    fetchProjects,
    fetchCreateProject,
  };
}
