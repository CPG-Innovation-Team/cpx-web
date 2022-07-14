<template>
  <a-layout class="app-layout">
    <a-layout-sider theme="light" class="sider-layout"><SideBar /></a-layout-sider>
    <a-layout>
      <a-layout-header class="content-layout-header"><PageTopBar /></a-layout-header>
      <a-layout-content><router-view /></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import SideBar from './components/SideBar';
import PageTopBar from './components/PageTopBar';
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.app-layout {
  height: 100%;

  .sider-layout {
    height: 100%;
  }

  .content-layout-header {
    background-color: #fff;
  }
}
</style>
