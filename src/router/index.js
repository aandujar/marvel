import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/Main.vue"),
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import("@/views/Characters.vue")
  },
  {
    path: '/characters/:id',
    name: 'Character',
    component: () => import("@/views/Character.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
