<template>
    <div id="dialog" ref="refDialog" style="display: none; padding: 10px;">
        <slot></slot>
    </div>
</template>
<script>
import { onMounted, getCurrentInstance, defineProps, ref, reactive, nextTick, watch, watchEffect } from "vue"

export default {
    setup: function (props, context) {

        const that = getCurrentInstance().proxy;
        const attrs = context.attrs;
        const emits = context.emit;

        const layer = that.$layer;
        const refDialog = ref();

        onMounted(() => {
            layui.use(['form', 'jquery'], function () {
                var form = layui.form;
                var $ = layui.jquery;
                loadDialog(attrs.value)
            });
        })

        watch(() => attrs.value, (n, o) => {
            loadDialog(n)
        })

        let dialogIndex = null;

        const loadDialog = (n) => {
            if (n) {
                // 生成按钮时间
                const btn = [];
                const btnsFuns = {};

                for (let index = 0; index < (attrs.btns || []).length; index++) {
                    const item = attrs.btns[index];
                    btn.push(item.text);
                    btnsFuns['btn' + (index + 1)] = item.onClick || null;
                }

                dialogIndex = layer.open({
                    title: attrs.title || "弹窗标题",
                    type: 1,//类型，必填，否则弹窗会出现[object:object]的字，还有一些问题
                    content: layui.jquery(refDialog.value),
                    area: [attrs.width || "50%", attrs.height || "400px"],
                    maxmin: true,
                    btn,
                    ...btnsFuns
                    // btn: ["确定", "取消"],
                    // btn1: function (index, layero, that) {
                    //     emits("input", false)
                    //     return false
                    // },
                    // btn2: function (index, layero, that) {
                    //     return false
                    // },
                });
            } else {
                if (dialogIndex) {
                    layer.close(dialogIndex)
                }
            }
        }

        return {
            that,
            attrs,
            emits,
            refDialog
        }

    }
}

</script>