<template>
    <!-- <input type="text"  class="layui-input"> -->
    <input :id="name" :name="name" v-bind="attrs" class="layui-input">
</template>
<script>
import { onMounted, getCurrentInstance, defineProps, ref } from "vue"

export default {
    setup: function (props, context) {
        const that = getCurrentInstance();
        const attrs = context.attrs;
        const emits = context.emit;

        const uuidv1 = uuid().replace(/-/g, '');
        const filter = `filter-${uuidv1}`;
        const name = `name-${uuidv1}`

        onMounted(() => {
            layui.use(['form', 'jquery'], function () {
                var form = layui.form;
                layui.jquery("#" + name).on("input", function (e) {
                    emits("input", e.delegateTarget.value)
                })
            });
        })

        return {
            props: props,
            context: context,
            attrs,
            filter,
            name
        }
    }
}
</script>