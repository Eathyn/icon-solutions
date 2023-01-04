import { createApp } from 'vue'
import App from './App.vue'
import '@/icon/iconfont'
import IconSvg from '@/components/IconSvg'

const app = createApp(App)
app.mount('#app')
app.component('IconSvg', IconSvg)
