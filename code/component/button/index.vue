<template>
    <button type="button" class="layui-btn" v-bind="context.attrs" v-on="context.listeners">
        <slot>按钮</slot>
    </button>
</template>
<script>
module.exports = {
    setup: function (props, context) {
        return {
            props: props,
            context: context
        }
    }
}
</script>