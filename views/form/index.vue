<template>
    <div ref="refDev">
        <div class="hello">Hello {{ who }} {{ aa }}
        
            <div class="title">我是颜色</div>
        </div>
        {{ pp }} {{ pp.num }}
        <box-button @click="handleCount">点击</box-button>

        <vv-index :option="{ title: 'title111' }"></vv-index>

        <box-button>确定</box-button>
        <box-input></box-input>

        <box-layout>
            <box-row>
                <box-col :span="9">
                    sdfsdfds
                </box-col>
                <box-col :span="3">
                    sdfsdfds
                </box-col>
            </box-row>
        </box-layout>

        <box-form>
            <box-form-item label="标题">
                <box-input></box-input>
            </box-form-item>
            <box-form-item label="内容">
                <box-input></box-input>
            </box-form-item>
            <box-form-item label="下拉">
                <box-select></box-select>
            </box-form-item>
            <box-form-item label="单选">
                <box-radio></box-radio>
            </box-form-item>
            <box-form-item label="复选">
                <box-checkbox></box-checkbox>
            </box-form-item>
            <box-form-item label="开关">
                <box-switch></box-switch>
            </box-form-item>
            <box-form-item>
                <box-button></box-button>
            </box-form-item>
        </box-form>
        <box-table>
            <box-table-column label="标题" prop="title"></box-table-column>
            <box-table-column label="内容" prop="内容"></box-table-column>
        </box-table>
        <box-tabs>

        </box-tabs>
        <box-progress></box-progress>
        <box-date-picker></box-date-picker>
        <box-pagination></box-pagination>
    </div>
</template>
<script>
const { ref, reactive, onMounted } = Vue

module.exports = {
    components: {
        'vv-index': 'url:../../component/index.vue'
    },
    setup() {
        const pp = reactive({
            title: "asdfadf",
            num: 0
        })
        const aa = "aatest";
        const refDev = ref();

        onMounted(() => {
            //console.log(refDev.value);
        })

        return {
            who: "whoaaaa",
            aa,
            pp,
            handleCount: () => {
                pp.num++
            },
            refDev
        }
    }
}
</script>

<style lang="less">
.hello {
    background-color: #ffe;

    .title{
        color:red
    }
}
</style>