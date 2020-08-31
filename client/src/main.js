import Vue from 'vue'
import App from './App.vue'

import Axios from 'axios';
import store from './store'
import router from './router'
import swal from './vueswal'

Vue.config.productionTip = false;

Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

new Vue({
  swal,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
