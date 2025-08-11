import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import './style.css'
import router from './router/index.ts'
import App from './App.vue'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia);
app.use(router);
app.use(Antd);

app.mount('#app')



