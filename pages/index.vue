<template lang="pug">
  section.v-container

    .header
      h2.title.header__sup-title(ref="header") LiteForex Social Trading
      h1.title.header__title(ref="header") Лучший сервис инвестиций.

    .social-trading
      .open-note
        .open-note-in(v-scroll="openNote" ref="el")
          img.note-top-panel(src="@/assets/img/panel-top.svg" alt="frame")
          img.note-top(src="@/assets/img/main_pic_1.png" alt="liteforex panel")
        img.note-bottom(src="@/assets/img/main_pic_2.png" alt="liteforex panel")
        p.social-trading-text <span>Social trading</span> создан для тех кто ищет максимальную прибыль и минимальный риск. Богатый выбор управляющих, и невероятный контроль над инвестициями и возможность общения с трейдерами. Инновационная платформа для начинающих и профессиональных инвесторов.
        v-btn.social-trading-btn(rounded) Регистрация

    component-profit

    h2.title.profit-title
      span Доходность
      br
      | Больше, чем вы ожидаете. Быстрее, чем это принято.

    figure.investor
      img.investor__img(src="@/assets/img/investor.png" alt="John Jonson")
      figcaption.investor__text John Jonson
        br
        span Инвестор из Малайзии

    .percent-profit
      img.percent-profit-img(src="@/assets/img/screen_liteforex.png" alt="liteforex panel")
      p.percent-profit-text Отслеживайте процент доходности трейдера за всё время торговли или за выбранный период. Торговую стратегию принято распределять по 3-м категориям в зависимости от показателей прибыльности. Банковский депозит - средняя доходность составляет <span>5% в месяц</span>. Доход от нвестиций в акции международных компаний как правило не превышают <span>15% в месяц</span> (на примере акций компании Apple). Средняя доходность в сервисе LiteForex Social Trading составляет <span>48% в месяц</span> (на основе показателей топ 30 трейдеров в рейтинге).

    component-user-profile

</template>

<script>
import Profit from "@/components/Profit";
import User from "@/components/User";

export default {
  components: {
    "component-profit": Profit,
    "component-user-profile": User
  },
  methods: {
    openNote: function (evt) {
      if (window.scrollY < 100) {
        console.log("1")
        this.$refs.header.setAttribute('style', `color: black;`)
        this.$refs.el.setAttribute('style', `transform: rotateX(-${9.5}deg) !important;`)
      } else if (window.scrollY > 100) {
        console.log("2")
        this.$refs.header.setAttribute('style', `color: lightgray;`)
        this.$refs.el.setAttribute('style', `transform: rotateX(${0}deg);`
        )
      }
      //return window.scrollY > 1000 // limit for destroeyd
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/styles/pages/home";
</style>

