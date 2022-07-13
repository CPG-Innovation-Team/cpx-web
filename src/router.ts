import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Homepage from './views/Homepage.vue';
import SupplierList from './views/SupplierList.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/supplierList',
    component: SupplierList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
