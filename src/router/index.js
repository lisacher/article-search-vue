import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "search",
    component: () => import("../views/SearchPage.vue"),
  },
  {
    path: "/search",
    name: "search-page",
    component: () => import("../views/SearchPage.vue"),
  },
  {
    path: "/poll",
    name: "poll-list",
    component: () => import("../views/PollListing.vue"),
  },
  {
    path: "/chart",
    name: "chart",
    component: () => import("../components/Chart.vue"),
  },
  {
    path: "/poll-page",
    name: "poll-page",
    component: () => import("../views/PollPage.vue"),
  },
  {
    path: "*",
    name: "not-found",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
