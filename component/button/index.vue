<template>
    <button type="button" class="layui-btn" v-bind="context.attrs" v-on="context.listeners">
        <slot></slot>
    </button>
</template>
<script>
module.exports = {
    setup(props,context) {
        return {
            props,
            context
        }
    }
}
</script>