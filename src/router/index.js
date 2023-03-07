// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: HomeView
  },
  {
    path: '/taiji_quan',
    name: 'taiji_quan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // {
  //   path: '/association_ymtt',
  //   name: 'asso_ymtt',
  //   compenent: () => import('../views/AssoYMTT.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
