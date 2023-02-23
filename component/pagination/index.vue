<template>
    <div id="testPage"></div>
</template>
<script>
layui.use('laypage', function () {
    var laypage = layui.laypage;
    laypage.render({
        elem: 'testPage' //注意，这里的 test1 是 ID，不用加 # 号
        , count: 50 //数据总数，从服务端得到
    });
});
module.exports = {
    setup() {
        return {}
    }
}
</script>