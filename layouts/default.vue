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
  width: 100%;
  height: clamp(100vh, 100%, 200vh);
  background: space url("../static/background.png");
  background-size: 100% 100%;
  //background-attachment: fixed;
  //background-position: center top;
  z-index: -1;
}

@media (max-width: 360px) {
  .base-layout{
    background: repeat-y url("../static/bacgroundMobile.svg");
    background-size: 100% 100%;
    background-attachment: fixed;
    background-position: center top;
    z-index: -1;
  }
}
@media (max-width: 1080px) {
  .base-layout{
    background: none;
    width: 100%;
  }
}

</style>
