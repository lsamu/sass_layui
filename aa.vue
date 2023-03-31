<template>
    <div>
        aaa {{ title }}

        <vv-button></vv-button>
    </div>
</template>
<script>

import BoxButton from "./component/button/index.vue"

export default {
    components: {
        "vv-button": BoxButton
    },
    setup() {
        return {
            title: "title123"
        }
    }
}
</script>