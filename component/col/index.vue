<template>
    <div :class="'layui-col-md' + getSpan()">
        <slot></slot>
    </div>
</template>
<script>

module.exports = {
    props: ["span"],
    setup(props, context) {

        const getSpan = ()=>{
            return props.span || 12
        }

        return {
            props,
            getSpan
        }
    }
}
</script>