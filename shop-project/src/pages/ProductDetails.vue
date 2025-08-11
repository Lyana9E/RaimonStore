<template>
  <div>
    <h1>Product Details</h1>
    <p>Product ID: {{ id }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string
}>()
</script>
