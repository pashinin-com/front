/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
// import API from 'components/api';
// import createPersistedState from 'vuex-persistedstate';
import User from './modules/user';

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production';

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// });

export default new Vuex.Store({
  modules: {
    user: User,
  },
  state: {
    breadcrumb: [
      {
        title: 'Факультеты',
      },
    ],
    count: 0,
    phone: '+7 (977) 801-25-41',
    menu: {
      selected: '/',
    },
  },
  mutations: {
    updateToken(state, newToken) {
      // axios();
      localStorage.setItem('t', newToken);
      state.jwt = newToken;
    },
    setBreadcrumb(state, bc) {
      // axios();
      // localStorage.setItem('t', newToken);
      state.breadcrumb = bc;
    },
    increment(state) {
      state.count += 1;
    },
    selectMenuItem(state, url) {
      state.menu.selected = url;
    },
  },
  // plugins: [vuexLocal.plugin],
  // plugins: [createPersistedState({
  //   paths: ['user'],
  // })],
});
