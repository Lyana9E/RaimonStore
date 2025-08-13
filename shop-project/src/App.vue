


<template>
  <a-config-provider :theme="themeConfig">
  <div id="app" dir="rtl" class=" font-sans">
    <Header/>
    <main class="min-h-[400px]">
      <RouterView />
    </main>
    <Footer/>
  </div>
  </a-config-provider>

</template>

<script setup lang="ts">
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
const themeConfig = {
  token: {
    colorPrimary: '#22223b',
  },
  components: {
    Button: {
      colorPrimary: '#22223b',
      colorPrimaryHover: '#34344d',
    },
  },
};

</script>
