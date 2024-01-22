<template>
    <div class="title">我是红色</div>
    <div>
        123131313 heelo {{ title }}

        {{ thatOption.title }}
        {{ thatOption.content }}
    </div>
    <ElButton type="primary" @click="dialogOption.value = true">按钮</ElButton>

    <el-dialog v-model="dialogOption.value" title="我的弹窗标题" :draggable="true">
        我是弹窗
    </el-dialog>

    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
    </el-table>

    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />

</template>
<script setup>

import { ref, reactive } from "vue"

const title = ref("i am title 1111");

const thatOption = reactive({
    title: "标题",
    content: "内容"
})

const dialogOption = reactive({
    value: false,

})

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const handleNodeClick = (data) => {
  console.log(data)
}

const data = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>

<style>
.title {
    color: red;
}
</style>