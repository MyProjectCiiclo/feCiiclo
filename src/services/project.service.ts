import api from "@/services/api";
import type { Project } from "@/types/Project";

export const getProjects = async (): Promise<Project[]> => {
  const res = await api.get("/project/show-project");
  return res.data;
};

export const createProject = async (data: FormData) => {
  const res = await api.post("/project/create-project", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const updateProject = async (id: string, data: FormData) => {
  const res = await api.put(`/project/update-project/${id}`, data);
  return res.data;
};

export const deleteProject = async (id:String)=>{
  const res = await api.delete(`project/destroy/${id}`)
}
