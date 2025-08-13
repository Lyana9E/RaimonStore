<template>
  <div class="container mx-auto p-4 sm:p-8">
    <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">نهایی کردن خرید</h1>
    <a-divider />

    <a-row :gutter="[32, 32]">
      <a-col :xs="24" :lg="10">
        <OrderSummary />
      </a-col>

      <a-col :xs="24" :lg="14">
        <ShippingForm @submit-form="handleFormSubmit" />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCartStore } from '../store/cartStore';
import { notification, Row as ARow, Col as ACol, Divider as ADivider } from 'ant-design-vue';

// ایمپورت کردن کامپوننت‌های جدید
import OrderSummary from '../components/OrderSummary.vue';
import ShippingForm from '../components/ShippingForm.vue';

// ایمپورت کردن تایپ‌ها
import type { CheckoutFormState, OrderResponse } from '../types';

const cartStore = useCartStore();
const router = useRouter();

const processOrder = (orderData: CheckoutFormState): Promise<OrderResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        orderId: 'ORD-' + Math.random().toString(36).substr(2, 9),
      });
    }, 1000);
  });
};

const handleFormSubmit = async (values: CheckoutFormState) => {
  try {
    const result: OrderResponse = await processOrder(values);

    if (result.success) {
      cartStore.clearCart();
      notification.success({
        message: 'سفارش شما ثبت شد!',
        description: `شماره سفارش شما: ${result.orderId}`,
        placement: 'bottomRight',
      });
      router.push({ name: 'orderConfirmation', params: { orderId: result.orderId } });
    }
  } catch (error) {
    notification.error({
      message: 'خطا در ثبت سفارش!',
      description: 'لطفاً دوباره تلاش کنید.',
      placement: 'bottomRight',
    });
  }
};
</script>