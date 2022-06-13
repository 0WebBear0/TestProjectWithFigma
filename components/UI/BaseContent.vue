<template>
  <div class="base-content">
    <div class="base-content__balance">
      <div class="base-content__balance-your">
        <div class="font-weight-bold text-dark text-size30">Ваш баланс</div>

        <div class="base-content__balance-your_danger">
          <div class="text-red">На счету не достаточно средств</div>
          <IconDanger/>
        </div>
      </div>
      <div class="base-content__balance-score">
          <div class="base-content__item-row">
            <IconBalance/>
            <div
              style="padding-left: 24px"
              class="text-size40 text-dark font-weight-bold"
            >
              209,30 P
            </div>
          </div>

          <div class="base-content__item-row">
            <div class="base-content_btn1">Временный кредит</div>
            <div class="base-content_btn2">
              <div>Пополнить счёт</div>
              <IconPlus/>
            </div>
          </div>
      </div>
    </div>

    <div class="base-content__payment-info" style="margin-bottom: 40px">
      <div class="base-content__item">
        <div>Договор</div>
        <div class="text-purple text-size20 font-weight-bold">661-00-15</div>
      </div>

      <div class="base-content__item">
        <div>Автоплатёж:</div>
        <div class="text-purple text-size20 font-weight-bold">Включён</div>
      </div>

      <div class="base-content__item">
        <div>Ежемесячный платёж:</div>
        <div class="text-dark text-size20 font-weight-bold">550,00 р</div>
      </div>

      <div class="base-content__item">
        <div>Следуйщий платёж:</div>
        <div class="text-dark text-size20 font-weight-bold">20.06.20</div>
      </div>

      <div class="base-content__item">
        <div>Сумма к оплате:</div>
        <div class="text-dark text-size20 font-weight-bold">341,00 р</div>
      </div>
    </div>

    <div class="base-content__bonus" style="margin-bottom: 80px">
      <div class="base-content__bonus-program">
        <div class="text-dark text-size20" style="margin-bottom: 24px">Бонусная программа</div>
        <div style="margin-bottom: 32px">
          При оплате от <b>2000</b> до <b>3000</b>
          рублей вы получаете <span class="text-purple font-weight-bold">2%</span>,
          от <b>3001</b> до <b>4000</b> рублей – <span class="text-purple font-weight-bold">3%</span>,
          от <b>4001</b> рублей – <span class="text-purple font-weight-bold">4%</span> от суммы платежа на бонусный счёт.
        </div>
        <div class="base-content_btn1 w-75">Узнать подробнее</div>
      </div>

      <div class="base-content__bonus-gray">
          *В случае если Ваше подключение было заблокировано,
          с момента поступления денежных средств на Лицевой счёт
          в полном объёме разблокировка произойдет в течение 1 (одного) часа.
      </div>
    </div>

    <div class="base-content__detail">
      <div class="base-content__detail-header" style="margin-bottom: 46px;">

          <div class="text-size30 text-dark">Детализация</div>

          <div class="base-content__item-row base-content__detail-header_right">
            <div>Смотреть по датам</div>

            <div class="base-content__item-row base-content__detail-header_all-time">
              <div>За всё время</div>
              <IconLitleArrow/>
            </div>

            <div class="base-content_btn1 font-weight-bold" style="padding: 10px 16px; margin: 0">Отправить на E-mail</div>
          </div>
      </div>

      <div class="base-content__detail-body" style="margin-bottom: 40px;">
        <div class="base-content__item-row base-content__detail-body_row-light">
          <div class="font-weight-bold base-content__detail-body-item">Дата</div>
          <div class="font-weight-bold base-content__detail-body-item">Денежная операция</div>
          <div class="font-weight-bold base-content__detail-body-item">Сумма. руб.</div>
          <div class="font-weight-bold base-content__detail-body-item">Остаток. руб.</div>
        </div>

        <!--copy past-->
        <div class="base-content__item-row base-content__detail-body_row-dark">
          <div class="base-content__detail-body-item">07.05.2020   00:05:07</div>
          <div class="base-content__detail-body-item">Абонентская плата</div>
          <div class="base-content__detail-body-item text-red">-558,61</div>
          <div class="base-content__detail-body-item">0</div>
        </div>

        <div class="base-content__item-row base-content__detail-body_row-light">
          <div class="base-content__detail-body-item">07.05.2020   00:05:07</div>
          <div class="base-content__detail-body-item">Оплата через Сбербанк</div>
          <div class="base-content__detail-body-item text-green">+558,61</div>
          <div class="base-content__detail-body-item">558,61</div>
        </div>

        <div class="base-content__item-row base-content__detail-body_row-dark">
          <div class="base-content__detail-body-item">07.05.2020   00:05:07</div>
          <div class="base-content__detail-body-item">Абонентская плата</div>
          <div class="base-content__detail-body-item text-red">-558,61</div>
          <div class="base-content__detail-body-item">0</div>
        </div>

        <div class="base-content__item-row base-content__detail-body_row-light">
          <div class="base-content__detail-body-item">07.05.2020   00:05:07</div>
          <div class="base-content__detail-body-item">Оплата через Сбербанк</div>
          <div class="base-content__detail-body-item text-green">+558,61</div>
          <div class="base-content__detail-body-item">558,61</div>
        </div>

        <div class="base-content__item-row base-content__detail-body_row-dark">
          <div class="base-content__detail-body-item">07.05.2020   00:05:07</div>
          <div class="base-content__detail-body-item">Абонентская плата</div>
          <div class="base-content__detail-body-item text-red">-558,61</div>
          <div class="base-content__detail-body-item">0</div>
        </div>

        <div class="base-content__item-row base-content__detail-body_row-light">
          <div class="base-content__detail-body-item">07.05.2020   00:05:07</div>
          <div class="base-content__detail-body-item">Оплата через Сбербанк</div>
          <div class="base-content__detail-body-item text-green">+558,61</div>
          <div class="base-content__detail-body-item">558,61</div>
        </div>
        <!--copy past-->

      </div>
      <div class="base-content__detail-paginator">
        <div class="base-content__detail-paginator__item-selected text-white">1</div>
        <div class="base-content__detail-paginator__item">2</div>
        <div class="base-content__detail-paginator__item">3</div>
        <div><b>...</b></div>
        <div class="base-content__detail-paginator__item">8</div>
      </div>
    </div>
  </div>
