<template>
    <div class="layui-progress">
        <div class="layui-progress-bar" lay-percent="10%"></div>
    </div>
</template>
<script>



const { onMounted } = Vue
module.exports = {
    setup() {
        onMounted(() => {
            layui.use('element', function () {
                var element = layui.element;
                element.render();
            });
        })
        return {}
    }
}
</script>