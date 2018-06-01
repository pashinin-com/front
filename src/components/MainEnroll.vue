<template>
<!-- v-bind:class="{ hide: $store.state.menu.selected !== '/' }" -->
<div>
  <!-- background:url(src/57f203b9cf1ef10a4be793b0003d2be47f1f5159.jpeg); -->
  <div id="index" class="abs2 center ib w100 text-white
                         px-2 px-sm-3 px-md-4 px-lg-5
                         py-3 py-sm-4 py-md-5 py-lg-6"
	     style="
			        background:url(static/img/bgtest.svg);
              background-color: #3068b0;
              background-position: center top;
			        ">
	  <div class="container-lg">
	    <div class="d-flex flex-column flex-justify-between flex-md-row px-2 px-sm-3 px-md-4 px-lg-5">
		    <div style="text-align:left;font-size:1.0em;">
		      <h1 class="centered-if-less-800 mt-0" style="line-height:2;">
			      Подготовка к экзаменам<br/>
			      Курсы программирования<br/>
			      Для всех
		      </h1>
		      <p class="hide-if-less-800 mb-6">
			      Программирование и другие задачи. <br/>
			      Для школьников, студентов и взрослых.
		      </p>
		    </div>
		    <div>
		      <div>
			      <div style="background:rgba(255,255,255,0.0); max-width:400px;">
			        <span class="right padb" style="font-size:1.4em"><b>{{$store.state.phone}}</b></span>
			        <form class="bg-white2 border2" id="enrollform" action="request.path" method="POST"  v-on:submit.prevent="handleIt">
				        <!-- csrf_input -->
				        <input    class="form-control  my-2" name="name" type="text" value="" placeholder="Ваше имя"/>
				        <input    class="form-control  my-2" name="phone" type="text" value="" placeholder="Skype / Телефон / Email"/>
				        <textarea class="form-control  my-2" cols="30" name="message" rows="10" placeholder="С чем помочь?" style="height:5em"></textarea>
				        <input class="btn btn-primary btn-large w100 my-2" type="submit" value="Записаться" />
			        </form>
			      </div>
		      </div>
		    </div>
	    </div>
	  </div>
  </div>
</div>
</template>


<style lang="scss">
h1 {
  font-weight: 300;
  font-size:2.2em;
}
.txtshadow{
  /* text-shadow:0 1px 1px rgba(0,0,0,1),0 10px 25px rgba(0,0,0,1);overflow:visible */
}
</style>
