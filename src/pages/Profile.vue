<template>
<div class="container-lg pt-5">
  <div class="Subhead">
    <div class="Subhead-heading">{{$store.state.user.email}}</div>
    <div class="Subhead-description">
      <!-- Информатики и систем управления -->
    </div>
  </div>
  <a href="" @click.prevent="logout">Выход</a>
</div>
</template>



<script>
// <!-- import Cookies from 'js-cookie'; -->
// import router from '../';
// import axios from 'axios';
// import MyVideo from './MyVideo.vue';
// import ExamsInfo from './ExamsInfo.vue';
// import RemoteAndHome from './RemoteAndHome.vue';
// import What from './What.vue';
// import MainEnroll from './MainEnroll.vue';

export default {
  metaInfo: {
    title: 'Профиль',
  },
  data: () => ({
    loginform: {
      email: '',
      password: '',
    },
  }),
  methods: {
    logout() {
      this.$store.commit('LOGOUT');
      this.$router.push({ path: '/' });
    },
  },
};
</script>
