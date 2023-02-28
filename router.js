const routes = [
    { path: '/form', component: loadComponent("./views/form/index.vue") },
]
const boxRouter = new VueRouter({
    routes: routes
})