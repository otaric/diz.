import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { i18n } from './utils/i18n'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(i18n).use(pinia).mount('#app')
