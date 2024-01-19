<template>
    <div>
        demo

        <el-button @click="handleClick">我是按钮</el-button>
    </div>
</template>
<script setup>

import { ElMessage } from "element-plus"

const handleClick = ()=>{
    ElMessage.success("我是按钮")
}

</script>