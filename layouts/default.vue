<template lang="pug">
  v-app
    Navbar
    v-content
      nuxt
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "assets/styles/style";
</style>

