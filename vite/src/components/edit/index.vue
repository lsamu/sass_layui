<template>
   <textarea ref="refEdit" style="display: none;"></textarea>
</template>
<script lang="ts" setup>
const refEdit = ref()
onMounted(() => {
    layui.use('layedit', function () {
        var layedit = layui.layedit;
        layedit.build(refEdit.value); //建立编辑器
    });
})
</script>