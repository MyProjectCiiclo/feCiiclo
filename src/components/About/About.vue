<template>
  <section
    class="min-h-screen lg:px-[180px] bg-[#0f375a] text-white py-16 px-6"
  >
    <div class="max-w-7xl mx-auto" v-if="profile">
      <div class="text-center mb-14">
        <h1 class="text-4xl font-bold">About Me</h1>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto text-sm leading-6">
          Passionate about building modern web applications, solving real
          problems, and transforming ideas into digital products.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <div class="lg:w-[330px] bg-[#111827] rounded-2xl p-7 shadow-lg">
          <div class="flex flex-col items-center">
            <img
              src="@/assets/image-personal.png"
              alt="Profile"
              class="w-28 h-28 rounded-full border-4 border-red-500 object-cover"
            />

            <h2 class="mt-5 text-xl font-semibold">
              {{ profile.full_name }}
            </h2>

            <p class="text-red-500 text-sm mt-1">
              {{ profile.title }}
            </p>

            <div class="flex justify-between w-full mt-6 text-center">
              <div>
                <p class="text-red-500 font-bold text-lg">
                  {{ profile.projects }}
                </p>
                <p class="text-xs text-gray-400">Projects</p>
              </div>

              <div>
                <p class="text-red-500 font-bold text-lg">
                  {{ profile.years }}
                </p>
                <p class="text-xs text-gray-400">Years</p>
              </div>

              <div>
                <p class="text-red-500 font-bold text-lg">
                  {{ profile.clients }}
                </p>
                <p class="text-xs text-gray-400">Clients</p>
              </div>
            </div>

            <button
              class="bg-red-500 hover:bg-red-600 transition mt-7 px-4 py-2.5 rounded-lg w-full"
            >
              Download CV
            </button>

            <router-link
              to="/contact"
              class="border border-red-500 hover:bg-red-500 transition mt-3 px-4 py-2.5 rounded-lg w-full text-center block"
            >
              Contact
            </router-link>

            <div class="mt-6 text-sm text-gray-400 text-center space-y-1">
              <ul></ul>
            </div>
          </div>
        </div>

        <div class="flex-1">
          <h2 class="text-3xl font-bold leading-tight">
            Transforming Ideas into Digital Reality
          </h2>

          <p class="text-gray-400 text-sm mt-4 leading-7 max-w-3xl">
            {{ profile.description }}
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div class="border border-gray-700 p-5 rounded-xl">
              <p class="text-xs text-gray-400 mb-1">Experience</p>
              <p class="font-medium">{{ profile.experience_years }}</p>
            </div>

            <div class="border border-gray-700 p-5 rounded-xl">
              <p class="text-xs text-gray-400 mb-1">Degree</p>
              <p class="font-medium">{{ profile.degree }}</p>
            </div>

            <div class="border border-gray-700 p-5 rounded-xl">
              <p class="text-xs text-gray-400 mb-1">Website</p>
              <p class="font-medium">{{ profile.website }}</p>
            </div>

            <div class="border border-gray-700 p-5 rounded-xl">
              <p class="text-xs text-gray-400 mb-1">Email</p>
              <p class="font-medium">{{ profile.email }}</p>
            </div>
          </div>

          <div class="mt-12">
            <h3 class="text-xl font-bold mb-6">Technical Proficiency</h3>

            <div v-for="skill in profile.skills" :key="skill.id" class="mb-5">
              <div class="flex justify-between text-sm mb-2">
                <span>{{ skill.name }}</span>
                <span>{{ skill.percent }}%</span>
              </div>

              <div class="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div
                  class="bg-red-500 h-2 rounded-full"
                  :style="{ width: skill.percent + '%' }"
                ></div>
              </div>
            </div>
          </div>

          <div class="mt-12">
            <h3 class="text-xl font-bold mb-4">What I Do</h3>

            <p class="text-gray-400 text-sm leading-7">
              I develop modern frontend interfaces with Vue and React, build
              backend systems with Node.js and Laravel, and design scalable
              database structures for real-world applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useProfile } from "@/composables/Profile";
import { onMounted } from "vue";

const { profile, fetchProfile } = useProfile();

onMounted(() => {
  fetchProfile();
});
</script>
