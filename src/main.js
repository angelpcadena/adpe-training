import Vue from "vue"
import Vuetify from "vuetify"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import "./assets/css/bootstrap-reboot.min.css"
import "./assets/css/quicksand.css"
import "./assets/css/montserrat.css"

//import "vuetify/dist/vuetify.min.css"

require("./assets/stylus/main.styl")

import "./assets/css/main.scss"


Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App),
  methods: {
    goTo(target) {
      let scrollOptions = {
        duration: 500,
        offset: 0,
        easing: "easeInOutCubic"
      }

      this.$vuetify.goTo(target, scrollOptions)
    }
  }
}).$mount("#app")
