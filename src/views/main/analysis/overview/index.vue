<template>
  <div class="my-page">
    <MyForm v-bind="formItemConfig" @handleSearch="handleSearch" @handle-reset="handleReset" />
    <MyTable
      v-bind="tableConfig"
      :tableData="pageData.data"
      @handleView="handleView"
      @handle-edit="handleEdit"
      @handle-add="handleAdd"
      :loading="pageData.loading"
      v-model:page="pageData.pageInfo"
    >
      <template #createDate="scoped"> {{ utcFormat(scoped.row.createAt) }}</template>
      <template #updateDate="scoped"> {{ utcFormat(scoped.row.createAt) }}</template>
    </MyTable>
    <MyDialog v-bind="dialogFormItemConfig" ref="dialogRef"> </MyDialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import MyForm from '@/components/AppForm/index.vue'
import MyTable from '@/components/myTable/index.vue'
import MyDialog from '@/components/AppDialog/index.vue'

import { useSearch } from '@/hooks/useSearch'
import { useDialogHooks } from '@/hooks/useDialog'

import { formItemConfig, tableConfig, dialogFormItemConfig } from './config'
import { getDataList } from '@/services/test'
import { utcFormat } from '@/utils/format'
import Api from '@/services/main/index'
const { getRoleList } = Api

getDataList({ offset: 0, size: 10 }).then((res) => {
  console.log(res)
})
const pageData = reactive({
  data: [],
  searchParams: {},
  loading: true,
  pageInfo: {
    offset: 0,
    size: 10,
    total: 0
  }
})
//获取数据
const getData = (params?: {}) => {
  const page = { offset: pageData.pageInfo.offset, size: pageData.pageInfo.size }
  let obj = { ...page, ...params }
  getRoleList(obj)
    .then((res) => {
      pageData.data = res.data.list
      pageData.pageInfo.total = res.data.totalCount
      pageData.loading = false
    })
    .catch((err) => {
      pageData.loading = false
    })
}
getData()
//重置和查询
const { handleSearch, handleReset } = useSearch(getData)
//查看 编辑  添加
const { dialogRef, handleAdd, handleEdit, handleView } = useDialogHooks()
</script>

<style lang="scss" scoped></style>
