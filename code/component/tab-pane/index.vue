<template>
    <div class="layui-tab-item" :class="{'layui-show':attrs.name==active}">
        <slot></slot>
    </div>
</template>
<script>

import { onMounted, getCurrentInstance, defineProps, ref } from "vue"

export default {
    setup: function (props, context) {

        const that = getCurrentInstance().proxy;
        const attrs = context.attrs;
        const emits = context.emit;

        const active = that.$parent.$attrs["value"]

        const uuidv1 = uuid().replace(/-/g, '');
        const filter = `filter-${uuidv1}`;
        const name = `name-${uuidv1}`

        return {
            props: props,
            context: context,
            attrs,
            filter,
            name,
            active
        }
    }
}
</script>