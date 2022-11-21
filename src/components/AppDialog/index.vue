<template>
  <el-dialog v-model="showDialog" draggable destroy-on-close :close-on-click-modal="false" center width="700px">
    <el-form :model="obj" :rules="rules" ref="formRef" :label-position="labelPosition" status-icon :disabled="Itype === 'view'">
      <el-row :gutter="30">
        <template v-for="item in formItem">
          <el-col :span="item.col ? item.col : 6">
            <el-form-item :label="item.label" :prop="item.field" v-if="item.type !== 'custom'" :size="item.size" :label-width="labelWidth">
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
    <slot name="content"></slot>
    <template #footer>
      <slot name="operate">
        <el-button type="primary" @click="handleEnsure">确定</el-button>
        <el-button type="info" @click="showDialog = false">取消</el-button>
      </slot>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const formRef = ref<FormInstance>()
const Itype = ref('view')
const props = withDefaults(
  defineProps<{
    formItem?: any
    labelWidth?: string | number
    labelPosition?: string
    rules?: FormRules
  }>(),
  {
    labelWidth: 100,
    labelPosition: 'right'
  }
)
const obj: any = ref({})
const object: any = {}
//遍历字段绑定字段
const initField = () => {
  for (const item of props.formItem) {
    const type = item.field
    object[type] = item.type == 'checkbox' ? [] : ''
    obj.value = object
  }
}
initField()
//验证必填字段是否已经填写
const verifyField = async (fn?: any) => {
  const res = await formRef.value?.validate()
  return res
}
const showDialog = ref(false)
const openDialog = (type: string = 'edit', data?: any) => {
  Itype.value = type
  if (type === 'create') {
    initField()
  }
  if (!!data) {
    obj.value = { ...data }
  }
  showDialog.value = true
}

const handleEnsure = () => {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      showDialog.value = false
    }
  })
}
defineExpose({
  obj,
  verifyField,
  openDialog
})
</script>

<style scoped lang="scss">
.my-form {
  padding: 20px;
  padding-top: 40px;
}
</style>
