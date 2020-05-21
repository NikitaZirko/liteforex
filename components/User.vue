<template lang="pug">
  section.users
    .user__col
      img.user__img(src="@/assets/img/user_pic_2.png" alt="user liteforex")
      .users__nav
        img.icon-left(src="@/assets/img/shevron_left.svg" alt="icon shevron-left")
        img.icon-right(src="@/assets/img/shevron_right.svg" alt="icon shevron-right")
    .user__col
      p.user__description I'm professional trader for 7 years. Copy my acc if you're interested in stable passive income. One acc is for investors who has more than 5k and the other acc is for those who want to start with less capital. Strategy for accounts is based on the risk so the results also are different on each. Hit me a message before the start if you have some questions.
      p.user__tag @ProCapitalTrust
      p.user__name Michal Wrzeszcz
      p.user__profitability Profitability
      p.user__profitability__percent 102.10 %


</template>

<script>
export default {
  name: "user"
}
</script>

<style lang="scss" scoped>
@import "assets/styles/components/user";
</style>
