<template>
  <v-app>
    <header>
      <v-app-bar :elevation="2">
        <template v-slot:prepend>
          <!-- 在这里可以添加一些前置内容，比如品牌Logo等 -->
        </template>

        <v-app-bar-title>幻云科技</v-app-bar-title>

        <template v-slot:append>
          <!-- 使用v-btn创建图标按钮 -->
          <v-btn icon="mdi-home"></v-btn>
          <v-btn icon="mdi-api"></v-btn>
          <v-btn icon="mdi-forum"></v-btn>
          <v-btn icon="mdi-account-circle-outline"></v-btn>
        </template>
      </v-app-bar>
    </header>

    <v-main>
      <!-- 路由视图，用于显示当前路由对应的组件 -->
      <router-view></router-view>
    </v-main>

    <footer>
      <!-- 在这里添加页脚内容 -->
    </footer>
  </v-app>
</template>

<script setup>
// 如果需要在此处添加逻辑，可以在此编写JavaScript
</script>
