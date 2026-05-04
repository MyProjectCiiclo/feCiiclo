<template>
  <header
    class="flex justify-between items-center px-[180px] py-4 bg-[#0f375a] shadow-sm sticky top-0 z-50 border-b border-gray-200"
  >
    <div>
      <img
        src="../../../src/assets/image-personal.png"
        alt="Avatar"
        class="w-[50px] h-[50px] rounded-full object-cover border-2 border-gray-300 hover:scale-105 transition duration-300"
      />
    </div>

    <nav>
      <ul class="flex items-center gap-6 text-white font-medium">
        <li class="cursor-pointer hover:text-orange-400 transition">
          <router-link to="/project">Project</router-link>
        </li>
        <li class="cursor-pointer hover:text-orange-400 transition">
          <router-link to="/about">About</router-link>
        </li>

        <li class="cursor-pointer hover:text-orange-400 transition">Skills</li>

        <li class="cursor-pointer hover:text-orange-400 transition">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
