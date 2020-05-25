import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue-Router升级导致的Uncaught (in promise)问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

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
  // mode:'hash',
  routes
})

export default router
