/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';
// import Router from 'vue-router';
// import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

function JWTPayload(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const userData = JSON.parse(window.atob(base64));
    return userData;
  } catch (e) {
    return {};
  }
}

/**
 *
 * @param {} token
 * @returns {}
 */
function getUserInfo(token) {
  const state = {};
  if (token) {
    const data = JWTPayload(token);
    const { email } = data;
    // console.log(exp);
    // console.log(jti);
    state.id = data.user_id;
    state.email = email;
  }
  state.authenticated = token !== undefined;
  return state;
}

const mutations = {
  LOGIN_SUCCESS(state, response) {
    const { access, refresh } = response.data;
    Cookies.set('access', refresh);
    Cookies.set('refresh', refresh);
    state.token = access;
    const { email } = JWTPayload(access);
    state.email = email;
    state.authenticated = true;
  },
  LOGOUT(state) {
    state.token = null;
    state.email = null;
    state.authenticated = false;
    Cookies.remove('access');
    Cookies.remove('refresh');
  },
};

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// });

// const access = Cookies.get('access');


export default {
  // namespaced: true,
  state: Object.assign({
    token: null,
    email: null,
    authenticated: false,
  }, getUserInfo(Cookies.get('access'))),
  getters: {
    // authenticated(state) {
    //   return state.currentNote;
    // }
  },
  mutations,
  // plugins: [vuexLocal.plugin],
};
