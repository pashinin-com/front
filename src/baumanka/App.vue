<template>
<div id="app" class="height-full d-flex flex-column bg-white" style="min-height:100%">
  <top-menu></top-menu>
  <main class="flex-auto" style="margin-top:50px;">
    <div class="container-lg pt-4 px-2" v-if="$store.state.breadcrumb.length>1">
      <nav aria-label="Breadcrumb">
        <ol>
          <li
            v-for="(item, index) in $store.state.breadcrumb"
            class="breadcrumb-item text-small"
            v-bind:class="{ 'breadcrumb-item-selected text-gray': index === $store.state.breadcrumb.length-1 }"
            >
            <router-link v-if="item.path" :to="item.path">{{item.title}}</router-link>
            <span v-else>{{item.title}}</span>
          </li>
          <!-- <li class="breadcrumb-item text-small"><a href="/business">Business</a></li> -->
          <!-- <li class="breadcrumb-item text-small"><a href="/business/customers">Customers</a></li> -->
          <!-- <li class="breadcrumb-item breadcrumb-item-selected text-small text-gray" aria-current="page">MailChimp</li> -->
        </ol>
      </nav>
    </div>
		<router-view></router-view>
	</main>
  <footer class="mt-5 px-2" style="background:#242729;color:#aaa;flex: 0 0 auto;">
	  <div class="w noprint flex equal container-lg">
		  <div>
		    <p>
			    <a href="https://pashinin.com">pashinin.com</a>
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
import gql from 'graphql-tag';
import TopMenu from 'components/TopMenu.vue';
// import MainEnroll from 'components/MainEnroll.vue';
// import API from 'components/api';
import store from '@/store';
import orgid from './orgid';

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
  metaInfo: {
    title: 'Бауманка', // set a title
    // titleTemplate: '%s - Yay!', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'ru',
      amp: undefined, // "amp" has no value
    },
  },
  store,
  // name: 'RegularRadio',
  apollo: {
    // Apollo specific options
    org: {
      query() {
        return gql`query ($orgid: ID!) {
  org:organization(id: $orgid) {
        id
        title
        locationStr
  }
}`;
      },
      variables: {
        orgid: orgid(),
      },
      // result({ data, loader, networkStatus }) {
      // update: data => data.data.organization,
      result(data) {
        // const nodes = data.data.organizations.edges;
        // const org = nodes[0].node;
        const { org } = data.data;
        this.$store.commit('setOrg', org);
        this.$store.commit('setRootTitle', org.title);
      },
    },
    // update: data => data.randomTag || data.lastTag,
    // update: data => this.$store.commit('setUniversity', data),
  },
  components: {
    // MainEnroll,
    TopMenu,
  },
  data: () => ({
    // title: 'init',
    breadcrumb: [123],
    organizations: { edges: [] },
    api: null,
    radio: false,
  }),
  created() {
    this.$store.commit('setOrg', this.organizations);
    // this.$store.state.menu.items[path].title = ;
    // this.$store.commit('LOGIN_SUCCESS', response);
    // this.$store.api = new API();
    // this.$store.api.token = this.$store.state.user.token;
    // this.$store.api.get((r) => console.log(r));
  },
  // directives: {
  //   title: {
  //     inserted(el, binding) {
  //       document.title = binding.value;
  //     },
  //     update(el, binding) {
  //       document.title = binding.value;
  //     },
  //   },
  // },
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
@import 'primer-alerts/index';
@import 'primer-utilities/index';
@import 'primer-layout/index';
@import 'primer-forms/index';
@import 'primer-subhead/index';
@import 'primer-buttons/index';
@import 'primer-breadcrumb/index';
</style>
