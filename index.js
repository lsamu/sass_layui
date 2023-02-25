// 使用httpVueLoader
Vue.use(httpVueLoader);
Vue.use(VueRouter)

new Vue({
    el: '#app',
    router: boxRouter,
    components: {
        // 将组建加入组建库
        'App': httpVueLoader('./App.vue')
    }
})