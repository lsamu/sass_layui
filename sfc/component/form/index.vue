<template>
    <form class="layui-form" action="">
        <slot></slot>
    </form>
</template>
<script>

import { onMounted, getCurrentInstance, defineProps, ref } from "vue"

export default {
    setup: function () {

        const that = getCurrentInstance().proxy;

        Vue.onMounted(function () {
            layui.use('form', function () {
                var form = layui.form;
                form.render()
            });
        })

        const validate = (callBack) => {
            console.log(that.$children);

            callBack(false)

            // const isValid = form.validate('#validate-phone');
            // // 验证通过
            // if (isValid) {
            //     layer.msg('手机号规则验证通过');
            //     // 此处可继续书写「发送验证码」等后续逻辑
            //     // …
            // }
        }

        return {
            validate
        }
    }
}
</script>
