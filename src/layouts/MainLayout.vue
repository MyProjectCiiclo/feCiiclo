<template>
  <div class="layout">
    <AppHeader />

    <main class="content">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import App from "@/App.vue";
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
