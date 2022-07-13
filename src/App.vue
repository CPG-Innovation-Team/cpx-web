<template>
  <a-layout>
    <a-layout-sider theme="light"><SideBar /></a-layout-sider>
    <a-layout>
      <a-layout-header><PageTopBar /></a-layout-header>
      <a-layout-content><router-view /></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import SideBar from './components/SideBar.vue';
import PageTopBar from './components/PageTopBar.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
