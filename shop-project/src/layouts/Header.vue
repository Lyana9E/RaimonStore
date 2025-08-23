<template>
  <div class="bg-third text-white shadow-lg text-xl">
    <SideMenu :isOpen="isMenuOpen" @close="toggleMenu"/>
    <div class="container mx-auto p-4 flex items-center justify-between">
      <router-link to="/" class="flex-shrink-0">
        <img
            src="/logo/Logo.png"
            alt="لوگوی فروشگاه من"
            class="h-16 w-16 rounded-full object-cover"
        />
      </router-link>
      <nav v-if="isLargeScreen">
        <ul class="flex justify-between gap-10 space-x-8 space-x-reverse font-medium">
          <li>
            <router-link
                to="/"
                class="hover:text-primary transition-colors duration-200"
            >
              خانه
            </router-link>
          </li>
          <li>
            <router-link
                to="/shop"
                class="hover:text-primary transition-colors duration-200"
            >
              فروشگاه
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="flex items-center space-x-4 space-x-reverse">
        <a-button
            v-if="!isLargeScreen"

            type="text"
            shape="circle"
            size="large"
            class="sm:hidden"
            @click="toggleMenu"
        >
          <template #icon>
            <menu-outlined v-if="!isMenuOpen" class="text-2xl " style="color: white !important;"/>
            <close-outlined v-else class="text-2xl " style="color: indianred !important;"/>
          </template>
        </a-button>
        <router-link to="/cart" class="relative">
          <a-tooltip title="سبد خرید">
            <a-button type="text" shape="circle" size="large">
              <template #icon>
                <shopping-cart-outlined class="text-3xl" style="color: white !important;"/>
              </template>
            </a-button>
          </a-tooltip>
          <span
              v-if="cartStore.totalItems > 0"
              class="text-white rounded-full text-xs font-bold absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1"
          >
            {{ cartStore.totalItems }}
          </span>
        </router-link>
      </div>


    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons-vue";
import {useCartStore} from '../store/cartStore';
import {Button as AButton, Tooltip as ATooltip} from 'ant-design-vue';
import {useRouter} from 'vue-router';
import SideMenu from '../components/SideMenu.vue'
import {ref, watch} from 'vue';
import {useBreakpoints, breakpointsAntDesign} from '@vueuse/core';

const cartStore = useCartStore();
const router = useRouter();
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const breakpoints = useBreakpoints(breakpointsAntDesign);
const isLargeScreen = breakpoints.md;

watch(isLargeScreen, (newValue) => {
  if (newValue) {
    isMenuOpen.value = false;
  }
});
</script>



