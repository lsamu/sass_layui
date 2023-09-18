<template>
    <div id="demo">

    </div>
</template>
<script>
import { reactive, toRaw, ref, onMounted } from 'vue'

export default {
    setup: function () {

        onMounted(() => {
            // layui.use('layedit', function () {
            //     var layedit = layui.layedit;
            //     layedit.build('demo'); //建立编辑器
            // });
        })

        return {

        }
    }
}
</script>