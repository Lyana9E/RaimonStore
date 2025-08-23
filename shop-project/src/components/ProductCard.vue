<template>
  <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="block">
    <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div class="w-full h-48 overflow-hidden flex items-center justify-center">
      <img :src="product.image" :alt="product.title" class="w-full h-full object-contain p-2" />
      </div>
      <div class="p-4">
        <h3 class="text-lg text-gray font-semibold truncate">{{ product.title }}</h3>
        <p class="text-primary text-sm mt-1 mb-2">{{ product.category }}</p>
        <div class="flex items-center justify-between">
          <span class="text-xl font-bold text-003554">${{ product.price }}</span>

          <a-button
              type="primary"

              @click.prevent="handleAddToCart"
          >
            افزودن به سبد خرید
          </a-button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Product } from '../types';
import { Button as AButton } from 'ant-design-vue';

const props = defineProps<{
  product: Product;
}>();

const emit = defineEmits(['add-to-cart']);

const handleAddToCart = () => {
  emit('add-to-cart', props.product);
};
</script>


