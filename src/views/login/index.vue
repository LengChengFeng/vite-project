<template>
  <div class="login-page">
    <div class="left"></div>
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
import LoginAccount from "./components/loginAccount.vue";
</script>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  .left {
    background: url(@/assets/img/bgc.svg);
    background-position: 100% 100%;
    width: 35%;
  }
  .right {
    width: 65%;
    background: url(@/assets/img/bgc.svg);
    background-position: 100% 100%;
    display: flex;
    align-items: center;
    .box-card {
      min-width: 400px;
      width: 40%;
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
