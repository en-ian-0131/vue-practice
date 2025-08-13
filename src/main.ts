import { createApp } from "vue";
import App from "./App.vue";
import './assets/main.css'
// import KKday from "./KKday.vue";

const vm = createApp(App);
// const vm = createApp(KKday);

vm.mount("#app");