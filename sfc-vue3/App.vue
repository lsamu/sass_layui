<template>
    <div class="title">我是红色</div>
    <div>
        123131313 heelo {{ title }}

        {{ thatOption.title }}
        {{ thatOption.content }}
    </div>
    <ElButton type="primary" @click="dialogOption.value=true" >按钮</ElButton>

    <el-dialog v-model="dialogOption.value" title="我的弹窗标题" :draggable="true">
        我是弹窗
    </el-dialog>
</template>
<script setup>

import { ref, reactive } from "vue"

const title = ref("i am title 1111");


const thatOption = reactive({
    title: "标题",
    content: "内容"
})

const dialogOption = reactive({
    value: false,

})


</script>

<style>
.title {
    color: red;
}
</style>