<template>
    <div id="ID-tree-demo-showLine"></div>
</template>
<script>
import { onMounted, getCurrentInstance, defineProps, ref, nextTick } from "vue"

export default {
    setup: function (props, context) {

        const that = getCurrentInstance().proxy;
        const attrs = context.attrs;
        const emits = context.emit;

        const uuidv1 = uuid().replace(/-/g, '');
        const filter = `filter-${uuidv1}`;
        const name = `name-${uuidv1}`

        onMounted(() => {

            layui.use(function () {
                var tree = layui.tree;
                // 模拟数据
                var data = [{ title: '江西', id: 1, children: [{ title: '南昌', id: 1000, children: [{ title: '青山湖区', id: 10001 }, { title: '高新区', id: 10002 }] }, { title: '九江', id: 1001 }, { title: '赣州', id: 1002 }] }, { title: '广西', id: 2, children: [{ title: '南宁', id: 2000 }, { title: '桂林', id: 2001 }] }, { title: '陕西', id: 3, children: [{ title: '西安', id: 3000 }, { title: '延安', id: 3001 }] }, { title: '山西', id: 3, children: [{ title: '太原', id: 4000 }, { title: '长治', id: 4001 }] }];
                // 渲染
                tree.render({
                    elem: '#ID-tree-demo-showLine',
                    data: data,
                    showLine: false,  // 是否开启连接线
                    click: function(obj){
                        console.log(obj);
                    }
                });
            });
        })

        return {
            props: props,
            context: context,
            attrs,
            filter,
            name,
        }
    }
}
</script>