<template>
<div>
  <main-enroll></main-enroll>
  <div class="container-lg px-3">
    <what></what>
    <!-- <remote-and-home></remote-and-home> -->
    <!-- <exams-info></exams-info> -->
    <!-- <my-video></my-video> -->
  </div>
</div>
</template>



<script>
// import MyVideo from './MyVideo.vue';
// import ExamsInfo from './ExamsInfo.vue';
// import RemoteAndHome from './RemoteAndHome.vue';
import What from './What.vue';
import MainEnroll from './MainEnroll.vue';

export default {
  // module.exports = {
  components: {
    MainEnroll,
    // MyVideo,
    // ExamsInfo,
    // RemoteAndHome,
    What,
    // 'intro-video': require('./Video.vue').default,
  },
};
</script>
