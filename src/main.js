import { createApp } from 'vue'
import App from './App.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import './assets/main.css'

const options = {
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
};

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay, faTrash, faCode, faDesktop,faSun,faMoon,faComments,faPaperclip,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
//import {fabVue} from '@fortawesome/free-brands-svg-icons'

library.add(faPlay, faTrash, faCode, faDesktop,faSun,faMoon,faComments,faPaperclip,faPaperPlane)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Toast, options)
app.mount('#app')
