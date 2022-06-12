<template>
  <div class="header">
    <IconLogo/>
    <div class="header__weather">
      <IconWeather/>

      <div class="header__weather-text">
        <div class="text-base text-light">Казань +16</div>

        <div class="text-little text-light">Облачно с прояснениями</div>
      </div>
    </div>

    <div class="header__rate">

      <div class="header__rate-main">
        <div class="text-light">USD / RUB</div>
        <div class="header__rate-main__bottom">
          <div class="text-light">+0,05</div>
          <IconRate/>
        </div>
      </div>
      <div class="header__rate-selector"></div>

      <div class="header__rate-main">
        <div class="text-light text-center">71,25</div>
        <div class="header__rate-main__bottom">
          <div class="text-light text-little" style="opacity: 0.6">Продажа</div>
        </div>
      </div>

      <div class="header__rate-main">
        <div class="text-light text-center">70,55</div>
        <div class="header__rate-main__bottom">
          <div class="text-light text-little" style="opacity: 0.6">Покупка</div>
        </div>
      </div>

    </div>

    <div class="header__user-layout">
      <div class="header__user-item">
        <IconBell/>
        <div class="text-light">+3</div>
      </div>

      <div class="header__user-item">
        <IconGuard/>
        <div class="text-light">+6</div>

      </div>

      <IconMessage/>

      <div class="text-light">Профиль Папа</div>

      <div>
        <IconUser/>
        <IconTriangle/>
      </div>
    </div>
  </div>
</template>

<script>
import IconLogo from "~/components/icons/IconLogo";
import IconWeather from "~/components/icons/IconWeather";
import IconRate from "~/components/icons/IconRate";
import IconBell from "~/components/icons/IconBell";
import IconGuard from "~/components/icons/IconGuard";
import IconMessage from "~/components/icons/IconMessage";
import IconUser from "~/components/icons/IconUser";
import IconTriangle from "~/components/icons/IconTriangle";
export default {
  name: "Header",
  components: {IconTriangle, IconUser, IconMessage, IconGuard, IconBell, IconRate, IconWeather, IconLogo},
}
</script>

<style scoped lang="scss">
.header{

  display: flex;
  padding: 24px 60px 27px 60px;

  justify-content: space-between;

  &__weather{
    display: flex;
    flex-direction: row;
    gap: 15px;
    &-text{
      display: flex;
      flex-direction: column;
    }
  }

  &__rate{

    border: 1px solid #FFFFFF44;
    border-radius: 4px;
    display: flex;
    flex-direction: row;

    &-main{
      display: flex;
      flex-direction: column;
      padding: 11px;

      &__bottom{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 5px;
      }
    }
    &-selector{
      opacity: 0.2;
      border: 0.5px solid #EFF1FC;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  &__user{
    &-layout{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 25px;
    }
    &-item{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3px;
    }
  }
}
</style>
