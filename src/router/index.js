import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import AR from '@/views/AR.vue'
import Menu from '@/views/Menu.vue'
import OpenStore from '@/views/OpenStore.vue'
import Setting from '@/views/Setting.vue'
import Notice from '@/views/Notice.vue'

Vue.use(VueRouter)

// const eccPath = "/ecc/hisimaru/works/crape";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: "It's me crape"}
  },
  {
    path: '/AR',
    name: 'AR',
    component: AR
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/OpenStore',
    name: 'OpenStore',
    component: OpenStore
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/Notice',
    name: 'Notice',
    component: Notice
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
