<template lang="pug">
  section.profit
    .profit__col
      h3 Доходность
      p Средняя доходность топ-100 трейдеров платформы social trading-230 процентов
      hr.hr
      h3 Риск
      p Риск. Сложные расчёт выраженный в простых числах.
      hr.hr
      h3 Популярность
      p Совокупная сумма инвестиций 5 млрд доллоров.
    .profit__col.graph
      .graph__media
        figure.user
          img.user-img(src="@/assets/img/user_pic.png" alt="user liteforex")
          figcaption.user-name @ColbyMartin
        p.graph__profit Доходность
          br
          span 220,90%
      .graph__curve
        img.curve-img(src="@/assets/img/curve.svg" alt="user liteforex")
      .graph__info
        .info__data
          p Копируют
            br
            span 29
        .info__data
          p В управлении
            br
            span ~ 25 000 USD
        .info__data
          p Риск
            br
            span 4
    .profit__col
      h3 Количество инвесторов
      p Количество инвесторов. Совокупная количество активных инвесторов более 50000
      hr.hr
      h3 Срок торговли
      p Срок торговли. Более 150 трейдеров с торговой историей более 7 лет
      hr.hr
      h3 Динамика
      p Продвинутый график доходности с возможностью технического анализа.

</template>

<script>
export default {
  name: "profit"
}
</script>

<style lang="scss" scoped>
@import "assets/styles/components/profit";
</style>
