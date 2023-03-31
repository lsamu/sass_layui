<template>
    <div class="layui-progress">
        <div class="layui-progress-bar" lay-percent="10%"></div>
    </div>
</template>
<script>

onMounted(function () {
    layui.use('element', function () {
        var element = layui.element;
        element.render();
    });
})
</script>