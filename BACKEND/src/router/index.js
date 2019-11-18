import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Admin from '@/views/Admin'
import Driver from '@/views/Driver'
import Customer from '@/views/Customer'
Vue.use(Router)
let router = new Router({
  routes: [{
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        auth: true
      }
    },
    {
      path: '/driver',
      name: 'driver',
      component: Driver,
      meta: {
        auth: true
      }
    },
    {
      path: '/customer',
      name: 'customer',
      component: Customer,
      meta: {
        auth: true
      }
    },
  ],
})
export default router