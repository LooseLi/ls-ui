import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LsUI from '../packages'
import './assets/icons/iconfont.css' //引入字体图标
// 引入全局style样式
import './style/global.less'

Vue.config.productionTip = false
Vue.use(LsUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')