<template>
  <div class="user-info fc">
    <div class="refresh icon">
      <el-icon @click="handleRefresh"><Refresh /></el-icon>
    </div>
    <div class="full-screen icon">
      <el-icon @click="handleFullScreen"><FullScreen /></el-icon>
    </div>
    <div class="info fc">
      <el-dropdown>
        <span class="el-dropdown-link flex">
          <div class="avatar fc">
            <img
              src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
              alt=""
            />
            <span>用户名</span>
          </div>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import screenfull from "screenfull";
import { useRouter } from "vue-router";
import { removeLocalData } from "@/utils/local";

const router = useRouter();
//全屏
const handleFullScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.request();
  } else {
    ElMessage.error("您的设置暂不支持全屏~");
  }
};

//刷新
const handleRefresh = () => {
  location.reload();
};

//退出登录
const loginOut = () => {
  removeLocalData("token");
  router.push("/login");
};
</script>

<style scoped lang="scss">
.user-info {
  .icon {
    cursor: pointer;
    font-size: 20px;
    margin-right: 20px;
  }
  .info {
    display: flex;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
    }
    span {
      margin-left: 10px;
    }
  }
}
</style>
