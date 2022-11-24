<template>
  <div class="login-box">
    <el-form ref="formRef" label-position="left" label-width="80px" :model="userInfo" :rules="rules" style="max-width: 460px">
      <el-form-item label="用户名:" prop="username">
        <el-input v-model="userInfo.username" class="input-item">
          <template #prefix>
            <el-icon class="el-input__icon">
              <iphone />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="userInfo.password" class="input-item">
          <template #prefix>
            <el-icon class="el-input__icon">
              <key />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="rePwd">
        <el-input v-model="userInfo.rePwd" class="input-item">
          <template #prefix>
            <el-icon class="el-input__icon">
              <key />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="记住密码" prop="resource">
        <el-switch v-model="userInfo.isChecked" />
      </el-form-item>
      <div class="goLogin"><el-button type="primary" style="width: 50%" @click="goLogin">登录</el-button></div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { ElForm, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useUserInfoStore } from '@/store/modules/userInfo-store'
import { saveLocalData, getLocalData, removeLocalData } from '@/utils/local'
import infoApi from '@/services/info'

const { getLogin, getUserInfoById, getUserMenuByRoleId } = infoApi
const formRef = ref<InstanceType<typeof ElForm>>()
const router = useRouter()
const userInfoStore = useUserInfoStore()
//拿到本地存储的数据判断用户使用记住密码
const info = getLocalData('info')
const userInfo = reactive({
  username: info?.username || '',
  password: info?.password || '',
  isChecked: info?.isChecked || false,
  rePwd: info?.rePwd || ''
})

const goLogin = () => {
  if (userInfo.password !== userInfo.rePwd) {
    ElMessage.error('两次密码输入不一致')
    return
  }
  formRef.value?.validate(async (valid: boolean) => {
    if (!!userInfo.isChecked) {
      saveLocalData('info', { ...userInfo })
    } else {
      removeLocalData('info')
    }
    if (valid) {
      const res = await getLogin({
        name: userInfo.username,
        password: userInfo.password
      })
      if ((res as any).code === 0) {
        ElMessage.success('用户登录成功')
        //存token和id
        saveLocalData('token', res.data.token)
        saveLocalData('id', res.data.id)
        const id = res.data.id as number
        //拿用户信息
        const info = await getUserInfoById(id)
        saveLocalData('userInfo', info.data)
        //拿权限信息
        const permissions = await getUserMenuByRoleId(id)
        userInfoStore.setMenu(permissions.data)
        saveLocalData('roleList', permissions.data)
        router.push('/main/analysis/overview')
      }
    }
  })
}

const rules = reactive<FormRules>({
  username: [{ required: true, message: '用户名为必填项', trigger: 'blur' }],
  password: [{ required: true, message: '密码为必填项', trigger: 'blur' }],
  rePwd: [{ required: true, message: '确认密码为必填项', trigger: 'blur' }]
})
</script>

<style lang="scss" scoped>
.goLogin {
  text-align: center;
}
.input-item {
  height: 45px;
}
</style>
