<template>
    <form class="layui-form" action="">
        <slot></slot>

        <button :id="name" :name="name" type="button" class="layui-btn" lay-submit :lay-filter="filter" style="display: none;"></button>
    </form>
</template>
<script>

import { onMounted, getCurrentInstance, defineProps, ref } from "vue"

export default {
    setup: function (props,context) {

        const that = getCurrentInstance().proxy;
        const attrs = context.attrs;
        const emits = context.emit;
        const listeners = context.listeners;

        const uuidv1 = uuid().replace(/-/g, '');
        const filter = `filter-${uuidv1}`;
        const name = `name-${uuidv1}`

        let form = null;

        Vue.onMounted(function () {
            layui.use('form', function () {
                form = layui.form;
                form.render()

                form.on('submit(' + filter + ')', function (data) {
                    // emits("onSubmit", data.field)
                    _callback(data);
                })

            });
        })


        const verify = (obj)=>{
            form.verify(obj);
        }

        let _callback = null;

        const validate = (callBack) => {
            _callback = callBack;
            layui.jquery("#"+name).click();

            // form.on('submit(' + filter + ')', function (data) {
            //     // emits("onSubmit", data.field)
            //     callBack(data)
            // })

            // const isValid = form.validate('#validate-phone');
            // // 验证通过
            // if (isValid) {
            //     layer.msg('手机号规则验证通过');
            //     // 此处可继续书写「发送验证码」等后续逻辑
            //     // …
            // }
        }

        return {
            validate,
            props: props,
            context: context,
            name,
            filter,
            verify
        }
    }
}
</script>
