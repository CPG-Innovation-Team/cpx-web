<template>
  <a-menu mode="inline">
    <a-menu-item key="1"><router-link to="/">主页</router-link></a-menu-item>
    <a-menu-item key="2">正大产品</a-menu-item>
    <a-sub-menu key="3">
      <template #title>供应商</template>
      <a-menu-item key="31">仪表盘</a-menu-item>
      <a-menu-item key="32"><router-link to="/supplierList">所有供应商</router-link></a-menu-item>
      <a-menu-item key="33">所有产品</a-menu-item>
      <a-menu-item key="34">产品排程</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="4">
      <template #title>收入</template>
    </a-sub-menu>
    <a-menu-item key="5">广告</a-menu-item>
  </a-menu>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
