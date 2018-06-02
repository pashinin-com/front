<template>
<div class="container-lg d-flex flex-justify-around pt-5">
  <div class="px-3 border2">
    <div class="Subhead">
      <div class="Subhead-heading">Быстрый вход</div>
    </div>
    <div style="margin:auto; max-width:500px;">
      <a
        href="https://oauth.vk.com/authorize?client_id=6425125&display=page&redirect_uri=http://localhost:8000/accounts/vk/login/callback/&response_type=code&v=5.73&state=KYmJ4i42sbY6">
        <img alt="vk" src="static/img/VK.com-logo.svg" style="width:64px"/></a>
    </div>
  </div>
  <div class="px-3 border2">
    <div class="Subhead">
      <div class="Subhead-heading">Вход</div>
    </div>
    <div style="max-width:600px;">
      <form action="" method="POST">
	      <!-- csrf_input -->
	      <input v-model="loginform.email" class="form-control mb-3" name="username" type="text" value="" placeholder="Email"/>
	      <input v-model="loginform.password" class="form-control mb-3" name="password" type="password" value="" placeholder="Пароль"/>
	      <input class="btn btn-primary w100" name="submit" type="submit" value="Войти" @click.prevent="signin"/>

        <!-- Token: {{$store.state.user.token}} -->
      </form>
    </div>

    <div class="Subhead Subhead--spacious">
      <div class="Subhead-heading">Регистрация</div>
    </div>
    <div style="max-width:600px;">
      <form action="" method="POST">
	      <!-- csrf_input -->
	      <input class="form-control mb-3" name="email" type="text" value="" placeholder="Email"/>
	      <input class="btn btn-primary w100" name="submit" type="submit" value="Зарегистрироваться" @click.prevent="apicall"/>
      </form>
    </div>
  </div>

</div>
</template>



<script>
import axios from 'axios';
// import MyVideo from './MyVideo.vue';
// import ExamsInfo from './ExamsInfo.vue';
// import RemoteAndHome from './RemoteAndHome.vue';
// import What from './What.vue';
// import MainEnroll from './MainEnroll.vue';

export default {
  // module.exports = {
  data: () => ({
    loginform: {
      email: '',
      password: '',
    },
  }),
  methods: {
    signin() {
      axios.post('http://localhost:8000/auth/jwt/', {
        email: this.$data.loginform.email,
        password: this.$data.loginform.password,
      })
        .then((response) => {
        // .then(() => {
          console.log(response);
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
        .then((response) => {
        // .then(() => {
          console.log(response);
        })
        .catch((error) => {
        // .catch(() => {
          console.log(error);
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
