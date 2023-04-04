<template>
    <div>
        <input type="radio" name="sex" value="男" title="男" lay-skin="switch">
        <input type="radio" name="sex" value="女" title="女" checked lay-skin="switch">
    </div>
</template>
<script lang="ts" setup>

onMounted(() => {
    layui.use('form', function () {
        var form = layui.form;
    });
})

</script>