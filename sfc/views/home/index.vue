<template>
    <div>
        dsdf
        {{ content }}

        {{ bb }}

        <button @click="handleClick">点击</button>
        <router-link to="/">首页</router-link>
        <router-link to="/form">Form</router-link>

        <button @click="handleDialog">弹窗</button>

        {{ dialogOption }}

        <box-dialog title="批量上传" v-bind="dialogOption" v-model="dialogOption.visible">
           <box-form ref="refForm">
                <box-form-item label="标题" prop="title" required>
                    <box-input lay-verify="required"></box-input>
                </box-form-item>
           </box-form>
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


        const refForm = ref(null)
        const dialogOption = reactive({
            visible: false,
            btns: [
                {
                    text: "确定",
                    onClick: () => {
                        // alert("确定");
                        refForm.value.validate((valid) => { 

                            dialogOption.visible = false;
                        } )

                    
                        return false;
                    }
                },
                {
                    text: "取消",
                    onClick: () => {
                        // alert("取消");
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
            handleDialogClose,
            refForm
        }
    }
}
</script>
<style>
.cc {
    font-size: 12px
}
</style>