import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/Main.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("@/views/NewsPage.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/Auth.vue"),
  },
  {
    path: "/newsPage/:id",
    name: "newsPage",
    component: () => import("@/views/News.vue"),
    props: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
