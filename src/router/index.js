import { createRouter, createWebHistory } from 'vue-router';
import Landing from '@/views/Landing.vue';
import ApiData from '@/views/ApiData.vue';
import Crud from '@/views/Crud.vue';

const routes = [
  { path: '/', component: Landing },
  { path: '/api-data', component: ApiData },
  { path: '/crud', component: Crud }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
