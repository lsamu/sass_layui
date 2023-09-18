<template>
    <div>
        dsdf 
        {{ content }}

        {{ bb }}

        <button @click="handleClick">点击</button>
        <router-link to="/">首页</router-link>
        <router-link to="/form">Form</router-link>
    </div>
</template>
<script>
import { ref } from "vue"

const { content } = { content: "1231231312" }

export default {
    components: {},
    setup(props,context) {
        
        const bb = ref(0)

        const handleClick = ()=>{
            bb.value++
        }

        return {
            title: "title123",
            content,
            bb,
            handleClick
        }
    }
}
</script>
<style>
    .cc{
        font-size:12px
    }
</style>