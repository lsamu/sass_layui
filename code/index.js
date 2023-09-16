// 使用httpVueLoader
Vue.use(httpVueLoader);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router: boxRouter,
    components: {
        'App': httpVueLoader('./App.vue'),
    },
})