<template>
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
          :rules="[{ required: true, message: 'لطفاً شماره تماس را وارد کنید!' }, { pattern: new RegExp(/^[0-9]+$/), message: 'شماره تماس باید فقط شامل اعداد انگلیسی باشد!' }]"

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
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Form as AForm, FormItem as AFormItem, Input as AInput, Textarea as ATextarea, Button as AButton, Card as ACard } from 'ant-design-vue';
import type { CheckoutFormState } from '../types';

const formState: CheckoutFormState = reactive({
  fullName: '',
  address: '',
  phoneNumber: '',
});

const emit = defineEmits<{
  (e: 'submitForm', values: CheckoutFormState): void
}>();

const onFinish = (values: CheckoutFormState) => {
  emit('submitForm', values);
};

</script>