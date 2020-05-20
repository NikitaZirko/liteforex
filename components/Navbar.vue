<template lang="pug">
  section.v-container
    v-app-bar.nav(color="white" flat dense height="92px")
      v-toolbar-title
        a.logo(href='#')
          img(src="@/assets/img/logo.svg" alt="logo")
      <v-spacer></v-spacer>
      ul.nav__items
        li.nav__item(v-for="(item, i) in nav" :key="i")
          nuxt-link.nav__item__link(:to="item.link") {{ item.title }}
      .nav__btns
        v-btn.nav__btn(rounded) Open account
        v-btn.nav__btn(rounded) Sign in
      .langs
        .lang__icons
          img.lang__ru(src="@/assets/img/icon_russia.svg" alt="lang")
        v-select(
          class="lang"
          v-model="lang"
          :items="langs"
          menu-props="auto"
          hide-details
          single-line)
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      nav: [
        {title: 'About us', link: "#"},
        {title: 'For Traders', link: "#"},
        {title: 'Social Trading', link: "#"},
        {title: 'Promotions', link: "#"},
        {title: 'Partnership', link: "#"},
        {title: 'Blog', link: "#"}
      ],
      langs: [
        {text: 'Ru'},
        {text: 'En'},
        {text: 'Fr'},
        {text: 'De'}
      ],
      lang: "Ru"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/styles/components/navbar";
</style>
