<template>
    <div ref="refThis">

    </div>
</template>
<script>
import { onMounted, getCurrentInstance, defineProps, watchEffect, computed, watch, ref } from "vue"

export default {
    setup(props, context) {

        const that = getCurrentInstance().proxy;
        const attrs = context.attrs;
        const emits = context.emit;
        const uuidv1 = uuid().replace(/-/g, '');
        const id = "id" + uuidv1;

        const refThis = ref()

        onMounted(() => {
            initCom()
        })

        const currentData = computed(() => {
            const dd = []
            for (const item of attrs.data || []) {
                dd.push({
                    name: item.label,
                    value: item.value
                })
            }
            return dd
        })

        const initCom = () => {
            var demo1 = xmSelect.render({
                el: refThis.value,
                data: currentData.value,
                initValue: attrs.value,
                showCount: attrs.showCount,
                // theme: {
                //     color: '#aaaaaa',
                // },
                on: function (data) {
                    //arr:  当前多选已选中的数据
                    var arr = data.arr;
                    //change, 此次选择变化的数据,数组
                    var change = data.change;
                    //isAdd, 此次操作是新增还是删除
                    var isAdd = data.isAdd;

                    //可以return一个数组, 代表想选中的数据
                    //return []
                    const dd = [];
                    for (const item of data.arr) {
                        dd.push(item.value)
                    }
                    emits("input", dd)
                },
            })
        }

        return {
            refThis
        }
    }
}
</script>