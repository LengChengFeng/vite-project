<template>
  <div class="login-page">
    <div class="left">
      <div class="bg">
        <img src="@/assets/img/login-box-bg.svg" alt="" style="width: 400px" />
        <div class="welcome">欢迎使用本系统</div>
      </div>
    </div>
    <div class="right">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">lcf后台登录界面</div>
        </template>
        <div class="content">
          <LoginAccount />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginAccount from './components/loginAccount.vue'
</script>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  .left {
    position: relative;
    background: #48525c;
    background-size: 100% 100%;
    background-position: 100% 100%;
    width: 50%;
    .bg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .welcome {
      color: #fff;
      font-size: 20px;
      text-align: center;
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background: url(@/assets/img/bgc.svg);
    background-position: 100% 100%;
    display: flex;
    align-items: center;
    .box-card {
      min-width: 400px;
      height: 400px;
      width: 60%;
      .card-header {
        text-align: center;
      }
      .content {
        padding: 0 20px 10px 20px;
      }
    }
  }
}

@media screen and (max-width: 780px) {
  .left {
    display: none;
  }
  .right {
    width: 100% !important;
    justify-content: center;
  }
}
</style>
