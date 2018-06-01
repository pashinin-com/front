<template>
<div class="container-lg px-2">
  <!-- <div class="Subhead Subhead--spacious"> -->
  <!--   <div class="Subhead-heading">{{this.$store.state.org.title}}</div> -->
  <!--   <div class="Subhead-description"> -->
  <!--     {{this.$store.state.org.locationStr}} -->
  <!--   </div> -->
  <!-- </div> -->
  <div v-for="faculty in faculties.edges">
    <div class="Subhead Subhead--spacious">
      <div class="Subhead-heading">{{faculty.node.code}}</div>
      <div class="Subhead-actions">
        <a href="#url" class="btn btn-sm btn-secondary" role="button">Добавить кафедру...</a>
      </div>
      <div class="Subhead-description">{{faculty.node.title}}</div>
    </div>
    <div class="" v-for="dep in faculty.node.departments.edges">
      <!-- <div> -->
      <!-- v-bind:class="{ active: path === $route.path }" -->
      <!-- @click.native="$store.commit('selectMenuItem', path)" -->
      <router-link
        :to="`${dep.node.codeSlug}`"
        key="path"
        >
        {{dep.node.code}} - {{dep.node.title}}</router-link>
      <!-- </div> -->
    </div>
    <div>

    </div>
  </div>
  <div class="Subhead Subhead--spacious">
    <div class="Subhead-heading">Новый факультет</div>
    <!-- <div class="Subhead-actions"> -->
    <!--   <a href="#url" class="btn btn-sm btn-secondary" role="button">Добавить кафедру...</a> -->
    <!-- </div> -->
    <!-- <div class="Subhead-description">{{faculty.node.title}}</div> -->
  </div>
  <div class="">
    <form id="enrollform" action="request.path" method="POST"  v-on:submit.prevent="addFaculty">
			<input required v-model="newFaculty.code" class="form-control  my-2" name="code" type="text" value="" placeholder="Код факультета: ИУ"/>
			<input required v-model="newFaculty.title" class="form-control  my-2" name="title" type="text" value="" placeholder="Информатика и системы управления"/>
			<!-- <textarea class="form-control  my-2" cols="30" name="message" rows="10" placeholder="С чем помочь?" style="height:5em"></textarea> -->
			<!-- <input class="btn btn-primary btn-large w100 my-2" type="submit" value="Записаться" /> -->
      <input type="submit" class="btn btn-primary" value="Добавить факультет"></input>
		</form>
    <div v-if="newFacultyErr" class="flash flash-error mt-3">{{newFacultyErr}}</div>
  </div>
</div>
</template>



<script>
import axios from 'axios';
import gql from 'graphql-tag';
import API from 'components/api';
import orgid from '../orgid';
// import gql from 'graphql-tag';
// import MyVideo from './MyVideo.vue';
// import ExamsInfo from './ExamsInfo.vue';
// import RemoteAndHome from './RemoteAndHome.vue';
// import What from './What.vue';
// import MainEnroll from './MainEnroll.vue';

export default {
  metaInfo: {
    title: 'Бауманка',
  },
  data: () => ({
    // title: 'asd',
    faculties: { edges: [] },
    loginform: {
      email: '',
      password: '',
    },
    newFaculty: {
      code: '',
      title: '',
    },
    newFacultyErr: '',
    // organizations: { edges: [] },
  }),
  apollo: {
    faculties: {
      query: gql`query ($orgid: ID) {
  faculties(orderBy: "code", university: $orgid){
    edges {
      node {
        code
        title
        departments (orderBy: "code"){
          edges {
            node {
              id
              codeSlug
              code
              title
            }
          }
        }
      }
    }
  }
}`,
      variables: {
        orgid: orgid(),
      },
    },
  },
  created() {
    this.$store.commit('setBreadcrumb', []);
    // this.$data.title = '123';
    // console.log(123);
    // document.title = 'Бауманка';
    // document.head.querySelector('meta[name=description]').content = 'New Description'
  },
  methods: {
    addFaculty() {
      const api = new API();
      api.g(`mutation test {
  faculty(input: {
    code: "asd22"
    title: "ttt2"
    university: "1"
  } ) {
    code
    title
    university
    clientMutationId
    errors{
      field
      messages
    }
  }
}
`)
        .then(response => {
          const { errors } = response.data.data.faculty;
          if (errors !== null) {
            this.$data.newFacultyErr = errors;
          }

          // throw new Error(errors);
          // console.log(errors);
          //
          // this.$store.commit('LOGIN_SUCCESS', response);
          // this.$router.push({ path: '/' });
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            // this.showSigninError(error.response.data);
            console.log(error);
          } else {
            // this.showSigninError(error);
            console.log(error);
          }
        });
    },
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
