<template>
<div class="nav col-12 bg-blue text-white" style="z-index:999;">
  <div class="container-lg d-flex flex-justify-between">
    <nav>
      <!-- <a href="#!" class="brand-logo">Logo</a> -->
      <ul class="d-flex flex-auto flex-justify-between">
        <li class="d-inline-block d-md-none d-flex" @click.prevent="sidenav">
          <a href=""><i class="material-icons">menu</i></a>
          <a href="">{{ menu_items[$route.path].title }}</a>
        </li>
        <li v-for="path in menu" class="d-none d-md-inline-block">
          <router-link v-bind:class="{ active: path === $route.path }" :to="path" :key="path" @click.native="$store.commit('selectMenuItem', path)">{{ menu_items[path].title }}</router-link>
        </li>
      </ul>
    </nav>
    <nav>
      <ul class="d-flex flex-auto flex-justify-between">
        <!-- <li class="d-inline-block"> -->
        <!--   <a id="notify-btn" href="#"> -->
        <!--     <i class="material-icons">message</i> -->
			  <!--   </a> -->
        <!-- </li> -->
        <li class="d-inline-block">
          <a href="/login">ВОЙТИ</a>
        </li>
      </ul>
    </nav>
  </div>

  <div class="sidenav d-none d-md-none">
    <ul>
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <li><a href="collapsible.html">Javascript</a></li>
      <li><a href="mobile.html">Mobile</a></li>
    </ul>
  </div>

  <div class="flex-auto hide">


	  <div class="w padl3 hide" style="overflow:visible;">
      <div class="flex">
		    <!-- {% if menu %} -->
		    <div id="top-bar-left" style="line-height:35px;overflow:hidden;flex-grow:0">
		      <!-- <nav style="white-space:nowrap;"> -->
          <!-- <router-link class="home" to="/" v-on:click.native="$store.commit('selectMenuItem', '/')"> -->
          <!--   <i class="icon 1active icon-bell-alt" style="font-size:1.4em;line-height:50px;">&#xF0F3;</i> -->
          <!-- </router-link> -->
			    <!-- {% set parent = menu["parent"] %} -->
			    <!-- <router-link v-bind:class="{ current: item.url === $route.path }" v-for="item in items" :to="item.url" :key="item.url" @click.native="$store.commit('selectMenuItem', item.url)">{{ item.title }}</router-link> -->
			    <!-- <a v-for="item in items" class="current2" -->
			    <!--    style="background:url(); -->
			    <!-- 		  <\!-- background-size: 30px 30px; -\-> -->
			    <!-- 		  background-position: 0px 10px; -->
			    <!-- 		  <\!-- padding-left:35px; -\-> -->
			    <!-- 		  background-repeat: no-repeat;" -->
			    <!--    > -->
			    <!--   { item.title } -->
			    <!-- </a> -->
		      <!-- </nav> -->
		    </div>

		    <div id="top-bar-middle" class=""></div>

		    <div id="top-bar-right" class="wrapper" style="text-align:right;position:relative;height:100%;overflow:visible;flex-grow:0">
		      <div id="loginbox" class="hide popup" style="top:50px">
			      <a class="padlr" href="">Profile</a>

			      <a class="padlr" href="">Main page</a>
			      <a class="padlr" href="">Cluster</a>
			      <a class="padlr" href="">Django admin</a>
			      <a class="padlr" href="">Files</a>
			      <a class="padlr" href="">Celery</a>
			      <a class="padlr" href="">Nginx</a>
			      <a class="padlr" href="">Updates</a>


			      <a id="exit" class="padlr" href="">Выход</a>

			      <a class="padlr" href="">Войти</a>

		      </div>
		    </div>

	    </div>
	  </div>


	  <div class="w padl3 hide" style="overflow:visible;">
      <div class="flex">
		    <!-- {% if menu %} -->
		    <div id="top-bar-left" style="line-height:35px;overflow:hidden;flex-grow:0">
		      <!-- <nav style="white-space:nowrap;"> -->
          <!-- <router-link class="home" to="/" v-on:click.native="$store.commit('selectMenuItem', '/')"> -->
          <!--   <i class="icon 1active icon-bell-alt" style="font-size:1.4em;line-height:50px;">&#xF0F3;</i> -->
          <!-- </router-link> -->
			    <!-- {% set parent = menu["parent"] %} -->
			    <!-- <router-link v-bind:class="{ current: item.url === $route.path }" v-for="item in items" :to="item.url" :key="item.url" @click.native="$store.commit('selectMenuItem', item.url)">{{ item.title }}</router-link> -->
			    <!-- <a v-for="item in items" class="current2" -->
			    <!--    style="background:url(); -->
			    <!-- 		  <\!-- background-size: 30px 30px; -\-> -->
			    <!-- 		  background-position: 0px 10px; -->
			    <!-- 		  <\!-- padding-left:35px; -\-> -->
			    <!-- 		  background-repeat: no-repeat;" -->
			    <!--    > -->
			    <!--   { item.title } -->
			    <!-- </a> -->
		      <!-- </nav> -->
		    </div>

		    <div id="top-bar-middle" class=""></div>

		    <div id="top-bar-right" class="wrapper" style="text-align:right;position:relative;height:100%;overflow:visible;flex-grow:0">
		      <nav id="nav-right" class="flex" >
			      <a id="notify-btn" href="#" class="ib"
			         style="display:none">
			        <i class="icon 1active icon-bell-alt" style="font-size:1.5em;line-height:50px;">&#xF0F3;</i>
			      </a>
			      <a id="profile"
			         href="#"
			         class="ib padlr-sm"
			         style="display: table-cell;"
			         >
			        <div class="ib"
				           style="
						              background:url(  ) no-repeat;
						              vertical-align:middle;
						              width:30px;height:30px;
						              line-height:50px"
				           >
			        </div>
			        <div class="ib" style="width: 0;margin-left:4px; height: 0; border:4px solid transparent; border-top-color: #000;"></div>
			      </a>
		      </nav>

		      <div id="loginbox" class="hide popup" style="top:50px">
			      <a class="padlr" href="">Profile</a>

			      <a class="padlr" href="">Main page</a>
			      <a class="padlr" href="">Cluster</a>
			      <a class="padlr" href="">Django admin</a>
			    <a class="padlr" href="">Files</a>
			    <a class="padlr" href="">Celery</a>
			<a class="padlr" href="">Nginx</a>
			<a class="padlr" href="">Updates</a>


			<a id="exit" class="padlr" href="">Выход</a>

			<a class="padlr" href="">Войти</a>

		  </div>
		</div>

	  </div>
	</div>
  </div>
