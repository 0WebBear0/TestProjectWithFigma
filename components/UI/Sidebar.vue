<template>
  <div class="sidebar">

    <div class="sidebar__private-area">
      <div class="text-light">Личный кабинет</div>
      <IconTriangle/>
    </div>

    <div class="sidebar__item-selected">
      <IconBalance/>
      <div class="text-blue text-size18">Баланс</div>
      <IconArrow/>
    </div>

    <div class="sidebar__item">
      <div class="text-light text-size18">Услуги</div>
      <IconStock/>
    </div>

    <div class="sidebar__item">
      <div class="text-light text-size18">Акции</div>
      <IconTask/>
    </div>

    <div class="sidebar__item">
      <div class="text-light text-size18">Новости</div>
      <IconNews/>
    </div>


    <div class="sidebar__item">
      <div class="text-light text-size18">FAQ</div>
      <IconQuestion/>
    </div>

    <div class="sidebar__item">
      <div class="text-light text-size18">О нас</div>
      <IconAboutUs/>
    </div>

    <div class="sidebar__item">
      <div class="text-light text-size18">Договор</div>
      <IconContract/>
    </div>

    <div class="sidebar__item">
      <div class="text-light text-size18">Напарники</div>
      <IconSetting/>
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

export default {
  name: "Sidebar",
  components: {
    IconTriangle,
    IconStock,
    IconSetting, IconContract, IconAboutUs, IconQuestion, IconNews, IconTask, IconBalance, IconArrow}
}
</script>

<style scoped lang="scss">
@import "assets/constants";
.sidebar{
  display: flex;
  flex-direction: column;
  gap: 5px;

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
  }

  &__item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF33;
    border-radius: 4px;
    padding: 8px 16px 8px 16px;
  }
}
</style>
