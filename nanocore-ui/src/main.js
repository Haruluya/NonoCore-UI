import { createApp } from 'vue'
import App from './App.vue'
import {nano_install} from '@/pages/index.js'
const app = createApp(App);

// install must before use.

nano_install(app);


app.mount('#app');