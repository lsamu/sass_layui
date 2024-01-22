const { createRouter, createWebHashHistory } = window["VueRouter"];

const constantRoutes = [
  {
    path: "/",
    component: loadAsyncComponent("./views/demo/index.vue"),
  }
]

const boxRouter = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

