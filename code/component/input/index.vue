<template>
    <!-- <input type="text"  class="layui-input"> -->
    <input type="text" v-bind="context.attrs" v-on="context.listeners" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
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