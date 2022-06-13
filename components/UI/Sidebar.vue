<template>
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
    gap: 25px;
    align-items: center;
    background-color: #FFFFFF33;
    border-radius: 4px;
    padding: 8px 16px 8px 16px;
  }
}
</style>
