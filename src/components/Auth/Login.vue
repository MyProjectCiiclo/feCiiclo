<template>
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="flex flex-col items-center p-6 rounded-xl shadow-xl bg-[#FF85BB]"
    >
      <h1 class="text-xl font-bold mb-4 text-white">Login Account</h1>

      <div class="mb-4 w-80">
        <input
          v-model="email"
          class="w-full outline-none p-2 rounded-xl"
          type="text"
          placeholder="Enter email"
        />
      </div>

      <div class="mb-4 w-80">
        <input
          v-model="password"
          class="w-full outline-none p-2 rounded-xl"
          type="password"
          placeholder="Enter password"
        />
      </div>
      <p class="text-sm text-gray-600 mt-4 mb-4">
        You don’t have an account?
        <router-link
          to="/register"
          class="text-blue-500 font-medium hover:underline ml-1"
        >
          Register
        </router-link>
      </p>
      <div>
        <button
          @click="handleSubmit"
          class="bg-[#FFCEE3] py-2 px-4 rounded-xl text-white"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      if (!email.value || !password.value) {
        alert("Please fill all fields");
        return;
      }

      try {
        const res = await http.post("auth/login", {
          email: email.value,
          password: password.value,
        });

        console.log("LOGIN SUCCESS:", res.data);
      } catch (error) {
        console.log("LOGIN ERROR:", error.response?.data || error.message);
      }
    };

    return { handleSubmit, email, password };
  },
};
</script>
