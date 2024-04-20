<template>
  <v-app>
    <header>
      <v-app-bar :elevation="2" scroll-behavior="hide">
        <template v-slot:prepend>
          <!-- 在这里可以添加一些前置内容，比如品牌Logo等 -->
        </template>

        <v-app-bar-title>幻云科技</v-app-bar-title>

        <template v-slot:append>
          <!-- 如果已登录，显示图标 -->
          <div v-if="isLoggedIn">
            <v-btn v-for="icon in socialIcons" :key="icon" icon>
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
            <v-avatar>
              <img src="https://example.com/profile-picture.jpg" alt="Profile Picture">
            </v-avatar>
          </div>

          <div v-else>
            <v-btn icon="mdi-home" @click="goToHome"></v-btn>
            <v-btn icon="mdi-api" @click="goToApi"></v-btn>
            <v-btn icon="mdi-forum" @click="goToForum"></v-btn>
            <router-link to="/user/login" custom v-slot="{ navigate }">
              <v-btn @click="navigate">登入/注册</v-btn>
            </router-link>
          </div>
        </template>
      </v-app-bar>
    </header>

    <v-main>
      <!-- 路由视图，用于显示当前路由对应的组件 -->
      <router-view></router-view>
    </v-main>

    <v-footer class="d-flex flex-column">
      <div class="px-4 py-2 bg-black text-center w-100">
        {{ currentYear }} — <strong>幻云科技 HuanYunCoding</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import VueCookie from 'vue-cookie';
export default {
  data() {
    return {
      socialIcons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      navIcons: [
        'mdi-home',
        'mdi-api',
        'mdi-forum',
        'mdi-account-circle-outline'
      ],
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {

    isLoggedIn() {
      const userCookie = VueCookie.get('user');
      return userCookie && userCookie.login === true;
    }
  },
  methods: {

    goToHome() {
      // 跳转到首页的逻辑
      this.$router.push('/');
    },
    goToApi() {
      // 跳转到API页面的逻辑
      this.$router.push('/api');
    },
    goToForum() {
      // 跳转到论坛页面的逻辑
      this.$router.push('/forum');
    }
  },

  mounted() {
    if (!VueCookie.get('user')) {
      VueCookie.set('user', { login: false, user: '', password: '' }, 1);
    }
  }
};
</script>
