<template>
    <div class="layui-tab layui-tab-brief">

        <ul class="layui-tab-title">
            <!-- <li class="layui-this">网站设置</li>
            <li>用户管理</li>
            <li>权限分配</li>
            <li>商品管理</li> -->
            <li v-for="item, index in titles" :key="index" :class="{ 'layui-this': attrs.value == item.name }">{{ item.label }}</li>
        </ul>
        <div class="layui-tab-content">
            <!-- <div class="layui-tab-item layui-show">内容1</div>
            <div class="layui-tab-item">内容2</div>
            <div class="layui-tab-item">内容3</div>
            <div class="layui-tab-item">内容4</div>
            <div class="layui-tab-item">内容5</div> -->
            <slot :value="attrs.value"></slot>
        </div>
    </div>
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

        const titles = ref([])

        nextTick(() => {
            for (const item of that.$children) {
                titles.value.push({
                    label: item.$attrs.label || "选项卡",
                    name: item.$attrs.name
                })
            }
        })

        return {
            props: props,
            context: context,
            attrs,
            filter,
            name,
            titles
        }
    }
}
</script>