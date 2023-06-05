<template>
    <div :class="'layui-col-md' + getSpan()">
        <slot></slot>
    </div>
</template>
<script>

module.exports = {
    props: ["span"],
    setup: function (props, context) {

        const getSpan = function () {
            return props.span || 12
        }

        return {
            props: props,
            getSpan: getSpan
        }
    }
}
</script>