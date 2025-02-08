import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay, faTrash, faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'
//import {fabVue} from '@fortawesome/free-brands-svg-icons'

library.add(faPlay, faTrash, faCode, faDesktop)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
