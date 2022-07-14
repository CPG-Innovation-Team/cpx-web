import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Homepage from './views/HomePage';
import SupplierList from './views/SupplierList';

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
