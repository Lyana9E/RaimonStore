


<template>
  <div class="p-8 font-sans rtl">
    <h1 class="text-primary mb-6 text-center text-xl font-semibold">
      ALLEY
    </h1>

    <section class="mb-10 rounded-xl overflow-hidden shadow-lg">
      <CarouselWrapper :autoplay="3000" :wrapAround="true" :transition="500" dir="rtl">
        <template #slides>
          <Slide v-for="slide in bannerSlides" :key="slide.id">
            <div class="w-full h-96">
              <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover"/>
            </div>
          </Slide>
        </template>
      </CarouselWrapper>
    </section>


  </div>
</template>

<script setup lang="ts">


import {bannerSlides} from '../mocks/HomeBannerSlider.ts';
import CarouselWrapper from "../components/CarouselWrapper.vue";
import { Slide } from 'vue3-carousel';


</script>

