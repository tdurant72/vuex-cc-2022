import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Counter from '@/components/Counter.vue'
import Employees from '@/components/Employees.vue'
import UserList from '@/components/UserList.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router