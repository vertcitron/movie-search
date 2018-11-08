import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
