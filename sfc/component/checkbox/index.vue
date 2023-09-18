<template>
    <div>

        <input type="checkbox" :name="name" :value="item.value" :title="item.label" v-for="item, index in attrs.data || []"
            :key="index" :lay-filter="filter">

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

            layui.use(['form', 'jquery'], function () {
                var form = layui.form;
                var jquery = layui.jquery;

                form.render();

                let aa = [];

                form.on('checkbox(' + filter + ')', function (data) {
                    // if (data.elem.checked) {
                    //     aa.push(data.value)
                    // } else {

                    // }
                    console.log(data)

                    var result = [];
                    jquery("[name='" + name + "']:checkbox").each(function () {
                        result.push(jquery(this).attr("value"));
                    });

                    emits("input", result)
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