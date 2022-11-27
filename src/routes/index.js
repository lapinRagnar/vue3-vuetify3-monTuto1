
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'pages',
    component: () => import('@/views/layouts/DefaultLayout.vue'),
    redirect: to => {
      return 'home'
    },
    children : [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/pages/Home.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/pages/About.vue')
      },

    ]
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/layouts/AuthLayout.vue'),
    children: [
      {
        path: "",
        component: () => import('@/views/pages/auth/Login.vue'),
        name: 'login',
        meta: {
          title: 'Login'
        },
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/layouts/AdminLayout.vue'),
    children: [
      {
        path: "",
        component: () => import('@/views/pages/auth/Login.vue'),
        name: 'administration',
        meta: {
          title: 'Admin'
        },
      }
    ]
  },
  {
    path: '/portfolio',
    name: 'portfo',
    component: () => import('@/views/layouts/PortfolioLayout.vue'),
    children: [
      {
        path: "homePortfolio",
        component: () => import('@/views/pages/portfolio/HomePortfolio.vue'),
        name: 'portfolio',
        meta: {
          title: 'Portfolio'
        },
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/pages/NotFound.vue') },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
