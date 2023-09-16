<template>
    <div class="layui-form-item">
        <label class="layui-form-label" :class="{ 'required': attrs.required != null }">{{ props.label || "" }}</label>
        <div class="layui-input-block">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: ["label"],
    setup: function (props, context) {

        const attrs = context.attrs;
        const emits = context.emits;
        return { props: props, attrs, emits }
    }
}
</script>
<style>
/* .layui-form-label.required:after {
    content: ' *';
    color: red;
} */
</style>