<template>
    <input type="text" class="layui-input" :id="id" v-bind="that.$attrs" v-on="that.$listeners">
</template>
<script>
import { onMounted, ref, getCurrentInstance, reactive } from "vue"

export default {
    setup: function (props, context) {

        const that = getCurrentInstance().proxy;

        const attrs = context.attrs;
        const emits = context.emit;

        const uuidv1 = uuid().replace(/-/g, '');
        const id = "id" + uuidv1

        onMounted(function () {

            layui.use('laydate', function () {

                var laydate = layui.laydate;

                laydate.render({
                    elem: '#' + id, //指定元素
                    position: 'fixed',
                    done: function (value, date, startDate) {
                        emits("input", value)
                    }
                });

            });

        })

        return {
            id,
            that,
            attrs
        }
    }
}
</script>