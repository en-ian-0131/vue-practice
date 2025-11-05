import { createApp } from "vue";
import App from "./App.vue";
import './assets/main.css'
import { router } from "./router";
import { createPinia } from "pinia";
// import KKday from "./KKday.vue";

const vm = createApp(App);
// const vm = createApp(KKday);
const pinia = createPinia()
vm.use(pinia)
vm.use(router)

vm.mount("#app");