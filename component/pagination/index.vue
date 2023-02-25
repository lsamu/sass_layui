<template>
    <div id="testPage">1231</div>
</template>
<script>
const {onMounted} = Vue
module.exports = {
    setup() {
        onMounted(() => {
            layui.use('laypage', function () {
                var laypage = layui.laypage;
                laypage.render({
                    elem: 'testPage' //注意，这里的 test1 是 ID，不用加 # 号
                    , count: 50 //数据总数，从服务端得到
                });
            });
        })
        return {}
    }
}
</script>