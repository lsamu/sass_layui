<template>
    <div>
        <input type="checkbox" :name="name" lay-skin="switch" :lay-filter="filter" value="1">
    </div>
</template>
<script>
import { onMounted, getCurrentInstance, defineProps } from "vue"

export default {
    setup: function (props, context) {
        const that = getCurrentInstance().proxy;

        const attrs = context.attrs;
        const emits = context.emit;

        const uuidv1 = uuid().replace(/-/g, '');
        const id = "id" + uuidv1
        const name = "name" + uuidv1
        const filter = "filter" + uuidv1

        onMounted(function () {

            layui.use(['form'], function () {
                var form = layui.form;
                form.render();
                form.on('switch(' + filter + ')', function (data) {
                    let aa = attrs.activeValue || true
                    if (!data.elem.checked) {
                        aa = attrs.inactiveValue || false
                    }
                    emits("input", aa)
                });
            });

        })

        return {
            id,
            that,
            attrs,
            name,
            filter,
            activeValue: attrs.activeValue || true,
            inactiveValue: attrs.inactiveValue || false
        }
    }
}
</script>