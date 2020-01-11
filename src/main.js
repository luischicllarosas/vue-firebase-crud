// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Firebase
import { rtdbPlugin as VueFire } from 'vuefire'
Vue.use(VueFire)

import Notifications from 'vue-notification'
Vue.use(Notifications)


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // VueFire,
  components: { App },
  template: '<App/>'
})

