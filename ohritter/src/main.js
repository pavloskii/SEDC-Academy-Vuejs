import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store.js";
import "./index.css";

//Dokolku ima token vo storage mora da proverime dali e istecen.
//Ako e istecen samo go brisime od localstorage za da moze posle 
//da raboti logikata vo routerGuard-ot vo beforeEnter na rutite.

const token = localStorage.getItem("token");
if (token !== null) {
  const expiresIn = localStorage.getItem("expiresIn");
  const now = new Date().getTime();

  if (Number(expiresIn) < now) {
    localStorage.removeItem("token");
  }
}

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
