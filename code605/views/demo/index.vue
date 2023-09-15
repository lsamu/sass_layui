<template>
    <div>
        我是demo内容
    </div>
</template>
<script>
import { onMounted, ref, getCurrentInstance, reactive, h } from "vue"

export default {
    components: {},
    setup(props, context) {

        const { proxy } = getCurrentInstance();

        const layer = proxy.$layer;

        const w = loadComponent("./views/demo/w.vue")

        onMounted(() => {
            layer.open({
                type: "page",
                title: "组件页面",
                content: h(w)
            })

        })

        return {}
    }
}
</script>
<style></style>