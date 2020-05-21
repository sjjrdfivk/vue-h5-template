import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../page/Home')
  },
  {
    path: '/DetailPage',
    name: 'DetailPage',
    component: () => import('../page/DetailPage')
  }
]

const router = new VueRouter({
  routes
})

export default router
