<template>
    <div class="layui-form-item">
        <label class="layui-form-label">{{ props.label || "" }}</label>
        <div class="layui-input-block">
            <slot></slot>
        </div>
    </div>
</template>
<script>
module.exports = {
    props: ["label"],
    setup: function (props, context) {

        return { props: props }
    }
}
</script>