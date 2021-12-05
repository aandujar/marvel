import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt';  
import * as functions from './globalFunctions/functions.js';      

const emitter = mitt();

const app = createApp(App);

app.config.globalProperties.$functions = functions;
app.use(store).use(router).provide('emitter', emitter).mount('#app')
