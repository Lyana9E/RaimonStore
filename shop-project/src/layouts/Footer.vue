<template>
  <footer class="bg-third rounded-xl text-white p-8 mt-10">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 justify-between gap-8">
      <div class="flex flex-col items-center gap-10">
        <router-link to="/">
          <img
              src="/logo/Logo.png"
              alt="لوگوی فروشگاه من"
              class="h-12 w-auto mb-4"
          />
        </router-link>
        <p class="text-sm">
           ALLEY  سبکی که به چشم می‌آید
        </p>
      </div>

      <div class="flex flex-col items-center gap-10">
        <h3 class="text-lg font-bold mb-4">همراه ما باشید</h3>
        <div class="flex space-x-4">
          <a-tooltip title="اینستاگرام">
            <a
                href="#"
                target="_blank"
                class="hover:text-primary transition-colors duration-200"
            >
              <instagram-outlined class="text-2xl" />
            </a>
          </a-tooltip>
          <a-tooltip title="توییتر">
            <a
                href="#"
                target="_blank"
                class="hover:text-primary transition-colors duration-200"
            >
              <twitter-outlined class="text-2xl" />
            </a>
          </a-tooltip>
          <a-tooltip title="فیسبوک">
            <a
                href="#"
                target="_blank"
                class="hover:text-primary transition-colors duration-200"
            >
              <facebook-outlined class="text-2xl" />
            </a>
          </a-tooltip>
        </div>
      </div>

      <div class="flex flex-col items-center gap-10">
        <h3 class="text-lg font-bold mb-4">تماس با ما</h3>
        <p class="mb-2">
          <a
              href="mailto:AlleyShop@yahoo.com"
              class="hover:text-primary transition-colors duration-200"
          >
            AlleyShop@yahoo.com
          </a>
        </p>
        <p class="mb-2">
تلفن :
        <a
            href="tel:09132342323"
            class="hover:text-primary transition-colors duration-200"
        >
          09132342323
        </a>
        </p>
      </div>
    </div>

    <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
      <p>&copy; ۱۴۰۳ تمامی حقوق این وبسایت محفوظ است.</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons-vue";
</script>