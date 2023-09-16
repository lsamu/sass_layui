<template>
    <div :id="id"></div>
</template>
<script>

import { onMounted, getCurrentInstance, defineProps, ref, reactive, nextTick, watchEffect, watch } from "vue"

export default {
    setup: function (props, context) {

        const that = getCurrentInstance().proxy;

        const attrs = context.attrs;
        const emits = context.emit;

        const uuidv1 = uuid().replace(/-/g, '');
        const id = "id" + uuidv1
        const name = "name" + uuidv1
        const filter = "name" + uuidv1

        const flushPage = () => {
            layui.use('laypage', function () {
                var laypage = layui.laypage;
                laypage.render({
                    elem: id, //注意，这里的 test1 是 ID，不用加 # 号
                    count: attrs.count || 0, //数据总数，从服务端得到
                    limit: attrs.limit || 10,//每页个数
                    jump: function (obj, first) {
                        emits("onPage", obj, first)
                    }
                });
            });
        }

        onMounted(() => {
            flushPage();
        })

        // 个数变化更新
        watch(() => attrs.count, () => {
            flushPage();
        })

        // 分页大小变化更新
        watch(() => attrs.limit, () => {
            flushPage();
        })

        return {
            id,
            that,
            attrs
        }
    }
}
</script>