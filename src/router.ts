import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Homepage from './pages/Homepage.vue';
import SupplierList from './pages/SupplierList.vue';

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
