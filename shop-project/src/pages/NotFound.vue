

<template>
  <div class="flex flex-col items-center justify-center h-[60vh] text-center p-4 bg-light">

    <h1 class="text-7xl font-bold text-gray-800">۴۰۴</h1>
    <h2 class="text-2xl font-semibold text-gray-700 mt-4 mb-4">صفحه مورد نظر شما پیدا نشد.</h2>
    <p class="text-lg text-gray-600 mb-8">
      متاسفانه، آدرسی که وارد کردید صحیح نیست یا صفحه مورد نظر منتقل شده است.
    </p>

    <router-link to="/">
      <a-button type="primary" size="large">
        بازگشت به صفحه اصلی
      </a-button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { Button as AButton } from 'ant-design-vue';
</script>