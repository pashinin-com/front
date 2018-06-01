import Vue from 'vue';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

import store from '@/store';
// import router from '@/router';
import router from './router';
import App from './App.vue';
import Menu from './store/menu';
import Org from './store/org';

let url = 'https://api.pashinin.com';
const localhost = document.location.hostname === 'localhost';
if (localhost) url = 'http://localhost:8000';
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: `${url}/graphql`,
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false;
store.registerModule('menu', Menu);
store.registerModule('org', Org);

// const Vuetify = () => import(/* webpackChunkName: "vuetify" */ 'vuetify');

/* eslint-disable no-new */

// Vue.directive('title', {
//   inserted: (el, binding) => document.title = binding.value,
//   update: (el, binding) => document.title = binding.value
// })

new Vue({
  el: '#app',
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App),
  // created() {
  //   this.$data.title = 'asd';
  // },
  data: () => ({
    title: 'index',
  }),
  // components: {
  //   'top-menu': require('./components/TopMenu.vue').default,
  //   'main-enroll': require('./components/MainEnroll.vue').default,
  //   // 'md-radio': MdRadio,
  //   // 'intro-video': require('./components/Video.vue').default,
  // },
  metaInfo: {
    title: 'Бауманка',
    meta: [
      { charset: 'utf-8' },
      { vmid: 'description', name: 'description', content: 'foo' },
    ],
    htmlAttrs: {
      lang: 'ru',
      amp: undefined, // "amp" has no value
    },
  },
});
