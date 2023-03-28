<script>

import AppNav from "./components/AppNav.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";


export default {
  data() {
    return {

    }
  },
  components: {
    AppNav,
    AppMain,
    AppFooter
  }
}
</script>

<template>
  <AppNav></AppNav>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped></style>