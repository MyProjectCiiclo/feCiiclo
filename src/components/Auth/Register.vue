<template>
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="flex flex-col items-center p-6 rounded-xl shadow-xl bg-[#0f375a]"
    >
      <h1 class="text-xl font-bold mb-4 text-white">Register Account</h1>

      <div class="mb-4 w-80">
        <input
          v-model="name"
          class="w-full outline-none p-2 rounded-xl"
          type="text"
          placeholder="Enter name"
        />
      </div>

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

      <div class="mb-4 w-80">
        <input
          v-model="confirmPassword"
          class="w-full outline-none p-2 rounded-xl"
          type="password"
          placeholder="Enter confirm password"
        />
      </div>

      <p class="text-sm text-white mt-2 mb-4">
        Already have an account?
        <router-link
          to="/login"
          class="text-blue-500 font-medium hover:underline ml-1"
        >
          Login
        </router-link>
      </p>

      <button
        @click="handleSubmit"
        class="bg-[#FF4D8D] py-2 px-4 rounded-xl text-white"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { registerApi } from "../../services/user.service.ts";
import { ref } from "vue";
import { toast } from 'vue3-toastify'

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleSubmit = async () => {
  if (password.value != confirmPassword.value) {
    toast.error("Password not match");
    return;
  }

  try {
    const user = await registerApi({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: confirmPassword.value,
    });
    toast.success("Register successfully");
    router.push("/login")
  } catch (error) {
    toast.error("Something went wrong");
  }
};
</script>
