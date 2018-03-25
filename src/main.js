import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// const Vuetify = () => import(/* webpackChunkName: "vuetify" */ 'vuetify');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  // components: {
  //   'top-menu': require('./components/TopMenu.vue').default,
  //   'main-enroll': require('./components/MainEnroll.vue').default,
  //   // 'md-radio': MdRadio,
  //   // 'intro-video': require('./components/Video.vue').default,
  // },
  // metaInfo: {
  //   // if no subcomponents specify a metaInfo.title, this title will be used
  //   title: 'Репетитор по информатике, курсы программирования',
  //   // all titles will be injected into this template
  //   // titleTemplate: '%s | My Awesome Webapp',
  //   meta: [
  //     // { charset: 'utf-8' },
  //     { vmid: 'description', name: 'description', content: 'foo' }
  //   ],
  //   htmlAttrs: {
  //     lang: 'ru',
  //     amp: undefined // "amp" has no value
  //   }
  // },
});
