<template>
    <div>
        index {{ aa }}
    </div>
</template>
<script>

module.exports = {
    props: ["option", "data", "value"],
    setup(props,context) {
        console.log(props)
        console.log(context)
        return {
            aa: "aaa"
        }
    }
}
</script>