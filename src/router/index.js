import Vue from 'vue'
import Router from 'vue-router'
import configRouters from "./module";
import login from '@/views/user/login'

console.log(configRouters)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    ...configRouters
  ]
})
