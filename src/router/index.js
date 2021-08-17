import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

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
    path: "/poll/:id",
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
  mode: "history",
});

export default router;
