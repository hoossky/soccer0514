import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import {store} from './store'
import vuex from 'vuex'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios //http 안에 있는 request 대신 axios를 넣는다 (오버라이딩)
Vue.use(vuex)

new Vue({
  vuetify,
  router,
  vuex,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
