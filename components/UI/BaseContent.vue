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
              209,30 &#8381
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

    <div class="base-content__balance-mobile">
      <div class="base-content__balance-your">

        <div class="font-weight-bold text-dark text-size20" style="padding-bottom: 20px">Ваш баланс</div>

        <div style="display: flex; align-items: center; flex-direction: column; gap:20px;">
          <div class="base-content__item-row-balance">
            <IconBalance/>
            <div
              style="padding-left: 24px"
              class="text-size30 text-dark font-weight-bold"
            >
              209,30 &#8381
            </div>
          </div>

          <div class="base-content__balance-your_danger">
            <div class="text-red">На счету не достаточно средств</div>
            <IconDanger/>
          </div>
        </div>

      </div>

      <div class="base-content__balance-score">
        <div class="base-content__item-row">
          <div class="base-content_btn1">Временный кредит</div>

          <div class="base-content_btn2">
            <div>Пополнить счёт</div>
            <IconPlus/>
          </div>
        </div>
      </div>
    </div>

    <div class="base-content__payment-info">
      <div class="base-content__item">
        <div>Договор</div>
        <div class="text-purple text-size20 font-weight-bold">661-00-15</div>
      </div>
      <div class="selector display-none"></div>

      <div class="base-content__item">
        <div>Автоплатёж:</div>
        <div class="text-purple text-size20 font-weight-bold">Включён</div>
      </div>
      <div class="selector display-none"></div>

      <div class="base-content__item">
        <div>Ежемесячный платёж:</div>
        <div class="text-dark text-size20 font-weight-bold">550,00 &#8381</div>
      </div>
      <div class="selector display-none"></div>

      <div class="base-content__item">
        <div>Следуйщий платёж:</div>
        <div class="text-dark text-size20 font-weight-bold">20.06.20</div>
      </div>
      <div class="selector display-none"></div>

      <div class="base-content__item">
        <div>Сумма к оплате:</div>
        <div class="text-dark text-size20 font-weight-bold">341,00 &#8381</div>
      </div>
    </div>

    <div class="base-content__bonus" >
      <div class="base-content__bonus-program">
        <div class="text-dark text-size20" style="margin-bottom: 24px"><b>Бонусная программа</b></div>
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
              <IconLittleArrow/>
            </div>

            <div class="base-content_btn1 font-weight-bold" style="padding: 10px 16px; margin: 0">Отправить на E-mail</div>
          </div>
      </div>
      <div class="base-content__detail-header_mobile display-none" style="margin-bottom: 46px;">

          <div class="text-size30 text-dark">Детализация</div>

          <div class="base-content__item-row base-content__detail-header_right">

            <div class="base-content_btn1">
              <div class="text-dark text-size14">Смотреть по датам</div>

              <div class="base-content__item base-content__detail-header_all-time">
                <div class="flex-nowrap text-size14">За всё время</div>
                <IconLittleArrow/>
              </div>
            </div>

            <div class="base-content_btn1 font-weight-bold" style="padding: 16px 20px; margin: 0">Отправить на E-mail</div>
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
      <div class="base-content__detail-body_mobile display-none" style="margin-bottom: 40px;">
        <!--start-->
        <div class="base-content__detail-box">
          <div class="base-content__item base-content__detail-body_row-light">
            <div class="font-weight-bold base-content__detail-body-item">Дата</div>
            <div class="base-content__detail-body-item">07.05.2020   00:05:07</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-dark">
            <div class="font-weight-bold base-content__detail-body-item">Денежная операция</div>
            <div class="base-content__detail-body-item">Абонентская плата</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-light">
            <div class="font-weight-bold base-content__detail-body-item">Сумма. руб.</div>
            <div class="base-content__detail-body-item text-red">-558,61</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-dark">
            <div class="font-weight-bold base-content__detail-body-item">Остаток. руб.</div>
            <div class="base-content__detail-body-item">0</div>
          </div>
        </div>
        <!-- second -->
        <div class="base-content__detail-box">
          <div class="base-content__item base-content__detail-body_row-light">
            <div class="font-weight-bold base-content__detail-body-item">Дата</div>
            <div class="base-content__detail-body-item">07.05.2020   00:05:07</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-dark">
            <div class="font-weight-bold base-content__detail-body-item">Денежная операция</div>
            <div class="base-content__detail-body-item">Оплата через Сбербанк</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-light">
            <div class="font-weight-bold base-content__detail-body-item">Сумма. руб.</div>
            <div class="base-content__detail-body-item text-red">+558,61</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-dark">
            <div class="font-weight-bold base-content__detail-body-item">Остаток. руб.</div>
            <div class="base-content__detail-body-item">558,61</div>
          </div>
        </div>
        <!--copy past-->
        <div class="base-content__detail-box">
          <div class="base-content__item base-content__detail-body_row-light">
            <div class="font-weight-bold base-content__detail-body-item">Дата</div>
            <div class="base-content__detail-body-item">07.05.2020   00:05:07</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-dark">
            <div class="font-weight-bold base-content__detail-body-item">Денежная операция</div>
            <div class="base-content__detail-body-item">Абонентская плата</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-light">
            <div class="font-weight-bold base-content__detail-body-item">Сумма. руб.</div>
            <div class="base-content__detail-body-item text-red">-558,61</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-dark">
            <div class="font-weight-bold base-content__detail-body-item">Остаток. руб.</div>
            <div class="base-content__detail-body-item">0</div>
          </div>
        </div>
        <!-- second -->
        <div class="base-content__detail-box">
          <div class="base-content__item base-content__detail-body_row-light">
            <div class="font-weight-bold base-content__detail-body-item">Дата</div>
            <div class="base-content__detail-body-item">07.05.2020   00:05:07</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-dark">
            <div class="font-weight-bold base-content__detail-body-item">Денежная операция</div>
            <div class="base-content__detail-body-item">Оплата через Сбербанк</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-light">
            <div class="font-weight-bold base-content__detail-body-item">Сумма. руб.</div>
            <div class="base-content__detail-body-item text-red">+558,61</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-dark">
            <div class="font-weight-bold base-content__detail-body-item">Остаток. руб.</div>
            <div class="base-content__detail-body-item">558,61</div>
          </div>
        </div>
        <div class="base-content__detail-box">
          <div class="base-content__item base-content__detail-body_row-light">
            <div class="font-weight-bold base-content__detail-body-item">Дата</div>
            <div class="base-content__detail-body-item">07.05.2020   00:05:07</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-dark">
            <div class="font-weight-bold base-content__detail-body-item">Денежная операция</div>
            <div class="base-content__detail-body-item">Абонентская плата</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-light">
            <div class="font-weight-bold base-content__detail-body-item">Сумма. руб.</div>
            <div class="base-content__detail-body-item text-red">-558,61</div>
          </div>
          <div class="base-content__item base-content__detail-body_row-dark">
            <div class="font-weight-bold base-content__detail-body-item">Остаток. руб.</div>
            <div class="base-content__detail-body-item">0</div>
          </div>
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

    &-mobile{
      display: none;
    }

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
    margin-bottom: 40px;
  }

  &__bonus{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 80px;

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

.display-none{
  display: none;
}

@media (max-width: 1080px) {
  .display-none{
    display: block;
  }
  .base-content{
    padding: 20px 0px;
    display: flex;
    //main block
    &__balance{
      display: none;

      &-mobile{
        display: flex;
        flex-direction: column;
      }

      &-your{
        display: flex;
        flex-direction: column;
        align-items: start;
      }
    }

    &__payment-info{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      border: 1px solid #00000033;
      border-radius: 10px;
      padding: 13px 10px;
      margin-bottom: 40px;
    }

    &__bonus {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding-bottom: 30px;

      &-gray{
        width: 100%;
        padding: 10px;
      }
    }

    &__detail{
      border-top: rgb($dark-color, 0.2);
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      &-box{
        padding: 8px 10px;
        margin: 6px;
        border: 1px solid rgb($dark-color, 0.2);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
      }

      &-header{
        display: none;
        &_mobile{
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        &_right{
          padding: 0;
        }

        &_all-time{
          display: flex;
          align-items: center;
          gap: 2px;
          padding: 0;
          margin: 0;
        }
      }

      &-body{
        display: none;
        &_mobile{
          display: flex;
          flex-direction: column;
        }
        &_row-light{
          padding: 5px 8px;
        }
        &_row-dark{
          padding: 5px 8px;
        }
      }
    }

    //helpers
    &__item-row{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      &-balance{
        display: flex;
        flex-direction: row;

      }
    }

    &_btn1{
      width: 100%;
      display: flex;
      align-items: center;
      margin-right: 0;
      gap: 5px;
    }

    &_btn2{
      width: 100%;
      display: flex;
      align-items: center;
      margin-right: 0;
      gap: 5px;
    }

    &__item{
      padding-top: 12px;
      padding-bottom: 12px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

  }
  .text-size20{
    font-size: 16px;
  }
}
</style>
