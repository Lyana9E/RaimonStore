<!--<script setup lang="ts">-->
<!--import HelloWorld from './components/HelloWorld.vue'-->
<!--</script>-->

<!--<template>-->
<!--  <div>-->
<!--    <a href="https://vite.dev" target="_blank">-->
<!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
<!--    </a>-->
<!--    <a href="https://vuejs.org/" target="_blank">-->
<!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
<!--    </a>-->
<!--  </div>-->
<!--  <HelloWorld msg="Vite + Vue" />-->
<!--</template>-->

<!--<style scoped>-->
<!--.logo {-->
<!--  height: 6em;-->
<!--  padding: 1.5em;-->
<!--  will-change: filter;-->
<!--  transition: filter 300ms;-->
<!--}-->
<!--.logo:hover {-->
<!--  filter: drop-shadow(0 0 2em #646cffaa);-->
<!--}-->
<!--.logo.vue:hover {-->
<!--  filter: drop-shadow(0 0 2em #42b883aa);-->
<!--}-->
<!--</style>-->



<template>
  <div id="app" class="max-w-4xl mx-auto p-4 font-sans">
    <nav class="mb-6 flex gap-6 border-b border-gray-300 pb-2">
      <RouterLink to="/" class="text-blue-600 font-semibold hover:text-blue-800">خانه</RouterLink>
      <RouterLink to="/shop" class="text-blue-600 font-semibold hover:text-blue-800">فروشگاه</RouterLink>
      <RouterLink to="/cart" class="text-blue-600 font-semibold hover:text-blue-800">سبد خرید</RouterLink>
      <RouterLink to="/checkout" class="text-blue-600 font-semibold hover:text-blue-800">تسویه حساب</RouterLink>
    </nav>

    <main class="min-h-[400px]">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts"></script>
