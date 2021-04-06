import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{ //布局页面
  path: "/",
  redirect: "/layout"
}, { //布局页面
  path: "/layout",
  component: () => import("../views/layout.vue"),
  redirect: "/button",
  children: [{
    path: "/dialog",
    component: () => import("../views/LsDialog.vue")
  }, {
    path: "/button",
    component: () => import("../views/LsButton.vue")
  }, {
    path: "/form",
    component: () => import("../views/LsForm.vue")
  }, {
    path: "/input",
    component: () => import("../views/LsInput.vue")
  }, {
    path: "/radio",
    component: () => import("../views/LsRadio.vue")
  }, {
    path: "/switch",
    component: () => import("../views/LsSwitch.vue")
  }]
}]

const router = new VueRouter({
  routes
})

export default router