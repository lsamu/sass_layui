<template>
    <div class="title">我是红色</div>
    <div>
        123131313 heelo {{ title }}

        {{ thatOption.title }}
        {{ thatOption.content }}
    </div>
</template>
<script setup>

import { ref, reactive } from "vue"

const title = ref("i am title 1111");


const thatOption = reactive({
    title: "标题",
    content: "内容"
})


</script>

<style>
.title {
    color: red;
}
</style>