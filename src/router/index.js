import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Platos from '@/views/Platos'
Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/platos',
      name: 'Platos',
      component: Platos
    }
  ]
})
