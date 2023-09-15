<template>
    <box-form>
        <box-form-item label="标题" required>
            <box-input v-model="formOption.form.title" lay-verify="required"></box-input>
        </box-form-item>
        <box-form-item label="说明">
            <box-textarea v-model="formOption.form.content"></box-textarea>
        </box-form-item>
        <box-form-item>
            <box-button lay-submit @onSubmit="handleSubmit">提交</box-button>
        </box-form-item>
    </box-form>
</template>
<script>
import { reactive, toRaw, ref, onMounted } from 'vue'

export default {
    components: {},
    setup: function () {

        const formOption = reactive({
            form: {}
        })

        const handleSubmit = async () => {
            console.log(formOption.form)
        }

        onMounted(() => {

        })

        return {
            handleSubmit,
            formOption
        }
    }
}
</script>

<style >
.hello {
    background-color: blue;

}

.title {
    color: red
}
</style>