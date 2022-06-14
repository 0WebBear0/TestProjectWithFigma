<template>
  <div class="admin-panel">
    <Sidebar/>
    <div class="base-place">
      <BaseContent class="base-place__component"/>
      <div class="base-place__footer">
        <div>BERYL © 2020 Все права защищены</div>
        <div class="base-place__component-following">
          <div>Следите за нами:</div>
          <IconTwitter/>
          <IconFaceboke/>
          <IconInstagram/>
          <IconYoutube/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from "~/components/UI/Sidebar";
import BaseContent from "~/components/UI/BaseContent";
import IconTwitter from "~/components/icons/IconTwitter";
import IconFaceboke from "~/components/icons/IconFaceboke";
import IconInstagram from "~/components/icons/IconInstagram";
import IconYoutube from "~/components/icons/IconYoutube";
export default {
  name: 'IndexPage',
  components: {IconYoutube, IconInstagram, IconFaceboke, IconTwitter, BaseContent, Sidebar},
}
</script>

<style scoped lang="scss">
@import "assets/constants";

.admin-panel{
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  padding-left: 60px;
  padding-right: 60px;
}
.base-place{
  height: 100%;
  width: 100%;
  margin-left: clamp(0px,3vw,53px);
  display: flex;
  flex-direction: column;

  &__component{
    width: 100%;
    margin-bottom: clamp(0px,4vw,60px);

    &-following{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: clamp(0px,1vw,14px);
    }
  }
  &__footer{
    margin-right: 62px;

    color: rgb($white-color, 0.4);

    width: 100%;
    margin-bottom: 40px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (max-width: 1080px) {
  .admin-panel{
    padding-left: 20px;
    padding-right: 20px;
  }
  .base-layout{
    background: none;
    width: 100%;
  }
}

@media (max-width: 360px) {
  .admin-panel{
    padding-left: 5px;
    padding-right: 5px;
  }
  .base-layout{
    background: none;
    width: 100%;
  }
  .base-place{
    display: flex;
    flex-direction: column;
    &__footer{
      margin-right: 20px;

      color: rgb($purple-color, 0.4);

      width: 100%;
      margin-bottom: 40px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

</style>
