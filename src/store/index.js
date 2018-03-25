/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
// const Vue = () => import(/* webpackChunkName: "vue" */ 'vue');
// const Vuex = () => import(/* webpackChunkName: "vue" */ 'vuex');

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    count: 0,
    phone: '+7 (977) 801-25-41',
    menu: {
      selected: '/',
    },
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    selectMenuItem(state, url) {
      state.menu.selected = url;
    },
  },
});
