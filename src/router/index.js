import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import store from '@/store';
// import Hello from '@/components/Hello'
// import Index from './components/Index.vue'
// import Questions from './components/Questions.vue'
const Questions = () => import('../../../components/Questions.vue');
// const Index = () => import('../../../components/Index.vue');
// const Login = () => import('@/components/Index.vue');
const Index = () => import('../pages/Index.vue');
const Faculties = () => import('../pages/Faculties.vue');
const Department = () => import('../pages/Department.vue');

Vue.use(Router);
Vue.use(Meta);

// export default new Router({
const router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    {
      path: '/',
      component: Index,
    },
    { path: '/faq', component: () => import('../pages/Pay.vue') },
    { path: '/faculties', component: Faculties },
    { path: '/pay', component: Questions },
    {
      path: '/contacts',
      component: () => import('@/components/Contacts.vue'),
      meta: {
        // requiresAuth: true,
      },
    },
    { path: '/login', component: () => import('@/pages/Login.vue') },
    {
      path: '/profile',
      component: () => import('@/pages/Profile.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    { path: '/:dep', component: Department },
    // { path: '*', component: Department },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (to.path === '/login' && store.state.user.authenticated) {
    next('/profile');
  } else if (requiresAuth && !store.state.user.authenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
