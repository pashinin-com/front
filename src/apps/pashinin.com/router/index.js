import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello'
// import Index from './components/Index.vue'
// import Questions from './components/Questions.vue'
const Questions = () => import('../../../components/Questions.vue');
const Index = () => import('../../../components/Index.vue');
// const Login = () => import('@/components/Index.vue');

Vue.use(Router);

// export default new Router({
const router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    { path: '/', component: Index },
    { path: '/faq', component: Questions },
    { path: '/pay', component: Questions },
    {
      path: '/contacts',
      component: () => import('@/components/Contacts.vue'),
      meta: {
        // requiresAuth: true,
      },
    },
    { path: '/login', component: () => import('../../../pages/Login.vue') },
    { path: '/profile', component: () => import('../../../pages/Profile.vue') },
    { path: '*', component: Questions },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    next('/login');
  } else {
    next();
  }
});

export default router;
