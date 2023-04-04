<template>
    <div ref="refColorPicker">

    </div>
</template>
<script lang="ts" setup>
const refColorPicker = ref();
onMounted(() => {
    layui.use('colorpicker', function () {
        var colorpicker = layui.colorpicker;
        //渲染
        colorpicker.render({
            elem: refColorPicker.value  //绑定元素
        });
    });
})
</script>