import type { Profile } from "@/types/Profile";
import { ref } from "vue";
import { fetchProfileApi } from "@/services/profile.service";

export function useProfile() {
  const profile = ref<Profile | null>(null);
  const loading = ref(false);

  const fetchProfile = async () => {
    loading.value = true;

    try {
      const res = await fetchProfileApi();
      profile.value = res.data;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  return {
    profile,
    loading,
    fetchProfile,
  };
}