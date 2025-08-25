<template>
  <div class="container mx-auto p-4 sm:p-8">
    <a-spin :spinning="productStore.isLoading" size="large" tip="در حال بارگذاری محصول...">
      <div v-if="productStore.error">
        <a-alert
            message="خطا"
            :description="productStore.error"
            type="error"
            show-icon
            class="my-8"
        />
      </div>

      <div v-else-if="productStore.selectedProduct" class="bg-white p-6 rounded-xl shadow-lg mt-8">
        <a-row :gutter="[32, 32]">
          <a-col :xs="24" :md="12" >
            <div class="flex justify-center items-center h-80 sm:h-96">
            <a-image :src="productStore.selectedProduct.image" :alt="productStore.selectedProduct.title" class="max-h-96 object-contain" />
            </div>
          </a-col>

          <a-col :xs="24" :md="12">
            <h1 class="text-3xl font-bold mb-4 text-gray-800">{{ productStore.selectedProduct.title }}</h1>
            <a-divider class="my-4" />

            <div class="flex items-center space-x-4 space-x-reverse mb-4">
              <span class="text-xl font-bold text-gray-800">قیمت:</span>
              <span class="text-3xl font-bold text-green-600">${{ productStore.selectedProduct.price }}</span>
            </div>

            <a-divider class="my-4" />

            <h3 class="text-xl font-semibold mb-2">توضیحات محصول</h3>
            <p class="text-gray-600 leading-7 mb-4">{{ productStore.selectedProduct.description }}</p>

            <a-divider class="my-4" />

            <div class="flex items-center space-x-4 space-x-reverse">
              <a-button
                  type="primary"
                  size="large"
                  class="bg-blue-500 hover:bg-blue-600 transition-colors"
                  @click="handleAddToCart(productStore.selectedProduct)"
              >
                افزودن به سبد خرید
              </a-button>
            </div>
          </a-col>
        </a-row>
      </div>

      <div v-else class="my-8 text-center text-gray-500">
        <a-empty description="محصول مورد نظر یافت نشد." />
      </div>
    </a-spin>
  </div>
</template>


<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../store/productStore';
import { useCartStore } from '../store/cartStore';
import { notification } from 'ant-design-vue';
import {
  Spin as ASpin,
  Alert as AAlert,
  Row as ARow,
  Col as ACol,
  Image as AImage,
  Divider as ADivider,
  Button as AButton,
  Empty as AEmpty
} from 'ant-design-vue';
import type { Product } from '../types';

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();

const fetchProduct = () => {
  const productId = Number(route.params.id);
  if (productId) {
    productStore.fetchProductById(productId);
  } else {
    productStore.error = 'Invalid product ID.';
  }
};

onMounted(() => {
  fetchProduct();
});

watch(() => route.params.id, (newId) => {
  if (newId) {
    fetchProduct();
  }
});

const handleAddToCart = (product: Product) => {
  if (product) {
    cartStore.addToCart(product);
    notification.success({
      message: 'اضافه شد',
      description: `${product.title} به سبد خرید شما اضافه شد.`,
      placement: 'bottomRight',
    });
  }
};
</script>