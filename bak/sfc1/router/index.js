const routes = [
    { path: '/', component: loadComponent("./views/home/index.vue") },
    { path: '/demo', component: loadComponent("./views/demo/index.vue") },
    { path: '/form', component: loadComponent("./views/form/index.vue") },
]
const boxRouter = new VueRouter({
    routes: routes
})