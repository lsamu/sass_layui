<template>
    <button type="button" class="layui-btn" ref="refUpload">
        <i class="layui-icon">&#xe67c;</i>上传图片
    </button>
</template>
<script lang="ts" setup>
const refUpload = ref()
onMounted(() => {
    layui.use('upload', function () {
        var upload = layui.upload;

        //执行实例
        var uploadInst = upload.render({
            elem: refUpload.value //绑定元素
            , url: '/upload/' //上传接口
            , done: function (res) {
                //上传完毕回调
            }
            , error: function () {
                //请求异常回调
            }
        });
    });
})
</script>