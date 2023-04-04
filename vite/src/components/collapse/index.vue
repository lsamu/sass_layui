<template>
    <div class="layui-collapse" lay-accordion>
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
onMounted(() => {
    //注意：折叠面板 依赖 element 模块，否则无法进行功能性操作
    layui.use('element', function () {
        var element = layui.element;
    });
})
</script>