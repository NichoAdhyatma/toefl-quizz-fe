import Home from "@/pages/home/Home.vue";
import Quizz from "@/pages/quizz/Quizz.vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: Home },
  { path: "/quizz", name: "quizz", component: Quizz },
  {
    path: "/quizz-result",
    name: "quizz-result",
    component: () => import("@/pages/result-quizz/ResultQuizz.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
