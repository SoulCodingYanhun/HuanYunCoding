<template>
  <v-app>
    <div class="d-flex justify-center align-center" style="height: 100vh; background-size: cover;">
      <v-card class="pa-4" style="width: 400px; background-color: rgba(255, 255, 255, 0.8)">
        <div class="text-center mb-4">
          <h2 class="text-h4">欢迎登录</h2>
        </div>

        <v-form @submit.prevent="submitForm" class="text-center">
          <div class="input-group">
            <v-icon icon="mdi-account"></v-icon>
            <el-input v-model="username" class="large-input" placeholder="用户名" />
          </div>
          <div class="input-group">
            <v-icon icon="mdi-key-variant"></v-icon>
            <el-input
              v-model="password"
              class="large-input"
              type="password"
              placeholder="密码"
              show-password
            />
          </div>
          <v-btn type="submit" color="primary" dark block class="mt-4">登录</v-btn>
        </v-form>

        <div class="text-center mt-4">
          <router-link to="/user/register" class="register-link">没有账号？立即注册</router-link>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // 处理登录逻辑
      console.log('用户名:', this.username);
      console.log('密码:', this.password);
      // 这里可以添加验证和API调用来处理登录
    },
  },
};
</script>

<style scoped>
/* 添加一些自定义样式 */
.v-application .text-h4 {
  font-weight: 300;
}

/* 增大输入框尺寸 */
.input-group {
  margin-bottom: 15px;
}

.large-input {
  width: 300px;
  font-size: 16px;
}

/* 注册链接样式 */
.register-link {
  color: #333;
  text-decoration: none;
  font-size: 14px;
}

.register-link:hover {
  text-decoration: underline;
}

.el-input {
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.v-btn {
  width: 100%;
  border-radius: 4px;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease-in-out;
}

.v-btn :hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}
</style>
