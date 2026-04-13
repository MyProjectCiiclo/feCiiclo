<template>
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="flex flex-col items-center p-6 rounded-xl shadow-xl bg-[#FF85BB]"
    >
      <h1 class="text-xl font-bold mb-4 text-white">Login Account</h1>

      <div class="mb-4 w-80">
        <input
          class="w-full outline-none p-2 rounded-xl"
          type="text"
          placeholder="Enter email"
        />
      </div>

      <div class="mb-4 w-80">
        <input
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
        <button class="bg-[#FFCEE3] py-2 px-4 rounded-xl text-white">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
