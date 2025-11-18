import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import { router } from "./router";
import { createPinia } from "pinia";
import Hello from "./pages/globel/Hello.vue";
// import KKday from "./KKday.vue";

const vm = createApp(App);
// const vm = createApp(KKday);
const pinia = createPinia();
// vm.use(pinia)
// vm.use(router)

//app.component()
vm.component("Hello", Hello);
//app.config
vm.config.globalProperties.x = 99;
declare module "vue" {
  interface ComponentCustomProperties {
    x: number;
  }
}
//app.directive()，可以自定義v-屬性
vm.directive("beauty", (element, { value }) => {
  element.innerText += value;
  element.style.color = "green";
  element.style.backgroundColor = "yellow";
});

vm.mount("#app");

//app.unmount()
setTimeout(() => {
  vm.unmount();
}, 2000);
