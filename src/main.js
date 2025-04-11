/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import store from "./store"; // 引入 Vuex Store

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(store); // 安裝 Vuex 插件
app.mount('#app')
