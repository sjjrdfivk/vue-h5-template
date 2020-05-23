import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Navigation from 'vue-navigation'
// 引入公共样式
import '@/assets/css/index.css'

// 适配
import 'lib-flexible'

// 全局引入muse-ui库
import Loading from 'muse-ui-loading'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.use(Loading, {
  overlayColor: '',
  className: 'Loading'
})

// 导航库（用于页面缓存）
Vue.use(Navigation, { router })

Vue.config.productionTip = false

window.addEventListener('popstate', function (e) { // 监听返回
  router.isBack = true
}, false)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
