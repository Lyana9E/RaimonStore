
<<template>
  <div class="bg-primary text-white rounded-b ">
    <div class="container mx-auto grid grid-rows-2 p-5">

      <header
          class="flex items-center justify-between border-b p-2"
      >
          <div class="flex items-center space-x-4">
            <router-link to="/" class="flex-shrink-0">
              <img
                  src="/logo/Logo.png"
                  alt="لوگوی فروشگاه من"
                  class="h-12 w-12 rounded-full object-cover"
              />
            </router-link>
          </div>



        <nav class="">
          <div class="flex justify-center">
            <ul class="flex space-x-8">
              <li>
                <router-link
                    to="/"
                    class=" hover:text-third transition-colors duration-200"
                >
                  خانه
                </router-link>
              </li>
              <li>
                <router-link
                    to="/shop"
                    class="hover:text-third transition-colors duration-200"
                >
                  فروشگاه
                </router-link>
              </li>
            </ul>
          </div>
        </nav>



        <div class="flex items-center space-x-4">
            <div class="relative">
              <a-tooltip title="سبد خرید">
                <a-button type="text" shape="circle" size="large">
                  <template #icon>
                    <shopping-cart-outlined class="text-xl text-white" />
                  </template>
                </a-button>
              </a-tooltip>
              <span
                  class="bg-red-500 text-white rounded-full px-2 text-xs absolute -top-1 -right-1"
              >0</span
              >
            </div>
          </div>
      </header>







      <div class="flex-grow flex justify-center pt-5">
        <a-input-search
            placeholder="جستجو..."
            style="width: 500px"
            @search="onSearch"
        >
          <template #prefix>
            <search-outlined />
          </template>
        </a-input-search>
      </div>    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons-vue";

const onSearch = (value: string) => {
  console.log("Searching for:", value);
};
</script>