</template>

<script>
import IconDanger from "~/components/icons/IconDanger";
import IconBalance from "~/components/icons/IconBalance";
import IconPlus from "~/components/icons/IconPlus";
import IconLittleArrow from "~/components/icons/IconLittleArrow";
export default {
  name: "BaseContent",
  components: {IconLittleArrow, IconPlus, IconBalance, IconDanger}
}
</script>

<style scoped lang="scss">
@import "assets/constants";

.base-content{
  width: 100%;
  height: 100%;
  background-color: $white-color;
  border-radius: 10px;
  padding: 60px;

  display: flex;
  flex-direction: column;

  //content
  &__balance{
    display: flex;
    flex-direction: column;

    &-your{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 32px;

      &_danger{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        gap: 5px;
      }
    }

    &-score{
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      padding-bottom: 43px;

    }

  }

  &__payment-info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border: 1px solid #00000033;
    border-radius: 10px;
    padding: 33px 40px;
  }

  &__bonus{
    display: flex;
    flex-direction: row;
    width: 100%;
    &-program{
      display: flex;
      flex-direction: column;
      padding-left: 26px;
      border-color: $purple-color;
      border-left-style: solid;
    }

    &-gray{
      display: flex;
      flex-direction: column;
      width: 75%;

      padding: 30px 34px;
      background: #29292922;
      border-radius: 2px;


      line-height: 160%;
    }
  }

  &__detail{

    display: flex;
    flex-direction: column;

    &-header{
      display: flex;
      flex-direction: row;
      align-items: center;

      justify-content: space-between;

      &_right{
        display: flex;
        gap: 12px;
      }

      &_all-time{
        display: flex;
        margin-right: 30px;
        color: $purple-color;
        font-weight: bold;
        gap: 8px;
      }
    }

    &-body{
      display: flex;
      flex-direction: column;

      &-item{
        flex: 1;
      }
      &_row-dark{
        padding: 17px 40px;

        background: #5E72D422;
        border-radius: 4px;
      }
      &_row-light{
        padding: 17px 40px;
      }
    }

    &-paginator{
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 10px;
      align-items: center;

      &__item{
        background: rgb($purple-color, 0.1) ;
        border-radius: 4px;
        padding: 18px 24px;
        font-weight: bold;
      }

      &__item-selected{
        background: $purple-color;
        border-radius: 4px;
        padding: 18px 24px;
        font-weight: bold;
      }
    }
  }

  //helpers
  &__item{
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  &__item-row{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &_btn1{
    border: 1px solid $purple-color;
    border-radius: 10px;
    color: $purple-color;

    padding: 16px 27px;
    margin-right: 16px;
    display: flex;
    justify-content: center;
  }
  &_btn2{
    border: 1px solid $purple-color;
    border-radius: 10px;
    color: $white-color;
    background-color: $purple-color;

    padding: 16px 18px 16px 27px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 13px;

  }
}
</style>
