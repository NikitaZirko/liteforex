<template lang="pug">
  section.v-container
    .header
      h2.title.header__sup-title LiteForex Social Trading
      h1.title.header__title Лучший сервис инвестиций.

    .social-trading
      img.social-trading-img(src="@/assets/img/main_pic.png" alt="liteforex panel")
      p.social-trading-text <span>Social trading</span> создан для тех кто ищет максимальную прибыль и минимальный риск. Богатый выбор управляющих, и невероятный контроль над инвестициями и возможность общения с трейдерами. Инновационная платформа для начинающих и профессиональных инвесторов.
      v-btn.social-trading-btn(rounded) Регистрация

    profit

</template>

<script>
import Profit from "@/components/Profit";
export default {
  components: {
    Profit
  }
};
</script>

<style lang="scss" scoped>
@import "assets/styles/pages/home";
</style>

