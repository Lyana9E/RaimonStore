<template>

    <Carousel
        v-bind="$attrs"
        :autoplay="autoplay"
        :wrap-around="wrapAround"
        :transition="transition"
        :dir="dir"
    >
      <slot name="slides"></slot>

      <template #addons>
        <slot name="pagination">
          <Pagination />
        </slot>
        <slot v-if="withNavigation" name="navigation">
          <Navigation />
        </slot>
      </template>
    </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

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
  withNavigation: {
    type: Boolean,
    default: false,
  },
});
</script>




<style scoped>
:deep(.carousel__pagination-button) {
  background-color: rgba(255, 255, 255, 0.5) !important;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 4px;
}

:deep(.carousel__pagination-button--active) {
  background-color: #fff !important;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  box-sizing: content-box;
  color: #fff;
  opacity: 0.8;
  transition: opacity 0.3s;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  opacity: 1;
}
</style>