<template>
  <div>
    <!--  顶部 -->
    <van-nav-bar :title="activeTitle" fixed />
    <div class="main">
      <!-- 二级路由-挂载点 -->
      <router-view></router-view>
    </div>
    <!-- route 代表开启路由模式 -->
    <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <!-- 注意 to 属性绑定的字段 是路由规则 千万不要写错了 -->
      <van-tabbar-item replace to="/layout/home" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/search" icon="search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
// 文档中也有路由模式 ，具体的解释看文档
export default {
  data() {
    return {
      activeTitle: this.$route.meta.title, //默认顶部导航要显示的标题(默认获取当前路由对象里的meta中title值)
    };
  },
  watch: {// 路由切换 - 侦听$route对象改变
    $route() {
      this.activeTitle = this.$route.meta.title;// 提取切换后路由信息对象里的title显示
    },
  },
};
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>