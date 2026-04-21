import type { User } from "@/types/User";
import api from "./api";

export const registerApi = async (data: User) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

export const loginApi = async (data: User) => {
  const res = await api.post("/auth/login", data);
  localStorage.setItem("token", res.data.token);
  return res.data;
};
