<template>
  <v-container>
    <!-- 标题和介绍 -->
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">幻云科技</h1>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col cols="4">
        <v-card class="pa-2">
          <h2>API</h2>
          <p>这里是 API 的介绍。</p>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="pa-2">
          <h2>文档</h2>
          <p>这里是文档的介绍。</p>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="pa-2">
          <h2>模板</h2>
          <p>这里是模板的介绍。</p>
        </v-card>
      </v-col>
    </v-row>

    <!-- 公司介绍 -->
    <v-row class="mt-12">
      <v-col cols="12">
        <h2 class="headline font-weight-bold">关于我们</h2>
        <p>幻云科技是一家专注于提供高质量软件解决方案的公司。我们的团队由经验丰富的专业人士组成，致力于为客户提供最佳的解决方案。</p>
      </v-col>
    </v-row>

    <!-- 服务或产品展示 -->
    <v-row class="mt-12">
      <v-col cols="12">
        <h2 class="headline font-weight-bold">我们的服务</h2>
        <v-row>
          <v-col cols="4">
            <v-card class="pa-2">
              <h3>服务 1</h3>
              <p>这里是服务 1 的介绍。</p>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="pa-2">
              <h3>服务 2</h3>
              <p>这里是服务 2 的介绍。</p>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="pa-2">
              <h3>服务 3</h3>
              <p>这里是服务 3 的介绍。</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- 联系表单 -->
    <v-row class="mt-12">
      <v-col cols="12">
        <h2 class="headline font-weight-bold">联系我们</h2>
        <v-form>
          <v-text-field label="姓名" required></v-text-field>
          <v-text-field label="邮箱" required></v-text-field>
          <v-textarea label="留言" required></v-textarea>
          <v-btn class="mt-3" color="primary" type="submit">提交</v-btn>
        </v-form>
      </v-col>
    </v-row>

    <!-- 3D 图片 -->
    <div class="three-d-image">
      <img src="../public/logo.svg" alt="3D Image">
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.three-d-image {
  perspective: 1000px;
  margin-top: 50px;
}

.three-d-image img {
  transform: rotateY(40deg);
  transition: transform 0.5s ease-in-out;
}

.three-d-image img:hover {
  transform: rotateY(0deg);
}
</style>
