<template>
  <div>
    <h1>Shop</h1>
    <ul>
      <li v-for="p in products" :key="p.id">
        <RouterLink :to="{ name: 'ProductDetails', params: { id: p.id } }">
          {{ p.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Product {
  id: string
  name: string
}

const products = ref<Product[]>([
  { id: '1', name: 'Product A' },
  { id: '2', name: 'Product B' }
])
</script>
