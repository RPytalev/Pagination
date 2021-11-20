import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SortedTablePlugin from 'vue-sorted-table'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  SortedTablePlugin,
  render: h => h(App)
}).$mount('#app')
