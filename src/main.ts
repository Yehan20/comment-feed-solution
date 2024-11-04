import { createApp } from 'vue'
import { OhVueIcon } from "oh-vue-icons";

import './assets/main.scss';
import App from './App.vue'

createApp(App).component("v-icon", OhVueIcon).mount('#app')
