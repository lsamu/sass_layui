<template>
    <div>
        dsdf {{ title }}
        <aa></aa>
        {{ content }}

        {{ bb }}

        <button @click="handleClick">点击</button>
        <router-link to="/">首页</router-link>
        <router-link to="/form">Form</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
import aa from "./aa.vue"
import { ref } from "vue"

import BoxButton from "./component/button/index.vue"

const { content } = { content: "1231231312" }



export default {
    components: {
        "aa": aa
    },
    setup() {
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