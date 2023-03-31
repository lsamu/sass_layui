<template>
    <form class="layui-form" action="">
        <slot></slot>
    </form>
</template>
<script lang="ts" setup>

onMounted(() => {
    layui.use('form', function () {
        var form = layui.form;
        form.render()
    });
})

</script>