<template>
    <input type="text" class="layui-input" id="test1">
</template>
<script>
const {onMounted} = Vue;
module.exports = {
    setup() {
        onMounted(() => {
            layui.use('laydate', function () {
                var laydate = layui.laydate;
                laydate.render({
                    elem: '#test1' //指定元素
                });
            });
        })
        return {}
    }
}
</script>