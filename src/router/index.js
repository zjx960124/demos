import Vue from 'vue'
import Router from 'vue-router'
import items from '@/router/items'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'index',
      redirect:{
        name:'index'
      }
    },
    {
      path:'/index',
      name:'index',
      component: () => import('@/components/index/index')
    },
    ...items
  ]
})
