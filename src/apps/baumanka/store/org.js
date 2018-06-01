/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
// import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const mutations = {
  setOrg(state, data) {
    // console.log(data);
    // state.org = data;
    state = Object.assign(state, data);
  },
};

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// });

export default {
  // namespaced: true,
  state: {
    id: 0,
    title: 'org title',
    locationStr: 'org location',
  },
  mutations,
  // plugins: [vuexLocal.plugin],
};
