/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
// import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const mutations = {
  setRootTitle(state, title) {
    state.items['/'].title = title;
  },
};

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// });

export default {
  // namespaced: true,
  state: {
    paths: [
      '/',
      // '/faculties'
    ],
    items: {
      '/': {
        title: 'ORG',
        // title: this.$store.state.org.title,
      },
      '/faculties': {
        title: 'Факультеты',
      },
      '/login': {
        title: 'Вход',
      },
      '/profile': {
        title: 'Профиль',
      },
    },
  },
  mutations,
  // plugins: [vuexLocal.plugin],
};
