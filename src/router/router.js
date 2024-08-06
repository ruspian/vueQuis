// import library router
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quis",
      component: () => import("../views/Quis.vue"),
    },
    {
      path: "/quis/:id",
      name: "quis-detail",
      component: () => import("../views/QuisDetail.vue"),
    },
  ],
});

export default router;
