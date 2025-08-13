<template>
  <div class="container mx-auto p-4 sm:p-8 text-center">
    <div class="bg-white p-8 rounded-xl shadow-lg mt-12">
      <h1 class="text-4xl font-bold text-green-600 mb-4">با تشکر از خرید شما!</h1>
      <p class="text-xl text-gray-700 mb-6">سفارش شما با موفقیت ثبت شد.</p>

      <a-divider />

      <a-card title="جزئیات سفارش" class="my-6 text-right">
        <p class="text-lg">
          <span class="font-bold">شماره سفارش:</span> #{{ orderId }}
        </p>
        <p class="text-lg mt-2">
          <span class="font-bold">تاریخ سفارش:</span> {{ new Date().toLocaleDateString('fa-IR') }}
        </p>
      </a-card>

      <a-button type="primary" size="large" class="bg-gray-800 hover:bg-gray-600 transition-colors">
        <router-link to="/">بازگشت به صفحه اصلی</router-link>
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import {
  Card as ACard,
  Button as AButton,
  Divider as ADivider
} from 'ant-design-vue';

const route = useRoute();
const orderId = route.params.orderId;
</script>