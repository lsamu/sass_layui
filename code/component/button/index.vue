<template>
    <button type="button" class="layui-btn" v-bind="context.attrs" v-on="context.listeners" :lay-filter="filter">
        <slot>按钮</slot>
    </button>
</template>
<script>

import { reactive, toRaw, ref, onMounted, getCurrentInstance } from 'vue'

export default {
    setup: function (props, context) {

        const that = getCurrentInstance().proxy;
        const attrs = context.attrs;
        const emits = context.emit;
        const listeners = context.listeners;

        const uuidv1 = uuid().replace(/-/g, '');
        const filter = `filter-${uuidv1}`;
        const name = `name-${uuidv1}`


        onMounted(() => {

            if (attrs["lay-submit"] != null) {
                layui.use(['form'], function () {
                    var form = layui.form;
                    form.on('submit(' + filter + ')', function (data) {
                        emits("onSubmit", data.field)
                    })
                })
            }

        })

        return {
            props: props,
            context: context,
            filter
        }
    }
}
</script>