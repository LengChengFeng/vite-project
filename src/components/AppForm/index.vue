<template>
  <div class="my-form">
    <div class="header" v-if="showTitle">
      <slot name="title">
        <h2>我是标题</h2>
      </slot>
    </div>
    <div class="search">
      <el-form :model="obj" :rules="rules" ref="formRef" :label-position="labelPosition" status-icon :disabled="type === 'view'">
        <el-row :gutter="30">
          <template v-for="item in formItem">
            <el-col :span="item.col ? item.col : 6">
              <el-form-item
                :label="item.label"
                :prop="item.field"
                v-if="item.type !== 'custom'"
                :size="item.size"
                :label-width="labelWidth"
              >
                <template v-if="item.type === 'input'">
                  <el-input
                    :placeholder="item.placeholder"
                    v-model="obj[item.field]"
                    :style="{ width: item.width, height: item.height }"
                    :clearable="item.clearable || true"
                  />
                </template>
                <template v-if="item.type === 'select'">
                  <el-select
                    :placeholder="item.placeholder"
                    v-model="obj[item.field]"
                    :style="{ width: item.width, height: item.height }"
                    :clearable="item.clearable || true"
                  >
                    <template v-for="option in item.data">
                      <el-option :label="option.label" :value="option.label" />
                    </template>
                  </el-select>
                </template>
                <template v-if="item.type === 'date'">
                  <el-date-picker
                    type="date"
                    :placeholder="item.placeholder"
                    style="width: 100%"
                    v-model="obj[item.field]"
                    :style="{ width: item.width, height: item.height }"
                    :clearable="item.clearable || true"
                  />
                </template>
                <template v-if="item.type === 'textarea'">
                  <el-input
                    type="textarea"
                    :placeholder="item.placeholder"
                    v-model="obj[item.field]"
                    :style="{ width: item.width, height: item.height }"
                    :clearable="item.clearable || true"
                  />
                </template>
                <template v-if="item.type === 'checkbox'">
                  <el-checkbox-group
                    v-model="obj[item.field]"
                    :style="{ width: item.width, height: item.height }"
                    :clearable="item.clearable || true"
                  >
                    <template v-for="all in item.data">
                      <el-checkbox :label="all.label" name="type" />
                    </template>
                  </el-checkbox-group>
                </template>
                <template
                  v-if="item.type === 'radio'"
                  :style="{ width: item.width, height: item.height }"
                  :clearable="item.clearable || true"
                >
                  <el-radio-group v-model="obj[item.field]">
                    <template v-for="i in item.data">
                      <el-radio :label="i.label" />
                    </template>
                  </el-radio-group>
                </template>
              </el-form-item>
              <el-form-item>
                <template v-if="item.type === 'custom'">
                  <slot :name="item.slotName" :row="item"></slot>
                </template>
              </el-form-item>
            </el-col>
          </template>
          <slot name="funcs"></slot>
        </el-row>
      </el-form>
    </div>
    <div class="footer" v-if="showBtn">
      <el-button @click="handleSearch" icon="Search" type="primary" plain>搜索</el-button>
      <el-button @click="handleReset" icon="Refresh" type="info" plain>重置</el-button>
      <slot name="btn"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const formRef = ref<FormInstance>()

const props = withDefaults(
  defineProps<{
    showTitle?: boolean
    showBtn?: boolean
    formItem?: any
    labelWidth?: string | number
    labelPosition?: string
    value?: any
    rules?: FormRules
    type?: string
  }>(),
  {
    labelWidth: 100,
    showTitle: false,
    showBtn: true,
    labelPosition: 'right',
    type: 'create'
  }
)

const emit = defineEmits(['handleSearch', 'handleReset'])
const obj: any = ref({})
const object: any = {}
const result = props.value && Object.keys(props.value)
//遍历字段绑定字段
for (const item of props.formItem) {
  const type = item.field
  object[type] = item.type == 'checkbox' ? [] : ''
  obj.value = object
}
//看对方有无传递数据 有的话就是回显
if (!!result) {
  obj.value = { ...obj.value, ...props.value }
}

//搜索
const handleSearch = () => {
  emit('handleSearch', obj.value)
}
//重置
const handleReset = () => {
  formRef.value?.resetFields()
  emit('handleReset', obj.value)
}

//验证必填字段是否已经填写
const verifyField = async (fn?: any) => {
  const res = await formRef.value?.validate()
  return res
}
defineExpose({
  obj,
  verifyField
})
</script>

<style scoped lang="scss">
.my-form {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.footer {
  text-align: right;
  margin: 10px;
}
</style>
