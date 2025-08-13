<template>
  <a-card title="خلاصه سفارش" class="shadow-lg rounded-xl">
    <a-list item-layout="horizontal" :data-source="cartItems">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta>
            <template #avatar>
              <a-avatar :src="item.image" :alt="item.title" shape="square" />
            </template>
            <template #title>
              <span class="font-semibold">{{ item.title }} (x{{ item.quantity }})</span>
            </template>
            <template #description>
              قیمت: ${{ (item.price * item.quantity).toFixed(2) }}
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
    <a-divider />
    <div class="flex justify-between items-center text-xl font-bold">
      <span>مجموع کل:</span>
      <span class="text-green-600">${{ totalPrice.toFixed(2) }}</span>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cartStore.ts';
import { computed } from 'vue';
import { Card as ACard, List as AList, ListItem as AListItem, ListItemMeta as AListItemMeta, Avatar as AAvatar, Divider as ADivider } from 'ant-design-vue';

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.cartItems);
const totalPrice = computed(() => cartStore.totalPrice);
</script>