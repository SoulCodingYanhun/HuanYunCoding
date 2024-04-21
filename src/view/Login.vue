<template>
  <!--<div class="d-flex justify-center align-center" style="height: 100vh; background-size: cover;">
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
  </div>-->
  <SignIn path="/sign-in" routing="path" sign-up-url="/sign-up" />

</template>

<script>
import { SignIn } from 'vue-clerk'
import axios from 'axios';
import VueCookie from 'vue-cookie';
import { ElNotification } from 'element-plus';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('https://huanyun-api.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        if (response.status === 200) {
          const data = await response.json();
          ElNotification({
            title: '用户登入',
            message: `登入成功！${this.username}`,
            position: 'bottom-right',
          });
          console.log(data);

          // Set the cookie when login is successful
          VueCookie.set('user', {
            login: true,
            username: this.username,
            password: this.password,
          }, 30); // expires in 1 day
          this.$router.push('/');
        } else {
          ElNotification({
            title: '用户登入',
            message: '登入失败,请检查用户名和密码是否正确',
            type: 'error',
            position: 'bottom-right',
          });
          // 处理登录失败的逻辑
        }
      } catch (error) {
        console.error(error);
        ElNotification({
          title: '用户登入',
          message: '登入失败,请稍后再试',
          type: 'error',
          position: 'bottom-right',
        });
        // 处理登录失败的逻辑
      }
    },
  },
};
</script>

<style scoped>
/* 添加一些自定义样式 */
.text-h4 {
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

.el-button {
  width: 100%;
  border-radius: 4px;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease-in-out;
}

.el-button :hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}
</style>
