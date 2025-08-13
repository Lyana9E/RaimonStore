<template>
  <div class="container mx-auto p-4 sm:p-8">
    <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">فروشگاه</h1>

    <div class="mb-6 flex flex-col sm:flex-row items-center gap-4">
      <a-input-search
          v-model:value="productStore.searchTerm"
          placeholder="جستجوی محصول..."
          size="large"
          class="w-full sm:w-1/2"
          @search="onSearch"
      />
      <div class="flex items-center gap-2 w-full sm:w-auto">
        <span class="text-gray-600 whitespace-nowrap">مرتب‌سازی بر اساس قیمت:</span>
        <a-select
            v-model:value="productStore.sortOrder"
            class="w-full sm:w-40"
            placeholder="انتخاب کنید"
            allowClear
        >
          <a-select-option value="asc">کم به زیاد</a-select-option>
          <a-select-option value="desc">زیاد به کم</a-select-option>
        </a-select>
      </div>
    </div>

    <a-spin :spinning="productStore.isLoading" size="large" tip="در حال بارگذاری محصولات...">
      <div v-if="productStore.error">
        <a-alert
            message="خطا"
            :description="productStore.error"
            type="error"
            show-icon
        />
      </div>

      <div v-else-if="productStore.filteredAndSortedProducts.length === 0" class="mt-8 text-center text-gray-500">
        <a-empty description="محصولی یافت نشد." />
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        <ProductCard
            v-for="product in productStore.filteredAndSortedProducts"
            :key="product.id"
            :product="product"
            @add-to-cart="handleAddToCart"
        />
      </div>
    </a-spin>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from '../store/productStore';
import { useCartStore } from '../store/cartStore';
import ProductCard from '../components/ProductCard.vue';
import type { Product } from '../types';
import {
  notification
} from 'ant-design-vue';

const productStore = useProductStore();
const cartStore = useCartStore();

onMounted(() => {
  if (productStore.products.length === 0) {
    productStore.fetchProducts();
  }
});

const handleAddToCart = (product: Product) => {
  cartStore.addToCart(product);
  notification.success({
    message: 'اضافه شد',
    description: `${product.title} به سبد خرید شما اضافه شد.`,
    placement: 'bottomRight',
  });
};

const onSearch = (value: string) => {
  console.log('Searching for:', value);
};
</script>