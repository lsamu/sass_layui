<template>
    <form class="layui-form" action="">
        <slot></slot>
    </form>
</template>
<script>

const {onMounted} = Vue

module.exports = {
    setup() {

        onMounted(() => {
            layui.use('form', function () {
                var form = layui.form;
                form.render()
            });
        })

        return {}
    }
}
</script>