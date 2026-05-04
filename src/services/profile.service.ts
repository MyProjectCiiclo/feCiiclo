import api from "@/services/api";

export const fetchProfileApi = async () => {
  const res = await api.get("/profile");
  return res.data;
};