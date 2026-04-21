<template>
  <div class="layout">
    <Header/>

    <main class="content">
      <slot />
    </main>

   <Footer/>
  </div>
</template>

<script setup>
import Footer from "@/components/Share/Footer.vue";
import Header from "@/components/Share/Header.vue";
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  padding: 20px;
  background: #020c1b;
  color: white;
}

.content {
  flex: 1;
}
</style>