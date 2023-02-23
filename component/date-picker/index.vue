<template>
    <input type="text" class="layui-input" id="testDate">
</template>
<script>
const {onMounted} = Vue;
module.exports = {
    setup() {
        onMounted(() => {
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