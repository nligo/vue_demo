import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router.js'
import 'es6-promise/auto'
import Vuex from 'vuex'

axios.defaults.baseURL = 'http://fy.cms.com/api' // 'https://prezujuan-api.kaoti100.com/api'
Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  router,
  Vuex,
  render: h => h(App)
})