</div>
</template>



<script>
// import cash from 'materialize-css/js/cash';
// import M from 'materialize-css/js/sidenav';
// import M from 'materialize-css/dist/js/materialize.min';

module.exports = {
  computed: {
    menu2() {
      return this.$store.state.menu;
    },
  },

  methods: {
    sidenav() {
      // sidenav-trigger
      // alert('a');
      document.querySelector('div.sidenav').classList.toggle('d-none');
    },
    menuItemSelect(url) {
      this.$store.commit('selectMenuItem', url);
    },
  },

  data() {
    return {
      // current: '/',
      menu: ['/', '/faq', '/pay', '/contacts'],
      menu_items: {
        '/': {
          title: 'Главная',
        },
        '/faq': {
          title: 'Вопросы',
        },
        '/pay': {
          title: 'Оплата',
        },
        '/contacts': {
          title: 'Контакты',
        },
      },
    };
  },
  created() {
    // const elem = document.querySelector('.sidenav');
    // const instance = M.Sidenav.init(elem, {});
    // M.Sidenav.init(elem, {});

    // `this` указывает на экземпляр vm
    // console.log('Значение a: ' + this.$route.path)
    // this.$store.commit('selectMenuItem', this.$route.path);
  },
};
</script>


<style lang="scss">
$h: 50px;
div.nav{
  position:fixed;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
}
nav {
  a {
    display: block;
    line-height:$h;
    height: $h;
    color: white;
    padding:0 0.5rem;

    i {
      line-height:$h !important;
      height: $h;
    }


		&:visited{
			color: white;
		}

  }
	li {
		$col: #535a60;
		color: $col;
		height: $h;
		line-height:$h;
		/* min-width: 50px; */

    &:hover{
			/* color:darken($col, 100%); */
      color: white;
			/* background-color: #eee; */
      background-color: lighten(#4078c0, 5%);
		}

    &.active {
      /* #4078c0 */
			/* border-bottom: 3px solid #F48024; */
			background-color: darken(#4078c0, 10%);
		}

		// transition: all 0.1s linear;
		transition: background-color cubic-bezier(.165, .84, .44, 1) .25s,border-bottom-color ease-in-out .25s;

		// &:first-child{
		  // 	padding-left:0
		                     // }

	}
}
</style>
