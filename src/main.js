import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import toastr from 'toastr'
// import 'toastr/build/toaster.min.css'


import './assets/css/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

window.toastr = toastr

const app = createApp(App)
axios.defaults.baseURL = "http://localhost:3000"
window.axios = axios
app.use(createPinia())
const pinia = createPinia()
// pinia.use(context => {
//     const storeId = context.store.$id
//     const serializer = {
//         serialize: JSON.stringify,
//         deserialize: JSON.parse
//     }
// })

app.use(router)

app.mount('#app')
