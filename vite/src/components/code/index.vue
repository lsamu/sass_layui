<template>
    <pre class="layui-code">
        //代码区域
        var a = 'hello layui';
    </pre>
</template>
<script lang="ts" setup>
const refUpload = ref()
onMounted(() => {
    layui.use('code', function(){ //加载code模块
        layui.code(); //引用code方法
    });
})
</script>