import axios from 'axios';
import Cookies from 'js-cookie';

export default class API {
  constructor(options) {
    this.jwt = true;
    this.token = '';
    let url = 'https://api.pashinin.com:8000/';
    const localhost = document.location.hostname === 'localhost';
    if (localhost) url = 'http://localhost:8000/';
    this.axios = axios.create({
      baseURL: url,
      timeout: 3000,
      // headers: {
      //   // 'X-Custom-Header': 'foobar'
      //   'X-CSRFToken': Cookies.get('csrftoken'),
      // },
    });
    this.options = { ...options };
  }

  prepare() {
    const headers = {};
    if (this.jwt) {
      // this.token = $store.state.user.token;
      const token = Cookies.get('access');
      headers.Authorization = `Bearer ${token}`;
    } else {
      headers['X-CSRFToken'] = Cookies.get('csrftoken');
    }
    return {
      ax: this.axios,
      headers,
    };
  }

  get(url) {
    // this.axios.defaults.headers.common.Authorization = `JWT ${this.token}`;
    const { ax, headers } = this.prepare();
    return ax.get(url, { headers });
    // ax.post('/', {
    //   // graphql
    //   query: '{ allTasks { id } }',
    //   variable: null,
    //   operationName: null,
    // }, { headers })
    // .then((response) => cb([123, response, this]))
    // .then(() => {
    // console.log(response);
    // this.$store.commit('LOGIN_SUCCESS', response);
    // })
    // .catch((error) => {
    // console.log(error);
    // .catch(() => cb([1, 2, 3]));
    // return [this];
  }

  post(url, data) {
    // this.axios.defaults.headers.common.Authorization = `JWT ${this.token}`;
    const { ax, headers } = this.prepare();
    return ax.post(url, data, { headers });
  }

  /**
   * Query GraphQL at api.domain.com/graphql
   * @param {string} query
   * @returns {object}
   */
  g(query) {
    // this.axios.defaults.headers.common.Authorization = `JWT ${this.token}`;
    const { ax, headers } = this.prepare();
    return ax.post(
      '/graphql',
      {
        // graphql
        query, // : '{ allTasks { id } }',
        variable: null,
        operationName: null,
      },
      { headers },
    );
  }
}
