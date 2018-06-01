<template>
<div class="container-lg px-2">
  <div class="Subhead Subhead--spacious">
    <div class="Subhead-heading">{{dep.code}}</div>
    <div class="Subhead-actions">
      <a href="#url" class="btn btn-sm btn-primary" role="button">Новая папка</a>
    </div>
    <div class="Subhead-description">{{ dep.title }}</div>
  </div>
  <div v-for="period in dep.periods.edges">
    <!-- <div> -->
    <!-- v-bind:class="{ active: path === $route.path }" -->
    <!-- @click.native="$store.commit('selectMenuItem', path)" -->
    <!--   {{dep.node.code}} - {{dep.node.title}}</router-link> -->
    <div>
      <router-link
        :to="`${period.node.slug}`"
        key="path"
        append
        >
        {{period.node.name}}
      </router-link>
    </div>
    <!-- </div> -->
  </div>
</div>
</template>



<script>
import axios from 'axios';
import gql from 'graphql-tag';
import orgid from '../orgid';
// import API from 'components/api';
// import MyVideo from './MyVideo.vue';
// import ExamsInfo from './ExamsInfo.vue';
// import RemoteAndHome from './RemoteAndHome.vue';
// import What from './What.vue';
// import MainEnroll from './MainEnroll.vue';

export default {
  metaInfo: {
    title: 'Факультеты',
  },
  data: () => ({
    dep: {
      periods: {
        edges: [],
      },
    },
    faculties: { edges: [] },
    loginform: {
      email: '',
      password: '',
    },
  }),
  apollo: {
    // Apollo specific options
    dep: {
      query: gql`query ($orgid: ID, $depSlug: String) {
  dep:departments(university: $orgid, codeSlug: $depSlug) {
    edges{
      node{
        code
        codeSlug
        title
        periods(orderBy:"name"){
          edges{
            node{
              slug
              name
            }
          }
        }
      }
    }
  }
}`,
      update: data => data.dep.edges[0].node,
      // update: (data) => {
      //   const d = data.dep.edges[0].node;
      //   d.periods = d.periods.edges;
      //   return d;
      // },
      variables() {
        return {
          orgid: orgid(),
          depSlug: this.$route.params.dep,
        };
      },
    },
  },
  computed: {
    facultiesSorted() {
      const arr = this.faculties.edges.slice();
      return arr.sort((a, b) => a.node.code > b.node.code);
    },
  },
  created() {
    this.$store.commit('setBreadcrumb', [
      {
        title: 'Факультеты',
        path: '/',
      },
      {
        title: (() => this.$data.dep.code)(),
      },
    ]);
    // const api = new API();
    // api.get('/faculties');
    // api.post('/graphql');
    // this.$data.title = '123';
    // console.log(123);
    // document.title = 'Факультеты';
    // document.head.querySelector('meta[name=description]').content = 'New Description'
  },
  methods: {
    signin() {
      axios.post('http://localhost:8000/auth/jwt/', {
        email: this.$data.loginform.email,
        password: this.$data.loginform.password,
      })
        .then((response) => {
        // .then(() => {
          // console.log(response);
          this.$store.commit('LOGIN_SUCCESS', response);
        })
        // .catch((error) => {
        .catch(() => {
          // console.log(error);
        });
      // fetch(e.target.getAttribute('action'), {
      //   method: 'POST',
      //   credentials: 'include',
      //   headers: {
      //     // 'X-CSRFToken': getCookie('csrftoken'),
      //     Accept: 'application/json',
      //     'Content-type': 'application/x-www-form-urlencoded',
      //   },
      //   // body: serialize(formToJSON(form.elements)),
      // })
      //   .then(r => r.json())
      //   .then((data) => {
      //     if ('errors' in data) {
      //       // showFormErrors(data.errors, document.getElementById('login'));
      //     } else {
      //       // window.location.href = getURLParameter('next');
      //     }
      //   });
    },
    apicall() {
      // Authorization: JWT <your_token>
      axios.defaults.headers.common.Authorization = `JWT ${this.$store.state.user.token}`;
      axios.get('http://localhost:8000/', {
        // headers: {'X-Custom-Header': 'foobar'},
        // token: this.$store.state.user.token,
        // password: this.$data.loginform.password,
      })
        // .then((response) => {
        .then(() => {
          // console.log(response);
        })
        // .catch((error) => {
        .catch(() => {
          // console.log(error);
        });
    },
  },
  components: {
    // MainEnroll,
    // MyVideo,
    // ExamsInfo,
    // RemoteAndHome,
    // What,
    // 'intro-video': require('./Video.vue').default,
  },
};
</script>
