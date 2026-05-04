import api from "./api";
import type { ContactForm } from "@/types/Contact";

export const useContact = async (payload: ContactForm) => {
  const res = await api.post("/contact", payload);
  return res.data;
};