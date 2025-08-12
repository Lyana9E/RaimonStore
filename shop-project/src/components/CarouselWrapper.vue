<template>
  <Carousel :autoplay="autoplay" :wrapAround="wrapAround" :transition="transition" :dir="dir">
    <slot name="slides"></slot>

    <template #addons>
      <slot name="pagination">
        <Pagination />
      </slot>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

// Props برای تنظیمات عمومی اسلایدر
defineProps({
  autoplay: {
    type: Number,
    default: 3000,
  },
  wrapAround: {
    type: Boolean,
    default: true,
  },
  transition: {
    type: Number,
    default: 500,
  },
  dir: {
    type: String,
    default: 'rtl',
  },
});
</script>

<style scoped>
/* استایل‌های Pagination همچنان از طریق ::v-deep مدیریت می‌شوند */
::v-deep(.carousel__pagination-button) {
  background-color: rgba(255, 255, 255, 0.5) !important;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 4px;
}

::v-deep(.carousel__pagination-button--active) {
  background-color: #fff !important;
}
</style>