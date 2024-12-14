import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { addIcons, OhVueIcon } from 'oh-vue-icons'

import {
    BiArrowUpCircleFill,
    BiArrowUpCircle,
} from 'oh-vue-icons/icons'


addIcons(
    BiArrowUpCircleFill,
    BiArrowUpCircle,
)






const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(router)

app.mount('#app')
