httpVueLoader.langProcessor.less = function (scssText) {
    return new Promise(function (resolve, reject) {
        less.render(scssText).then((aa) => {
            resolve(aa.css)
        }, (bb) => {
            reject(bb)
        }).catch((cc) => {
            reject(cc)
        })
    })
}

Vue.component("box-button", httpVueLoader("./component/button/index.vue"))
Vue.component("box-input", httpVueLoader("./component/input/index.vue"))
Vue.component("box-layout", httpVueLoader("./component/layout/index.vue"))
Vue.component("box-row", httpVueLoader("./component/row/index.vue"))
Vue.component("box-col", httpVueLoader("./component/col/index.vue"))
Vue.component("box-form", httpVueLoader("./component/form/index.vue"))
Vue.component("box-form-item", httpVueLoader("./component/form-item/index.vue"))
Vue.component("box-select", httpVueLoader("./component/select/index.vue"))
Vue.component("box-radio", httpVueLoader("./component/radio/index.vue"))
Vue.component("box-checkbox", httpVueLoader("./component/checkbox/index.vue"))
Vue.component("box-switch", httpVueLoader("./component/switch/index.vue"))
Vue.component("box-table", httpVueLoader("./component/table/index.vue"))
Vue.component("box-tabs", httpVueLoader("./component/tabs/index.vue"))
Vue.component("box-progress", httpVueLoader("./component/progress/index.vue"))
Vue.component("box-date-picker", httpVueLoader("./component/date-picker/index.vue"))
Vue.component("box-pagination", httpVueLoader("./component/pagination/index.vue"))