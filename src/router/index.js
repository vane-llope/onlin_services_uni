import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/services/melicode',
    name: 'MeliCode',
    component: () => import('../views/services/MelicodeView.vue')
  },
  {
    path: '/services/MBI',
    name: 'MBI',
    component: () => import('../views/services/MBIView.vue')
  },
  {
    path: '/services/numberShifting',
    name: 'numberShifting',
    component: () => import('../views/services/NumberShiftingView.vue')
  },
  {
    path: '/services/NumToLetter',
    name: 'NumToLetter',
    component: () => import('../views/services/NumToLetterView.vue')
  },
  {
    path: '/services/PasswordGenerator',
    name: 'PasswordGenerator',
    component: () => import('../views/services/PasswordGeneratorView.vue')
  },
  {
    path: '/services/bankcalculation',
    name: 'Percentage',
    component: () => import('../views/services/PercentageView.vue')
  },
  {
    path: '/services/Date',
    name: 'Date',
    component: () => import('../views/services/ShowDateView.vue')
  },
  {
    path: '/services/wordCounter',
    name: 'WordCounter',
    component: () => import('../views/services/wordCounterView.vue')
  },
  {
    path: '/services/BMR',
    name: 'BMR',
    component: () => import('../views/services/BMRView.vue')
  },
  {
    path: '/services/rial',
    name: 'rial',
    component: () => import('../views/services/RialView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
