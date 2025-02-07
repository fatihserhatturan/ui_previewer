import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

/* Font Awesome başlangıç */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay, faTrash, faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faTrash, faCode, faDesktop)
/* Font Awesome bitiş */

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
