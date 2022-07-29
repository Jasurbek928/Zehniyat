import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/police',
    name: 'Privacy',
    component: () => import('../components/Privace.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../components/TermsUse.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
