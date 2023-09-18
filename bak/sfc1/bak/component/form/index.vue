<template>
    <form class="layui-form" action="">
        <slot></slot>
    </form>
</template>
<script>

export default {
    setup:function() {

        Vue.onMounted(function(){
            layui.use('form', function () {
                var form = layui.form;
                form.render()
            });
        })

        return {}
    }
}
</script>