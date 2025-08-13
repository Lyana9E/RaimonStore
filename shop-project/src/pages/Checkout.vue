<template>
  <div class="container mx-auto p-4 sm:p-8">
    <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">نهایی کردن خرید</h1>
    <a-divider />

    <a-row :gutter="[32, 32]">
      <a-col :xs="24" :lg="10">
        <a-card title="خلاصه سفارش" class="shadow-lg rounded-xl">
          <a-list
              item-layout="horizontal"
              :data-source="cartStore.cartItems"
          >
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta>
                  <template #avatar>
                    <a-avatar :src="item.image" :alt="item.title" shape="square" />
                  </template>
                  <template #title>
                    <span class="font-semibold">{{ item.title }} (x{{ item.quantity }})</span>
                  </template>
                  <template #description>
                    قیمت: ${{ (item.price * item.quantity).toFixed(2) }}
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
          <a-divider />
          <div class="flex justify-between items-center text-xl font-bold">
            <span>مجموع کل:</span>
            <span class="text-green-600">${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
        </a-card>
      </a-col>

      <a-col :xs="24" :lg="14">
        <a-card title="اطلاعات ارسال" class="shadow-lg rounded-xl">
          <a-form
              :model="formState"
              name="checkout_form"
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 18 }"
              autocomplete="off"
              @finish="onFinish"
              class="rtl-form"
          >
            <a-form-item
                label="نام کامل"
                name="fullName"
                :rules="[{ required: true, message: 'لطفاً نام خود را وارد کنید!' }]"
            >
              <a-input v-model:value="formState.fullName" />
            </a-form-item>

            <a-form-item
                label="آدرس"
                name="address"
                :rules="[{ required: true, message: 'لطفاً آدرس خود را وارد کنید!' }]"
            >
              <a-textarea v-model:value="formState.address" />
            </a-form-item>

            <a-form-item
                label="شماره تماس"
                name="phoneNumber"
                :rules="[{ required: true, message: 'لطفاً شماره تماس را وارد کنید!' }]"
            >
              <a-input v-model:value="formState.phoneNumber" />
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 6, span: 18 }">
              <a-button type="primary" html-type="submit" size="large" class="bg-gray-800 hover:bg-gray-600 transition-colors">
                پرداخت و ثبت سفارش
              </a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useCartStore } from '../store/cartStore';
import { useRouter } from 'vue-router';
import { notification } from 'ant-design-vue';

// Ant Design Components
import {
  Row as ARow,
  Col as ACol,
  Card as ACard,
  List as AList,
  ListItem as AListItem,
  ListItemMeta as AListItemMeta,
  Avatar as AAvatar,
  Divider as ADivider,
  Form as AForm,
  FormItem as AFormItem,
  Input as AInput,
  Textarea as ATextarea,
  Button as AButton,
} from 'ant-design-vue';

const cartStore = useCartStore();
const router = useRouter();

// Form state using reactive for reactivity
const formState = reactive({
  fullName: '',
  address: '',
  phoneNumber: '',
});

const onFinish = (values: any) => {
  console.log('Success:', values);
  cartStore.clearCart();
  notification.success({
    message: 'سفارش شما ثبت شد!',
    description: 'سفارش شما با موفقیت ثبت شد. به زودی با شما تماس گرفته خواهد شد.',
    placement: 'bottomRight',
  });
  router.push({ name: 'orderConfirmation', params: { orderId: '123456789' } });
};
</script>

