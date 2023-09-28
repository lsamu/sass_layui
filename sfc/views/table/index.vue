<template>
    <box-table :data="thatOption.data">
        <box-table-column label="ID" prop="id"></box-table-column>
        <box-table-column label="标题" prop="title"></box-table-column>
        <box-table-column label="内容" prop="content"></box-table-column>
        <box-table-column label="模板">
            <template #default="scope">
                <div>
                    {{ scope.row.template }}
                </div>
            </template>
        </box-table-column>
    </box-table>
</template>
<script>
import { reactive, toRaw, ref, onMounted } from 'vue'

export default {
    components: {},
    setup: function () {

        const thatOption = reactive({
            data: [
                {
                    id: 1,
                    title: '标题1',
                    content: '内容1',
                    template: '模板1'
                },
                {
                    id: 2,
                    title: '标题2',
                    content: '内容2',
                    template: '模板2',
                }
            ]
        })

        return {
            thatOption
        }
    }
}
</script>

<style ></style>