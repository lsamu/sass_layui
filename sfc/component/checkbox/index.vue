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

                jquery("input:checkbox[name='" + name + "']").each(function (i, b, c) {
                    for (let j = 0; j < (attrs.value || []).length; j++) {
                        const ele = attrs.value[j];
                        if (b.value == ele.label) {
                            b.checked = true
                        }
                    }
                })

                form.render();

                form.on('checkbox(' + filter + ')', function (data) {

                    var result = [];
                    var result = new Array();
                    jquery("input:checkbox[name='" + name + "']:checked").each(function (i) {
                        result[i] = jquery(this).val();
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