<template>
<div class="marb">
  <h1>Экзамены</h1>
  <!-- background-image:url(73623d46c165671dbf4c8315df0198ce650f51c9); -->
  <div style="background-size: 100px;
			  min-height:128px;
			  background-position: 0px 0px;
			  padding-left:120px;
			  background-repeat: no-repeat;
			  background-image: url(noun_176197_cc.png);
			  ">
	<p>Индивидуальная подготовка к ОГЭ и ЕГЭ по <b>информатике</b> и <b>математике</b>.</p>
	<ul>
	  <li>регулярные занятия до экзамена</li>
	  <li>удобное для Вас расписание</li>
	  <li>индивидуально (без групп)</li>
	</ul>
	<p>Запись по телефону: <b>{{$store.state.phone}}</b></p>
  </div>
</div>
</template>


<script>
module.exports = {
  methods: {
    handleIt() {
      // alert('hgjfhgjf');
    },
  },

  data() {
    return {
      items: [
        {
          title: 'Главная',
        },
        {
          title: 'Вопросы',
        },
        {
          title: 'Оплата',
        },
        {
          title: 'Контакты',
        },
      ],
    };
  },
};
</script>
