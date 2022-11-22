
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/pages/Home.vue'
import Login from '@/views/pages/auth/Login.vue'
import AuthLayout from '@/views/layouts/AuthLayout.vue'
import AdminLayout from '@/views/layouts/AdminLayout.vue'
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import AdminDashboard from '@/views/pages/admin/AdminDashboard.vue'
import About from '@/views/pages/About.vue'

const routes = [
  {
    path: '/',
    name: 'pages',
    component: DefaultLayout,
    redirect: to => {
      return 'home'
    },
    children : [
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'about',
        name: 'about',
        component: About
      },

    ]
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthLayout,
    children: [
      {
        path: "",
        component: Login,
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
    component: AdminLayout,
    children: [
      {
        path: "",
        component: AdminDashboard,
        name: 'administration',
        meta: {
          title: 'Admin'
        },
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
