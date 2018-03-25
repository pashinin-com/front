<template>
<div class="container-lg d-flex flex-justify-around pt-5">
  <div class="px-3 border2">
    <div class="Subhead-heading mb-3">Вход</div>
    <div style="max-width:600px;">
      <form id="login" action="" method="POST">
	      <!-- csrf_input -->
	      <input class="form-control mb-3" name="username" type="text" value="" placeholder="Email"/>
	      <input class="form-control" name="password" type="password" value="" placeholder="Password"/>
	      <p></p>
	      <input class="btn btn-primary w100" name="submit" type="submit" value="Sign in"/>
      </form>
    </div>
  </div>
  <div class="px-3 border2 d-none">
    <div class="Subhead-heading mb-3">Регистрация</div>
    <div style="margin:auto; max-width:500px;border:1px solid #d8dee2">
      <form id="login2" action="" method="POST">
	      <!-- csrf_input -->
	      <input name="username" type="text" value="" placeholder="Email"/>
	      <input name="password" type="password" value="" placeholder="Password"/>
	      <p></p>
	      <input class="btn btn-primary w100" name="submit" type="submit" value="Sign in"/>
      </form>
    </div>
  </div>
</div>
</template>



<script>
// import MyVideo from './MyVideo.vue';
// import ExamsInfo from './ExamsInfo.vue';
// import RemoteAndHome from './RemoteAndHome.vue';
// import What from './What.vue';
// import MainEnroll from './MainEnroll.vue';

export default {
  // module.exports = {
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
