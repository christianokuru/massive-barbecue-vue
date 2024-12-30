import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { addIcons, OhVueIcon } from 'oh-vue-icons'

import {
    BiArrowUpCircleFill,
    BiArrowUpCircle,
} from 'oh-vue-icons/icons'


addIcons(
    BiArrowUpCircleFill,
    BiArrowUpCircle,
)





const pinia = createPinia()
const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(router)
app.use(pinia)
app.mount('#app')
