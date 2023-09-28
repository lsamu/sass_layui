<!-- <template>
    <div>
        <table class="layui-hide" id="ID-table-demo-data"></table>
    </div>
</template>
<script>
import { onMounted, getCurrentInstance, defineProps, watchEffect, computed } from "vue"
export default {
    setup: function (props, context) {
        const that = getCurrentInstance().proxy;

        const attrs = context.attrs;
        const emits = context.emit;

        onMounted(() => {
            layui.use('table', function () {
                var table = layui.table;
                // 已知数据渲染
                var inst = table.render({
                    elem: '#ID-table-demo-data',
                    cols: [
                        attrs.columns
                        //     [ //标题栏
                        //     { type: 'checkbox', fixed: 'left' },
                        //     { field: 'id', title: 'ID', width: 80, },
                        //     { field: 'username', title: '用户', width: 120 },
                        //     { field: 'sign', title: '签名', minWidth: 160 },
                        //     { field: 'sex', title: '性别', width: 80 },
                        //     { field: 'city', title: '城市', width: 100 },
                        //     { field: 'experience', title: '积分', width: 80, }
                        // ]
                    ],
                    data: attrs.data,
                    // [{ // 赋值已知数据
                    //     "id": "10001",
                    //     "username": "张三1",
                    //     "sex": "男",
                    //     "city": "浙江杭州",
                    //     "sign": "人生恰似一场修行",
                    //     "experience": "116"
                    // }, {
                    //     "id": "10002",
                    //     "username": "张三2",
                    //     "sex": "男",
                    //     "city": "浙江杭州",
                    //     "sign": "人生恰似一场修行",
                    //     "experience": "12",
                    //     "LAY_CHECKED": true
                    // }, {
                    //     "id": "10003",
                    //     "username": "张三3",
                    //     "sex": "男",
                    //     "city": "浙江杭州",
                    //     "sign": "人生恰似一场修行",
                    //     "experience": "65"
                    // }, {
                    //     "id": "10004",
                    //     "username": "张三4",
                    //     "sex": "男",
                    //     "city": "浙江杭州",
                    //     "sign": "人生恰似一场修行",
                    //     "experience": "777"
                    // }, {
                    //     "id": "10005",
                    //     "username": "张三5",
                    //     "sex": "男",
                    //     "city": "浙江杭州",
                    //     "sign": "人生恰似一场修行",
                    //     "experience": "86"
                    // }, {
                    //     "id": "10006",
                    //     "username": "张三6",
                    //     "sex": "男",
                    //     "city": "浙江杭州",
                    //     "sign": "人生恰似一场修行",
                    //     "experience": "12"
                    // }, {
                    //     "id": "10007",
                    //     "username": "张三7",
                    //     "sex": "男",
                    //     "city": "浙江杭州",
                    //     "sign": "人生恰似一场修行",
                    //     "experience": "16"
                    // }, {
                    //     "id": "10008",
                    //     "username": "张三8",
                    //     "sex": "男",
                    //     "city": "浙江杭州",
                    //     "sign": "人生恰似一场修行",
                    //     "experience": "106"
                    // }],
                    //skin: 'line', // 表格风格
                    //even: true,
                    page: false, // 是否显示分页
                    limits: [10],//[5, 10, 15],
                    limit: 5 // 每页默认显示的数量
                });

                console.log(inst)
            });
        })

        return {

        }
    }
}
</script> -->

<template>
    <div>
        <table class="layui-table">
            <thead>
                <tr>
                    <th v-for="item, index in thatOption.head" :key="index">{{ item.label }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item, index in attrs.data" :key="index">
                    <td v-for="item2, index2 in thatOption.head" :key="index2" :style="{ 'width': item2.width + 'px' }">
                        {{ item[item2.prop] }}
                    </td>
                </tr>
            </tbody>
        </table>
        <template style="display: none;">
            <slot ></slot>
        </template>
       
    </div>
</template>
<script>
import { onMounted, getCurrentInstance, defineProps, computed, reactive } from "vue"

export default {
    setup: function (props, context) {
        const that = getCurrentInstance().proxy;

        const attrs = context.attrs;
        const emits = context.emit;

        const uuidv1 = uuid().replace(/-/g, '');
        const id = "id" + uuidv1
        const name = "name" + uuidv1
        const filter = "name" + uuidv1


        const thatOption = reactive({
            head: []
        })

        onMounted(() => {

            const head = []
            for (const item of that.$children) {
                console.log(item)
                console.log(item.$slots)
                if (item.$options._componentTag == "box-table-column") {
                    head.push(item.$attrs)
                }
            }

            thatOption.head = head

            // layui.use('jquery', function () {
            //     var $ = layui.jquery;
            //     // 全选/取消全选复选框的事件
            //     $("#selectAll").on("click", function () {
            //         $(".rowCheckbox").prop("checked", this.checked);
            //     });

            //     // 行复选框的事件
            //     $(".rowCheckbox").on("click", function () {
            //         var totalRowCount = $(".rowCheckbox").length;
            //         var checkedRowCount = $(".rowCheckbox:checked").length;
            //         $("#selectAll").prop("checked", totalRowCount === checkedRowCount);
            //     });
            // });


        })

        // onMounted(() => {
        //     layui.use(['form', 'element', 'jquery'], function () {
        //         var $ = layui.jquery,
        //             form = layui.form;

        //         //全选
        //         form.on('checkbox(allChoose)', function (data) {
        //             console.log("all")
        //             var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]');
        //             child.each(function (index, item) {
        //                 item.checked = data.elem.checked;
        //             });
        //             form.render('checkbox');
        //         });

        //         //全选和部分选中时候,表头全选按钮的样式变化
        //         form.on('checkbox(itemChoose)', function (data) {
        //             var sib = $(data.elem).parents('table').find('tbody input[type="checkbox"]:checked').length;
        //             var total = $(data.elem).parents('table').find('tbody input[type="checkbox"]').length;
        //             if (sib == total) {
        //                 $(data.elem).parents('table').find('thead input[type="checkbox"]').prop("checked", true);
        //                 form.render();
        //             } else {
        //                 $(data.elem).parents('table').find('thead input[type="checkbox"]').prop("checked",
        //                     false);
        //                 form.render();
        //             }
        //         });
        //     })
        // })

        return {
            that,
            attrs,
            emits,
            thatOption
        }
    }
}
</script>