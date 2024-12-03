/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import EventBus from '@/utils/eventBus';

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

// 註冊 EventBus 為全局屬性
app.config.globalProperties.$eventBus = EventBus;

registerPlugins(app)

app.mount('#app')
