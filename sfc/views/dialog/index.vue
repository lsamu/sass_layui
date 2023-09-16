<template>
    <div>

        <button @click="handleDialog">弹窗</button>

        <box-dialog title="批量上传" v-bind="dialogOption" v-model="dialogOption.visible">
            我是弹窗内容
            <button @click="handleDialogClose">取消</button>
        </box-dialog>
    </div>
</template>
<script>
import { ref, reactive } from "vue"

const { content } = { content: "1231231312" }

export default {
    components: {},
    setup(props, context) {

        const bb = ref(0)

        const handleClick = () => {
            bb.value++
        }


        const dialogOption = reactive({
            visible: false,
            btns: [
                {
                    text: "确定",
                    onClick: () => {
                        alert("确定");
                        dialogOption.visible = false;
                        return false;
                    }
                },
                {
                    text: "取消",
                    onClick: () => {
                        alert("取消");
                        dialogOption.visible = false;
                        return false;
                    }
                }
            ]
        })

        const handleDialog = () => {
            dialogOption.visible = true;

        }

        const handleDialogClose = () => {
            dialogOption.visible = false;
        }

        return {
            title: "title123",
            content,
            bb,
            handleClick,
            dialogOption,
            handleDialog,
            handleDialogClose
        }
    }
}
</script>
<style>
.cc {
    font-size: 12px
}
</style>