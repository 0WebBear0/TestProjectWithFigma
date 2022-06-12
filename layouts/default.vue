<template>
  <div class="base-layout">
    <Header/>
    <Nuxt/>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "~/components/UI/Header";

export default Vue.extend( {
  name: "default",
  components: {Header},
})
</script>

<style scoped lang="scss">
.base-layout{
  background: repeat-y url("../static/background.png");
  background-size: 100vw calc(100vw * (1610/1440));
  background-attachment: fixed;
  background-position: center top;
  z-index: -1;
}
</style>
