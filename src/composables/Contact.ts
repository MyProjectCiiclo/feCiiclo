import { ref } from "vue";
import { useContact } from "@/services/contact.service";
import type { ContactForm } from "@/types/Contact";

export function useContactComposable() {
  const loading = ref(false);
  const success = ref(false);

  const submitContact = async (payload: ContactForm) => {
    loading.value = true;
    success.value = false;

    try {
      const res = await useContact(payload);
      success.value = true;
      return res;
    } catch (error) {
      console.log(error);
      success.value = false;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    success,
    submitContact,
  };
}