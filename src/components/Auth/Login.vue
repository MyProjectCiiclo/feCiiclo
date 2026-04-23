<template>
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="flex flex-col items-center p-6 rounded-xl shadow-xl bg-[#0f375a]"
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
      <p class="text-sm text-white mt-4 mb-4">
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
          class="bg-[#FF4D8D] py-2 px-4 rounded-xl text-white"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { loginApi } from "@/services/user.service";
import router from "@/router";
import { toast } from 'vue3-toastify'
const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    toast.error("Please fill all fields");
    return;
  }

  try {
    const user = await loginApi({
      email: email.value,
      password: password.value,
    });

    toast.success("Login successfully");

    if (user.token) {
      localStorage.setItem("token", user.token);
    }

    router.push("/home");
  } catch (error) {
    toast.error("Login failed");
  }
};
</script>
