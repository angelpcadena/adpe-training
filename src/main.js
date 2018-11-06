import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/bootstrap-reboot.min.css"
import "./assets/css/quicksand.css"
import "./assets/css/montserrat.css"

import "./assets/css/main.scss"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
