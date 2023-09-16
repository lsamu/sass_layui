<template>
    <input type="text" class="layui-input" id="testDate">
</template>
<script>
module.exports = {
    setup: function () {
        Vue.onMounted(function () {
            layui.use('laydate', function () {
                var laydate = layui.laydate;
                laydate.render({
                    elem: '#testDate' //指定元素
                });
            });
        })
        return {}
    }
}
</script>