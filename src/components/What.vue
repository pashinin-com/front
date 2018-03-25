<template>
<div class="martb">
  <h2 class="center">С чем можно обращаться?</h2>
  <div class="info d-flex flex-column">
    <h2>Экзамены</h2>
    <div class="item" style="
			                       background-position: left top;
                             padding-left:110px;
                             min-height:100px;
			                       background-repeat: no-repeat;
			                       background-image: url(static/img/exam.svg);
			                       ">
	    <p>Индивидуальная подготовка к ОГЭ и ЕГЭ по <b>информатике</b> и <b>математике</b>.</p>
	    <ul>
	      <li>регулярные занятия до экзамена</li>
	      <li>удобное для Вас расписание</li>
	      <li>индивидуально (без групп)</li>
	    </ul>
	    <p>Запись по телефону: <b>{{$store.state.phone}}</b></p>
    </div>

    <div>
      <h2>Технологии</h2>
      <div class="d-flex flex-justify-around flex-wrap">
        <div class="item center lng" style="background-image: url(static/img/Python-logo-notext.svg);">
          Python
        </div>
        <div class="item center lng" style="background-image: url(static/img/Unofficial_JavaScript_logo_2.svg);">
          Javascript
        </div>
        <div class="item center lng" style="background-image: url(static/img/ISO_C++_Logo.svg);">
          C++
        </div>
        <div class="item center lng" style="background-image: url(static/img/Gnu-octave-logo.svg);">
          <p>MATLAB</p>
          <p>Octave</p>
        </div>
        <div class="item center lng" style="background-image: url(static/img/delphi.svg);">
          <p>Delphi</p>
          <p>Pascal</p>
        </div>
        <div class="item center lng" style="background-image: url(static/img/misc.svg);">
          <p>Другое...</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<style lang="scss">
h2{
  font-weight: 300;
}
div.item {
  /* padding-top:1rem; */
  padding-bottom:1rem;
  margin-bottom:1em;
  min-width: 100px;
}
div.lng {
  /* border: 1px solid red; */
  background-size: 100px;
  width: 130px;
  flex-basis: 130px;
  flex-grow:0;
	background-position: center top;
  min-height:100px;
  padding-top:120px;
	background-repeat: no-repeat;
  color: #666;
}
</style>
