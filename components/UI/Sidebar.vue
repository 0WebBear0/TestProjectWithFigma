<template>
  <div>
    <div class="sidebar">

      <div class="sidebar__private-area">
        <div class="text-light">Личный кабинет</div>
        <IconTriangle/>
      </div>

      <div class="sidebar__item-selected">
        <div class="sidebar__item-selected-balance">
          <IconBalance/>
          <div class="text-blue text-size18" style="padding-left: 4px">Баланс</div>
        </div>
        <IconArrow/>
      </div>

      <div class="sidebar__item">
        <IconStock/>
        <div class="text-light text-size18" style="padding-left: 2px">Услуги</div>
      </div>

      <div class="sidebar__item">
        <IconTask/>
        <div class="text-light text-size18" style="padding-left: 5px">Акции</div>
      </div>

      <div class="sidebar__item">
        <IconNews/>
        <div class="text-light text-size18" style="padding-left: 3px">Новости</div>
      </div>


      <div class="sidebar__item">
        <IconQuestion/>
        <div class="text-light text-size18">FAQ</div>
      </div>

      <div class="sidebar__item">
        <IconAboutUs/>
        <div class="text-light text-size18">О нас</div>
      </div>

      <div class="sidebar__item">
        <IconContract/>
        <div class="text-light text-size18">Договор</div>
      </div>

      <div class="sidebar__item">
        <IconSetting/>
        <div class="text-light text-size18">Напарники</div>
      </div>


    </div>
    <div class="sidebar-none" :class="{'sidebar-mobile': activeSidebar}">
      <div class="sidebar-mobile-helper" @click="$store.commit('menu/SET_MENU')"></div>
      <div class="sidebar-mobile__close">
        <IconPlus style="transform: rotate(45deg); margin-right: 20px" @click.native="$store.commit('menu/SET_MENU')"/>
        <div class="text-white">Закрыть</div>
      </div>

      <div class="sidebar__private-area">
        <div class="text-light">Личный кабинет</div>
        <IconTriangle/>
      </div>

      <div class="sidebar__item-selected">
        <div class="sidebar__item-selected-balance">
          <IconBalance/>
          <div class="text-blue text-size18" style="padding-left: 4px">Баланс</div>
        </div>
        <IconArrow/>
      </div>

      <div class="sidebar__item">
        <div class="sidebar__item-part">
          <IconStock/>
          <div class="text-light text-size18" style="padding-left: 2px">Услуги</div>
        </div>
        <IconWhiteArrow/>
      </div>

      <div class="sidebar__item">
        <div class="sidebar__item-part">
          <IconTask/>
          <div class="text-light text-size18" style="padding-left: 5px">Акции</div>
        </div>
        <IconWhiteArrow/>
      </div>

      <div class="sidebar__item">
        <div class="sidebar__item-part">
          <IconNews/>
          <div class="text-light text-size18" style="padding-left: 3px">Новости</div>
        </div>
        <IconWhiteArrow/>

      </div>


      <div class="sidebar__item">
        <div class="sidebar__item-part">
          <IconQuestion/>
          <div class="text-light text-size18">FAQ</div>
        </div>
        <IconWhiteArrow/>
      </div>

      <div class="sidebar__item">
        <div class="sidebar__item-part">
          <IconAboutUs/>
          <div class="text-light text-size18">О нас</div>
        </div>
        <IconWhiteArrow/>

      </div>

      <div class="sidebar__item">
        <div class="sidebar__item-part">
          <IconContract/>
          <div class="text-light text-size18">Договор</div>
        </div>
        <IconWhiteArrow/>
      </div>

      <div class="sidebar__item">
        <div class="sidebar__item-part">
          <IconSetting/>
          <div class="text-light text-size18">Напарники</div>
        </div>
        <IconWhiteArrow/>
      </div>


    </div>
  </div>
</template>

<script>
import IconArrow from "~/components/icons/IconArrow";
import IconBalance from "~/components/icons/IconBalance";
import IconTask from "~/components/icons/IconTask";
import IconNews from "~/components/icons/IconNews";
import IconQuestion from "~/components/icons/IconQuestion";
import IconAboutUs from "~/components/icons/IconAboutUs";
import IconContract from "~/components/icons/IconContract";
import IconSetting from "~/components/icons/IconSetting";
import IconStock from "~/components/icons/IconStock";
import IconTriangle from "~/components/icons/IconTriangle";
import IconWhiteArrow from "~/components/icons/IconWhiteArrow";
import IconPlus from "~/components/icons/IconPlus";

export default {
  name: "Sidebar",
  components: {
    IconPlus,
    IconWhiteArrow,
    IconTriangle,
    IconStock,
    IconSetting, IconContract, IconAboutUs, IconQuestion, IconNews, IconTask, IconBalance, IconArrow},

  computed:{
    activeSidebar(){
      return this.$store.getters["menu/getMenuInfo"]
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/constants";
.sidebar{
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 207px;

  &__private-area{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 9px 15px 9px 21px;
    margin-bottom: 24px;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
  }

  &__item-selected{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: $white-color;
    border-radius: 4px;
    padding: 8px 16px 8px 16px;

    &-balance{
      display: flex;
      gap: 20px;
      align-items: center;
    }
  }

  &__item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 25px;
    align-items: center;
    background-color: #FFFFFF33;
    border-radius: 4px;
    padding: 8px 16px 8px 16px;

    &-part{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 25px;
    }
  }
  &-none{
    display: none;
  }
}


@media (max-width: 1080px) {
  .sidebar{
    display: none;
  }
  .sidebar-none{
    display: none;
  }
  .sidebar-mobile{
    display: block;
    height: 100%;
    width: 75%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: $blue-color;
    overflow-x: hidden;
    padding-top: 20px;

    &-helper{
      height: 100%;
      width: 25%;
      position: fixed;
      z-index: 2;
      top: 0;
      right: 0;
      background-color: rgb($white-color, 0.5);
      overflow-x: hidden;
      padding-top: 20px;
    }

    &__close{
      display: flex;
      flex-direction: row;
      padding-left: 20px;
    }
  }
  .sidebar{
    &__private-area{
      margin: 10px;
    }
    &__item-selected{
      border-radius: 0;
    }
    &__item{
      border-radius: 0;
      background-color: #0000;
    }
  }
}
</style>
