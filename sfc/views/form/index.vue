<template>
    <box-form ref="refForm">
        {{ formOption.form }}
        <box-form-item label="标题" required>
            <box-input v-model="formOption.form.title" lay-verify="required"></box-input>
        </box-form-item>
        <box-form-item label="说明">
            <box-textarea v-model="formOption.form.content"></box-textarea>
        </box-form-item>
        <box-form-item label="时间">
            <box-date-picker v-model="formOption.form.datePicker" placeholder="请选择时间"></box-date-picker>
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
            <box-upload v-model="formOption.form.upload" :auto="true"></box-upload>
        </box-form-item>
        <box-form-item label="多选">
            <box-select2 v-model="formOption.form.select2" :data="[{ label: '北京', value: 0 }, { label: '上海', value: 1 }, { label: '广州', value: 2 }, { label: '广州', value: 3 }, { label: '广州', value: 4 }]"></box-select2>
        </box-form-item>
        <box-form-item label="富文本编辑器">
            <box-edit v-model="formOption.form.edit"></box-edit>
        </box-form-item>
        <box-form-item>
            <box-button lay-submit @onSubmit="handleSubmit">提交</box-button>
            <box-button @click="handleSubmit2">提交2</box-button>
        </box-form-item>
    </box-form>
</template>
<script>
import { reactive, toRaw, ref, onMounted } from 'vue'

export default {
    components: {},
    setup: function () {

        const formOption = reactive({
            form: {
                checkbox:[1,2]
            }
        })

        const handleSubmit = async () => {
            console.log(formOption.form)
        }

        const refForm = ref(null);

        const handleSubmit2 = async ()=>{
            refForm.value.validate((data)=>{
                console.log(data)
            })
        }

        onMounted(() => {

        })

        return {
            handleSubmit,
            handleSubmit2,
            formOption,
            refForm
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