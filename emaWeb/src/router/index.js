import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/iviews/login/login.vue'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
export const constantRouterMap = [
  {path: '/login', name: 'login', component: _import('login/login'), hidden: false},
]
export default new Router({

  routes: constantRouterMap
})

