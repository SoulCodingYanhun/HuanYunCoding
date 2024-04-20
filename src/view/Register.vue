<script setup>
import { ref } from 'vue';

// 用户表单数据
const formData = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  captchaInput: '',
});

// 表单验证规则
const rules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 15, message: '用户名长度在 3 到 15 个字符', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' },
  ],
  confirmPassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    { validator: validatePasswordConfirm, trigger: 'blur' },
  ],
  captchaInput: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { validator: validateCaptcha, trigger: 'blur' },
  ],
});

// 验证码相关
const captcha = ref('');

// 生成验证码
async function generateCaptcha() {
  try {
    captcha.value = Math.floor(100000 + Math.random() * 900000).toString()
    const response = await fetch('https://huanyun-api.onrender.com/send-verification-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: formData.value.email, verificationCode: captcha.value}),
    });
    if (response.ok) {
      console.log('Verification code sent successfully');
    } else {
      console.error('Failed to send verification code');
    }
  } catch (error) {
    console.error('Error sending verification code:', error);
  }
}

// 验证码验证函数
function validateCaptcha(rule, value, callback) {
  if (value !== captcha.value) {
    callback(new Error('验证码不正确'));
  } else {
    callback();
  }
}

// 密码确认验证函数
function validatePasswordConfirm(rule, value, callback) {
  if (value !== formData.value.password) {
    callback(new Error('两次输入密码不一致'));
  } else {
    callback();
  }
}

// 提交表单
const handleSubmit = () => {
  if (formData.value.password!== formData.value.confirmPassword) {
    this.$message.error('两次输入密码不一致');
    return;
  }
  if (formData.value.captchaInput!== captcha.value) {
    this.$message.error('验证码不正确');
    return;
  }

  // 注册用户
  const userData = {
    uuid: this.uuid,
    username: this.formData.username,
    password: this.formData.password,
    email: this.formData.email,
    phone_number: '无',
    bio: '暂无简介',
    role: 'user'
  };

  fetch('https://huanyun-api.onrender.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.message); // Output: User registered successfully
    })
    .catch(error => {
      console.error('Error:', error);
    });

};
</script>

<template>
  <v-app>
    <div class="d-flex justify-center align-center" style="height: 100vh; background-size: cover;">

      <v-card class="pa-4" style="width: 400px; background-color: rgba(255, 255, 255, 0.8)">
        <el-form :model="formData" :rules="rules" ref="registerForm" label-width="100px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="formData.email"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="formData.password" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input type="password" v-model="formData.confirmPassword" show-password></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="captchaInput" class="captcha-container">
            <el-input v-model="formData.captchaInput"></el-input>
            <v-btn @click="generateCaptcha">验证码</v-btn>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">注册</el-button>

          </el-form-item>
        </el-form>
        <div class="text-center mt-4">
          <router-link to="/user/login" class="register-link">有账号？立即登入</router-link>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<style scoped>
.captcha-container {
  display: flex;
  align-items: center; /* This ensures the content is vertically centered */
  justify-content: space-between; /* This adds space between the elements */
}

.captcha-container .el-input {
  flex: 1; /* This makes the input field take up the remaining space */
  margin-right: 10px; /* Adds a small margin between the input and captcha div */
}

.captcha {
  width: 100px; /* Adjust the width as needed */
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #f9f9f9;
  cursor: pointer;
  /* Other styles */
}
.v-app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.v-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.el-form-item {
  margin-bottom: 20px;
}

.el-input {
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.captcha-container {
  display: flex;
  align-items: center;
}

.captcha {
  margin-left: 10px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #f9f9f9;
  cursor: pointer;
}

.el-button {
  width: 100%;
  border-radius: 4px;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease-in-out;
}

.el-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}
</style>
