const loadModule = window['vue2-sfc-loader'].loadModule;
const options = {
    moduleCache: {
        vue: Vue,
    },
    getFile: function (url) {
        return new Promise(function (resolve, reject) {
            axios.get(url).then(function (ret) {
                return resolve(ret.data);
            })
        });
    },
    addStyle: function (textContent) {
        const style = Object.assign(document.createElement('style'), { textContent });
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
    },
}
const loadComponent = function (url) {
    return Vue.defineComponent(function () {
        const ret = loadModule(url, options)
        return ret
    })
}
const loadAsyncComponent = function (url) {
    return Vue.defineAsyncComponent(function () {
        const ret = loadModule(url, options)
        return ret
    })
}