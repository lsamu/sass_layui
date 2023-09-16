const routes = [
  { path: '/', redirect: "/form" },
  { path: '/form', component: httpVueLoader("./views/form/index.vue") },
  { path: '/datagrid', component: httpVueLoader("./views/datagrid/index.vue") },
  { path: '/tree', component: httpVueLoader("./views/tree/index.vue") },
]

const boxRouter = new VueRouter({
  routes: routes
})
