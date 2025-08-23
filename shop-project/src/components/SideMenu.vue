<!--<template>-->
<!--  <transition-->
<!--      enter-from-class="-translate-x-full"-->
<!--      enter-to-class="translate-x-0"-->
<!--      leave-from-class="translate-x-0"-->
<!--      leave-to-class="-translate-x-full"-->
<!--  >-->
<!--    <aside-->
<!--        v-if="isOpen"-->
<!--        class="fixed top-0 left-0 h-full w-64 bg-third text-white shadow-xl z-50 transform transition-transform duration-300"-->
<!--    >-->
<!--      <div class="p-4 flex flex-col h-full">-->
<!--        <div class="flex items-center justify-between mb-8">-->
<!--          <router-link to="/" @click="closeMenu">-->
<!--            <img-->
<!--                src="/logo/Logo.png"-->
<!--                alt="لوگوی فروشگاه من"-->
<!--                class="h-16 w-16 rounded-full object-cover"-->
<!--            />-->
<!--          </router-link>-->

<!--          <a-button type="text" shape="circle" size="large" @click="closeMenu">-->
<!--            <template #icon>-->
<!--              <close-outlined class="text-3xl text-white" />-->
<!--            </template>-->
<!--          </a-button>-->
<!--        </div>-->

<!--        <nav class="flex-grow">-->
<!--          <ul>-->
<!--            <li class="mb-4">-->
<!--              <router-link-->
<!--                  to="/"-->
<!--                  class="block p-2 rounded-lg hover:bg-gray-700 transition-colors"-->
<!--                  @click="closeMenu"-->
<!--              >-->
<!--                خانه-->
<!--              </router-link>-->
<!--            </li>-->
<!--            <li class="mb-4">-->
<!--              <router-link-->
<!--                  to="/shop"-->
<!--                  class="block p-2 rounded-lg hover:bg-gray-700 transition-colors"-->
<!--                  @click="closeMenu"-->
<!--              >-->
<!--                فروشگاه-->
<!--              </router-link>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </nav>-->
<!--      </div>-->
<!--    </aside>-->
<!--  </transition>-->
<!--</template>-->

<!--<script setup>-->
<!--import { defineProps, defineEmits } from 'vue';-->
<!--import { CloseOutlined } from '@ant-design/icons-vue'; // جدید-->
<!--import { Button as AButton } from 'ant-design-vue'; // جدید-->

<!--const props = defineProps({-->
<!--  isOpen: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--  },-->
<!--});-->

<!--const emits = defineEmits(['close']);-->

<!--const closeMenu = () => {-->
<!--  emits('close');-->
<!--};-->
<!--</script>-->


<template>
  <transition
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div
        v-if="isOpen"
        class="fixed inset-0 bg-light bg-opacity-50 z-40 transition-opacity duration-300"
        @click="closeMenu"
    ></div>
  </transition>

  <transition
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
  >
    <aside
        v-if="isOpen"
        class="fixed top-0 right-0 h-full w-64 bg-third text-white shadow-xl z-50 transform transition-transform duration-300"
    >
      <div class="p-4 flex flex-col h-full">
        <div class="flex items-center justify-between mb-8">
          <a-button type="text" shape="circle" size="large" @click="closeMenu">
            <template #icon>
              <close-outlined class="text-3xl text-white" />
            </template>
          </a-button>

          <router-link to="/" @click="closeMenu">
            <img
                src="/logo/Logo.png"
                alt="لوگوی فروشگاه من"
                class="h-16 w-16 rounded-full object-cover"
            />
          </router-link>
        </div>

        <nav class="flex-grow">
          <ul>
            <li class="mb-4">
              <router-link
                  to="/"
                  class="block p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  @click="closeMenu"
              >
                خانه
              </router-link>
            </li>
            <li class="mb-4">
              <router-link
                  to="/shop"
                  class="block p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  @click="closeMenu"
              >
                فروشگاه
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { CloseOutlined } from '@ant-design/icons-vue';
import { Button as AButton } from 'ant-design-vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['close']);

const closeMenu = () => {
  emits('close');
};
</script>