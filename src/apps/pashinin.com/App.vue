<template>
<div id="app" class="height-full d-flex flex-column bg-white" style="min-height:100%">
  <!-- <header style="z-index:20000"> -->
  <!-- <div style="flex: 1 0 auto;"> -->
  <top-menu></top-menu>
  <!-- </header> -->
  <main class="flex-auto" style="margin-top:50px;">
		<router-view>asd</router-view>
	</main>
  <!-- </div> -->
  <footer class="" style="background:#242729;color:#aaa;flex: 0 0 auto;">
	  <div class="w noprint pad flex equal">
		  <div>
		    <p>
			    <a href=""></a>
		    </p>
		  </div>
		  <div>
		    <span></span>
		    <br/>

		  </div>
		  <div style="text-align:right">
		    <a target="_blank" href="https://github.com/pashinin-com/pashinin.com">Github</a>
		  </div>
	  </div>

	  <div class="w center">
	  </div>

	  <!-- <div id=app>
		     <router-link to="/foo">Go to Foo</router-link>
		     <router-link to="/bar">Go to Bar</router-link>
		     <p>[[ title ]]</p>
		     <ul>
           <li v-for="day in days">
		         <h4> Day [[ day ]]</h4>
           </li>
		     </ul>
		     <router-view></router-view>
		</div> -->
	</footer>
</div>
</template>

<script>
import Vue from 'vue';
// import TopMenu from '../../components/TopMenu.vue';
import TopMenu from 'components/TopMenu.vue';
import MainEnroll from 'components/MainEnroll.vue';

import store from '@/store';
// import store from '../../store';
// import VueMaterial from 'vue-material';


// 'main-enroll': require('./components/MainEnroll.vue').default,

Vue.use(TopMenu);
// Vue.component(
// 'top-menu',
// Функция `import` возвращает `Promise`.
// import('./components/TopMenu.vue'),
// () => import('./components/TopMenu.vue'),
// );

// Vue.use(VueMaterial);

// Vue.use(VueMaterial);

// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components';

// Vue.use(MdButton);
// Vue.use(MdContent);
// Vue.use(MdTabs);

export default {
  store,
  // name: 'RegularRadio',
  components: {
    MainEnroll,
    TopMenu,
  },
  data: () => ({
    radio: false,
  }),
};
</script>



<style lang="scss">
/* @import "materialize-css/sass/components/color-variables"; */
/* @import "materialize-css/sass/components/color-classes"; */
/* @import "materialize-css/sass/components/variables"; */
/* @import "materialize-css/sass/components/normalize"; */
/* @import 'materialize-css/sass/components/_variables.scss'; */
/* @import "materialize-css/sass/components/global"; */
/* @import 'materialize-css/sass/components/buttons'; */
/* @import 'materialize-css/sass/components/icons-material-design'; */
/* @import 'materialize-css/sass/components/navbar'; */
/* @import 'materialize-css/sass/components/sidenav'; */

@import '~@/css/main.scss';
@import 'primer-utilities/index';
@import 'primer-layout/index';
@import 'primer-forms/index';
@import 'primer-subhead/index';
@import 'primer-buttons/index';
</style>
