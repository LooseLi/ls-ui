import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{ //布局页面
  path: "/",
  redirect: "/layout"
}, { //布局页面
  path: "/layout",
  component: () => import("../views/layout.vue")
}]

const router = new VueRouter({
  routes
})

export default router