<template>
    <section id="delivery" class="md:mt-[4.3rem] mt-[3.8125rem] bg-athens-gray">
        <div class="container flex flex-col gap-y-4 pt-[4.4375rem] pb-[6.25rem]">
            <div class="bg-white rounded-lg w-full flex flex-col items-center shadow-defenderr md:py-20 md:px-0 pt-10 pb-[6.25rem] px-9">
                <p class="md:text-[1.6875rem] text-xl pb-2.5">{{ $t('delivery.worldwide_shipping') }}</p>
                <p class="text-cape-cod text-center">{{ $t('Срок доставки рассчитываются индивидуально') }}</p>
                <div class="flex md:gap-x-9 gap-x-4 py-20">
                    <img src="/i/icons/cdek-i.svg" class="w-[4.8125rem]" alt="">
                    <img src="/i/icons/dhl-i.svg" class="w-[6.375rem]" alt="">
                    <img src="/i/icons/fedex-i.svg" class="w-16" alt="">
                </div>
                <div class="flex md:flex-row flex-col gap-x-[6.25rem] md:gap-y-0 gap-y-[3.125rem]">
                    <div class="flex flex-col items-center">
                        <p class="text-sm pb-2.5">
                            <span class="text-3xl font-light">3-6</span>
                            {{ $t('delivery.business_days') }}
                        </p>
                        <p class="text-sm font-semibold">{{ $t('delivery.shipping_times') }}</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="text-sm pb-2.5">
                            <span class="text-3xl font-light">7-14</span>
                            {{ $t('delivery.business_days') }}
                        </p>
                        <p class="text-sm font-semibold">{{ $('delivery.foreign_countries') }}</p>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg w-full flex flex-col items-center shadow-defenderr md:py-20 pt-10 pb-[6.25rem]">
                <p class="text-[1.6875rem] md:pb-20 pb-[3.125rem]">{{ $t('delivery.order_payment') }}</p>
                <div class="flex md:flex-row flex-col gap-x-[6.25rem] md:gap-y-0 gap-y-[3.125rem]">
                    <div class="flex items-center flex-col">
                        <img src="/i/icons/chat-check-i.svg" alt="">
                        <p class="text-sm font-semibold pt-5 pb-2.5">{{ $t('delivery.payment_for_order') }}</p>
                        <p class="text-xs">
                            Оплата за заказ на сайте осуществляется <br>
                            <span class="font-semibold">после оформления</span> заявки менеджером
                        </p>
                    </div>
                    <div class="flex items-center flex-col">
                        <img src="/i/icons/globe-i.svg" alt="">
                        <p class="text-sm font-semibold pt-5 pb-2.5">{{ $t('delivery.collaboration') }}</p>
                        <p class="text-xs text-center">
                            При покупке от <span class="font-semibold">10 машинок <br>
                            или 100 упаковок картриджей</span> мы заключаем <br>
                            сотрудничество на выгодных условиях
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {onMounted, ref} from "vue";
import useHelper from "../composables/useHelper";

const {isDesktop, isHandheld, isMobile} = useHelper()

onMounted(() => {
    //
})
</script>

<style lang="scss">

</style>
