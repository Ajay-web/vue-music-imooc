import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

let name = "ajay"
let name2 = "web"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
