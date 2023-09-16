<template>
    <box-form>
        {{ formOption.form }}
        <box-form-item label="标题" required>
            <box-input v-model="formOption.form.title" lay-verify="required"></box-input>
        </box-form-item>
        <box-form-item label="说明">
            <box-textarea v-model="formOption.form.content"></box-textarea>
        </box-form-item>
        <box-form-item label="单选">
            <box-radio v-model="formOption.form.radio" :data="[{label:'男',value:1},{label:'女',value:2}]"></box-radio>
        </box-form-item>
        <box-form-item label="多选">
            <box-checkbox v-model="formOption.form.checkbox" :data="[{label:'北京',value:1},{label:'上海',value:2},{label:'广州',value:3}]"></box-checkbox>
        </box-form-item>
        <box-form-item label="下拉">
            <box-select v-model="formOption.form.select" :data="[{label:'选项1',value:1}]"></box-select>
        </box-form-item>
        <box-form-item label="切换">
            <box-switch v-model="formOption.form.switch"></box-switch>
        </box-form-item>
        <box-form-item label="上传">
            <box-upload v-model="formOption.form.upload"></box-upload>
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