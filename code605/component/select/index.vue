<template>
    <div>
        <select :lay-filter="filter" :name="name" v-bind="that.$attrs" v-on="that.$listeners">
            <option value=""></option>
            <option :value="item.value" v-for="item, index in attrs.data || []" :key="index">{{ item.label }}</option>
        </select>
    </div>
</template>
<script>
import { onMounted, getCurrentInstance, defineProps,watch,nextTick } from "vue"

export default {
    setup: function (props, context) {
        const that = getCurrentInstance().proxy;

        const attrs = context.attrs;
        const emits = context.emit;
        const uuidv1 = uuid().replace(/-/g, '');
        const filter = `filter-${uuidv1}`;
        const name = `name-${uuidv1}`

        onMounted(() => {
            flushData();
        })

        const flushData = ()=>{
            layui.use('form', function () {
                var form = layui.form;
                form.render("select");

                form.on(`select(${filter})`, function (data) {
                    emits("input", data.value)
                })
            }); 
        }

        watch(()=>attrs.data,(n,o)=>{
            nextTick(()=>{
                flushData();
            })
        })

        return {
            filter,
            name,
            that,
            attrs
        }
    }
}
</script>