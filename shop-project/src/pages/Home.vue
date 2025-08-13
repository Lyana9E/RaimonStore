<template>
  <div class="container mx-auto p-4 sm:p-8">
    <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">ALLEY</h1>

    <section class="mb-10 rounded-xl overflow-hidden shadow-lg">
      <CarouselWrapper :autoplay="3000" :wrapAround="true" dir="rtl" class="w-full">
        <template #slides>
          <Slide v-for="slide in bannerSlides" :key="slide.id">
            <div class="w-full h-96">
              <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover"/>
            </div>
          </Slide>
        </template>
      </CarouselWrapper>
    </section>

    <a-divider class="my-10" />


    <section class="mb-10">
      <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">محصولات پرفروش</h2>

      <a-spin :spinning="homeProductStore.isLoading" size="large" tip="در حال بارگذاری محصولات...">
        <div v-if="homeProductStore.error">
          <a-alert message="خطا" :description="homeProductStore.error" type="error" show-icon />
        </div>
        <div v-else>
          <CarouselWrapper
              :autoplay="5000"
              :wrapAround="true"
              dir="rtl"
              :breakpoints="productCarouselBreakpoints"
              :with-navigation="true"
          >
            <template #slides>
              <Slide v-for="product in homeProductStore.featuredProducts" :key="product.id">
                <div class="carousel__item carousel__item--card">
                  <ProductCard :product="product" @add-to-cart="handleAddToCart" />
                </div>
              </Slide>
            </template>
          </CarouselWrapper>
        </div>
      </a-spin>

    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useHomeProductStore } from '../store/homeProductStore';
import { useCartStore } from '../store/cartStore';
import { bannerSlides } from '../mocks/HomeBannerSlider.ts';
import CarouselWrapper from "../components/CarouselWrapper.vue";
import ProductCard from "../components/ProductCard.vue";
import { Slide } from 'vue3-carousel';
import { Button as AButton, Divider as ADivider, Spin as ASpin, Alert as AAlert, notification } from 'ant-design-vue';

const homeProductStore = useHomeProductStore();
const cartStore = useCartStore();

onMounted(() => {
  homeProductStore.fetchFeaturedProducts();
});

const handleAddToCart = (product: any) => {
  cartStore.addToCart(product);
  notification.success({
    message: 'اضافه شد',
    description: `${product.title} به سبد خرید شما اضافه شد.`,
    placement: 'bottomRight',
  });
};



const productCarouselBreakpoints = {
  '0': {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  '640': {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  '768': {
    itemsToShow: 3,
    snapAlign: 'start',
  },
  '1024': {
    itemsToShow: 4,
    snapAlign: 'start',
  },
};


</script>