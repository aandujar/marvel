import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt';  
import * as functions from './globalFunctions/functions.js';    
import Icon from "@/components/Icon.vue";  

const emitter = mitt();

const app = createApp(App);
app.component("Icon", Icon);
app.config.globalProperties.$functions = functions;
app.use(store).use(router).provide('emitter', emitter).mount('#app')
