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

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(router)
app.mount('#app')
