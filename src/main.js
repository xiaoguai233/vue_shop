import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios';

axios.defaults.baseURL = 'http://106.12.11.162:8888/api/private/v1'
//这样每个vue的组件就可以通过this.$http访问到axios
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
