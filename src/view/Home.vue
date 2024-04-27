<template>
  <div class="d-flex justify-center align-center" style="height: 100vh; background-size: cover;">
    <el-card class="pa-4" style="width: 400px; background-color: rgba(255, 255, 255, 0.8)">
      <div class="text-center mb-4">
        <h2 class="text-h4">欢迎登录</h2>
      </div>

      <el-form @submit.native.prevent="submitForm" class="text-center">
        <div class="input-group">
          <el-input v-model="username" class="large-input" placeholder="用户名" prefix-icon="el-icon-user" />
        </div>
        <div class="input-group">
          <el-input v-model="password" class="large-input" type="password" placeholder="密码" show-password prefix-icon="el-icon-key" />
        </div>
        <el-button native-type="submit" type="primary" plain block class="mt-4">登录</el-button>
      </el-form>

      <div class="text-center mt-4">
        <router-link to="/user/register" class="register-link">没有账号？立即注册</router-link>
      </div>
    </el-card>
  </div>
</template>

<script>

</script>
