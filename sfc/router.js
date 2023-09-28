Vue.use(VueRouter);

const boxRouter = new VueRouter({
    routes: [
        { path: '/', component: loadComponent("./views/home/index.vue") },
        { path: '/demo', component: loadComponent("./views/demo/index.vue") },
        { path: '/form', component: loadComponent("./views/form/index.vue") },
        { path: '/dialog', component: loadComponent("./views/dialog/index.vue") },
        { path: '/tabs', component: loadComponent("./views/tabs/index.vue") },
        { path: '/tree', component: loadComponent("./views/tree/index.vue") },
        { path: '/table', component: loadComponent("./views/table/index.vue") }
    ]
})