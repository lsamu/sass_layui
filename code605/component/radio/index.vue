<template>
    <div>
        <input type="radio" :name="name" :value="item.value" :title="item.label" v-for="item, index in attrs.data || []"
            :key="index" :checked="item.value == attrs.value" :lay-filter="filter">
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
        const filter = "name" + uuidv1

        onMounted(function () {

            layui.use(['form'], function () {
                var form = layui.form;
                form.render();
                form.on('radio(' + filter + ')', function (data) {
                    emits("input",data.value)
                });
            });
            
        })

        return {
            id,
            that,
            attrs,
            name,
            filter
        }
    }
}
</script>