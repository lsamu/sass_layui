<template>
    <box-tabs v-model="active">
        <box-tab-pane label="修改密码" name="tab1">
            我是第一个
        </box-tab-pane>
        <box-tab-pane label="用户信息" name="tab2">
            我是第二个
        </box-tab-pane>
        <box-tab-pane label="用户信息33" name="tab3">
            我是第二个333
        </box-tab-pane>
    </box-tabs>
</template>
<script>
import { reactive, toRaw, ref, onMounted } from 'vue'

export default {
    components: {},
    setup: function () {

        const active = ref('tab1')

        return {
            active
        }
    }
}
</script>

<style >

</style>