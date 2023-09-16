<template>
    <div>
        <table class="layui-hide" :id="id"></table>
    </div>
</template>
<script>
import { onMounted, getCurrentInstance, defineProps, watchEffect, computed, watch } from "vue"
export default {
    setup: function (props, context) {
        const that = getCurrentInstance().proxy;

        const attrs = context.attrs;
        const emits = context.emit;

        const uuidv1 = uuid().replace(/-/g, '');

        const id = "id" + uuidv1;

        let table = null;

        const flushTable = () => {
            layui.use('table', function () {
                table = layui.table;
                var inst = table.render({
                    elem: '#' + id,
                    cols: [
                        [{ type: 'checkbox', fixed: 'left' }, ...attrs.columns]
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
            });
        }

        onMounted(() => {
            flushTable();
        })

        watch(() => attrs.data, () => {
            flushTable();
        })

        watch(() => attrs.columns, () => {
            flushTable();
        })

        // 选择数据
        const checkStatus = ()=>{
            return table.checkStatus(id)
        }

        // 所有数据
        const getData = ()=>{
            return table.getData(id)
        }

        return {
            id,
            checkStatus,
            getData
        }
    }
}
</script>