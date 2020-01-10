import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import store from './store'

import 'chart.js'
import 'hchs-vue-charts'

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.use(window.VueCharts);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
