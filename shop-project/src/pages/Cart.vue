<template>
  <div class="container mx-auto p-4 sm:p-8">
    <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">سبد خرید شما</h1>
    <a-divider />

    <a-empty v-if="cartStore.cartItems.length === 0" description="سبد خرید شما خالی است." class="mt-12" />

    <div v-else>
      <a-table
          :columns="columns"
          :data-source="cartStore.cartItems"
          :pagination="false"
          row-key="id"
          class="mb-8"
          :row-class-name="() => 'rtl-table-row'"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'image'">
            <img :src="record.image" :alt="record.title" class="w-20 h-20 object-contain rounded-md" />
          </template>

          <template v-else-if="column.key === 'title'">
            <router-link :to="{ name: 'ProductDetails', params: { id: record.id } }" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              {{ record.title }}
            </router-link>
          </template>

          <template v-else-if="column.key === 'price'">
            <span class="text-gray-700">${{ record.price.toFixed(2) }}</span>
          </template>

          <template v-else-if="column.key === 'quantity'">
            <div class="flex items-center space-x-2 space-x-reverse">
              <a-button @click="cartStore.decreaseQuantity(record.id)" :disabled="record.quantity <= 1">-</a-button>
              <span class="font-bold w-6 text-center">{{ record.quantity }}</span>
              <a-button @click="cartStore.increaseQuantity(record.id)">+</a-button>
            </div>
          </template>

          <template v-else-if="column.key === 'totalItemPrice'">
            <span class="text-gray-700 font-bold">${{ (record.price * record.quantity).toFixed(2) }}</span>
          </template>

          <template v-else-if="column.key === 'actions'">
            <a-button type="link" danger @click="handleRemoveFromCart(record.id)">حذف</a-button>
          </template>
        </template>
      </a-table>

      <a-divider />

      <div class="flex flex-col sm:flex-row justify-between items-center mt-6">
        <div class="text-2xl font-bold mb-4 sm:mb-0">
          مجموع کل: <span class="text-green-600">${{ cartStore.totalPrice.toFixed(2) }}</span>
        </div>
        <a-button type="primary" size="large" class="bg-gray-800 hover:bg-gray-600 transition-colors">
          ادامه به پرداخت
        </a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '../store/cartStore';
import {
  Table as ATable,
  Button as AButton,
  Divider as ADivider,
  Empty as AEmpty,
  Modal,
  notification
} from 'ant-design-vue';

const cartStore = useCartStore();

const columns = ref([
  {
    title: 'عکس',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: 'نام محصول',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'قیمت واحد',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'تعداد',
    key: 'quantity',
  },
  {
    title: 'قیمت کل',
    key: 'totalItemPrice',
  },
  {
    title: 'عملیات',
    key: 'actions',
  },
]);

const handleRemoveFromCart = (productId: number) => {
  Modal.confirm({
    title: 'حذف محصول',
    content: 'آیا از حذف این محصول از سبد خرید اطمینان دارید؟',
    okText: 'بله، حذف کن',
    cancelText: 'لغو',
    okType: 'danger',
    onOk() {
      cartStore.removeFromCart(productId);
      notification.success({
        message: 'حذف شد',
        description: 'محصول با موفقیت از سبد خرید شما حذف شد.',
        placement: 'bottomRight',
      });
    },
  });
};
</script>

<style>
.rtl-table-row {
  text-align: right !important;
}
</style>