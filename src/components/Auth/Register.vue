<template>
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="flex flex-col items-center p-6 rounded-xl shadow-xl bg-[#FF85BB]"
    >
      <h1 class="text-xl font-bold mb-4 text-white">Register Account</h1>

      <!-- NAME -->
      <div class="mb-4 w-80">
        <input
          v-model="name"
          class="w-full outline-none p-2 rounded-xl"
          type="text"
          placeholder="Enter name"
        />
      </div>

      <!-- EMAIL -->
      <div class="mb-4 w-80">
        <input
          v-model="email"
          class="w-full outline-none p-2 rounded-xl"
          type="text"
          placeholder="Enter email"
        />
      </div>

      <!-- PASSWORD -->
      <div class="mb-4 w-80">
        <input
          v-model="password"
          class="w-full outline-none p-2 rounded-xl"
          type="password"
          placeholder="Enter password"
        />
      </div>

      <!-- CONFIRM PASSWORD -->
      <div class="mb-4 w-80">
        <input
          v-model="confirmPassword"
          class="w-full outline-none p-2 rounded-xl"
          type="password"
          placeholder="Enter confirm password"
        />
      </div>

      <!-- LINK LOGIN -->
      <p class="text-sm text-gray-600 mt-2 mb-4">
        Already have an account?
        <router-link
          to="/login"
          class="text-blue-500 font-medium hover:underline ml-1"
        >
          Login
        </router-link>
      </p>

      <!-- BUTTON -->
      <button
        @click="handleSubmit"
        class="bg-[#FFCEE3] py-2 px-4 rounded-xl text-white"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import http from "@/api/http";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleSubmit = async () => {
  try {
    // check password
    if (password.value !== confirmPassword.value) {
      alert("Password không khớp!");
      return;
    }

    const res = await http.post("/auth/register", {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: confirmPassword.value,
    });

    console.log("SUCCESS:", res.data);

    alert("Register success!");
  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
  }
};
</script>
