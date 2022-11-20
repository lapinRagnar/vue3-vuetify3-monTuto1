/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


import router from '@/routes/index'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(createPinia())
app.use(router)
app.mount('#app')
