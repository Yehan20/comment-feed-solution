import { createApp } from 'vue'
import { OhVueIcon } from "oh-vue-icons";
import { createPinia } from 'pinia';


import './assets/scss/main.scss';
import App from './App.vue'

const piniaStore = createPinia();


createApp(App).use(piniaStore).component("v-icon", OhVueIcon).mount('#app')
