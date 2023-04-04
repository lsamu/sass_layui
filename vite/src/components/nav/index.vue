<template>
    <ul class="layui-nav">
        <li class="layui-nav-item layui-this"><a href="">选中</a></li>
        <li class="layui-nav-item">
            <a href="javascript:;">常规</a>
        </li>
        <li class="layui-nav-item"><a href="">导航</a></li>
        <li class="layui-nav-item">
            <a href="javascript:;">子级</a>
            <dl class="layui-nav-child">
                <dd><a href="">菜单1</a></dd>
                <dd><a href="">菜单2</a></dd>
                <dd><a href="">菜单3</a></dd>
            </dl>
        </li>
        <li class="layui-nav-item">
            <a href="javascript:;">选项</a>
            <dl class="layui-nav-child">
                <dd><a href="">选项1</a></dd>
                <dd class="layui-this"><a href="">选项2</a></dd>
                <dd><a href="">选项3</a></dd>
            </dl>
        </li>
        <li class="layui-nav-item"><a href="">演示</a></li>
    </ul>
</template>
<script lang="ts" setup>
// onMounted(() => {
//     layui.use('element', function(){
//         var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
//     });
// }),
onMounted(()=>{
    layui.use('element', function(){
        var element = layui.element; 
    })
})
</script>