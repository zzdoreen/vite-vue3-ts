import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App)
    .use(router)
    .use(ElementPlus)
    .provide('this', this)
    .mount('#app')
