import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddUserView from '../views/AddUserView.vue'
import EditUserView from '../views/EditUserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: AddUserView
    },

    {
      path: '/edituser/:id',
      name: 'edituser',
      component: EditUserView
    }
  ]
})

export default router
