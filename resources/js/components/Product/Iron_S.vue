<template>
    <MachineChoose/>
    <section id="benefits">
        <div class="container">
            <div class="lg:border-y md:border-y-0 border-y border-mercury w-full lg:flex grid md:grid-cols-2 md:place-items-center md:gap-y-[4.375rem] gap-y-[3.75rem] lg:gap-y-0 lg:bg-white md:bg-athens-gray items-center justify-between my-[4rem] py-[4rem] lg:px-[3.125rem] px-6">
                <div class="flex lg:w-auto md:w-[13rem] items-center">
                    <div class="relative rounded-[0.625rem] w-[3.125rem] h-[3.125rem] lg:bg-athens-gray md:bg-white bg-athens-gray">
                        <img src="/i/icons/iron_s-benefits-1.svg" class="absolute left-1/2 -translate-x-1/2 top-0 w-[3rem]" alt="">
                    </div>
                    <div class="flex flex-col pl-5" v-html="$t('iron_s.benefits.1')"></div>
                </div>
                <div class="flex lg:w-auto md:w-[13rem] items-center">
                    <div class="relative rounded-[0.625rem] w-[3.125rem] h-[3.125rem] lg:bg-athens-gray md:bg-white bg-athens-gray">
                        <img src="/i/icons/needle-i.svg" class="absolute left-1/2 top-0 -translate-x-1/2 w-[3.125rem]" alt="">
                    </div>
                    <div class="flex flex-col pl-5" v-html="$t('iron_s.benefits.2')"></div>
                </div>
                <div class="flex lg:w-auto md:w-[13rem] items-center">
                    <div class="relative rounded-[0.625rem] w-[3.125rem] h-[3.125rem] lg:bg-athens-gray md:bg-white bg-athens-gray">
                        <img src="/i/icons/ruby-benefits-2.svg" class="absolute-center w-[1.5rem]" alt="">
                    </div>
                    <div class="flex flex-col pl-5" v-html="$t('iron_s.benefits.3')"></div>
                </div>
                <div class="flex lg:w-auto md:w-[13rem] items-center">
                    <div class="relative rounded-[0.625rem] w-[3.125rem] h-[3.125rem] lg:bg-athens-gray md:bg-white bg-athens-gray">
                        <img src="/i/icons/lightning-i.svg" class="absolute-center w-[0.875rem]" alt="">
                    </div>
                    <div class="flex flex-col pl-5" v-html="$t('iron_s.benefits.4')"></div>
                </div>
            </div>
        </div>
    </section>
    <section id="characteristics">
        <div class="container">
            <div class="md:flex hidden lg:flex-row flex-col flex-col-reverse items-center gap-x-[6.25rem] lg:mb-[9.0625rem] mb-[6.25rem]">
                <img :src="product.characteristicImagePath" class="w-[37.5rem] mt-[6.4375rem] lg:mt-0" alt="">
                <div class="lg:w-[31.25rem] w-[33rem]">
                    <p class="text-[2.0625rem] font-medium">{{ $t('product.characteristics') }}</p>
                    <p class="uppercase">{{ product.shortName }}</p>
                    <div class="mt-10">
                        <div class="group" v-for="(value, key) in characteristics[$i18n.locale].iron_s">
                            <div class="w-full flex justify-between border-b border-b-cod-gray group-hover:border-b-azure-radiance animated-1 pt-5 pb-1">
                                <p class="text-base leading-[1.3] group-hover:text-azure-radiance animated-1">{{ key }}</p>
                                <p class="text-sm leading-[1.3] group-hover:text-azure-radiance animated-1">{{ value }}</p>
                            </div>
                        </div>
                    </div>
                    <p class="mt-10 text-azure-radiance text-sm lg:hidden md:flex items-center justify-center">More info <img src="/i/icons/blue-plus-circle-i.svg" class="w-6 h-6 ml-1.5" alt=""></p>
                </div>
            </div>
        </div>
    </section>
    <section id="description">
        <div class="container">
            <div class="lg:flex items-center justify-between md:hidden gap-x-[6.25rem] mb-[12.5rem]">
                <div class="lg:min-w-[37.5rem] lg:h-[37.5rem] min-w-[21.4375rem] h-[21.4375rem] mx-auto bg-athens-gray bg-cover bg-center bg-no-repeat" :style="{'background-image': `url(${product.descriptionImagePath})`}"></div>
                <div class="px-6 md:px-0">
                    <p class="text-cape-cod text-[2.0625rem] pb-10 pt-[3.125rem] px-6 md:px-0">{{ product.shortName }}</p>
                    <div class="px-6 md:px-0" v-html="$t('iron_s.description')"></div>
                </div>
            </div>
        </div>
    </section>
    <section id="features">
        <div class="container">
            <div class="mb-[10.0625rem] lg:block md:hidden">
                <p class="text-center lg:text-[2.0625rem] text-[1.6875rem] lg:pb-[6.375rem] pb-[3.75rem]">{{ $t('product.features', { name: product.shortName }) }}</p>
                <div class="flex lg:flex-row flex-col justify-center gap-x-[12.5rem] lg:gap-y-0 gap-y-[5.125rem]">
                    <div class="flex flex-col items-center text-center">
                        <img src="/i/icons/diamond-features-1.svg" alt="">
                        <p class="pt-[1.9375rem] pb-4 font-semibold">{{ $t('iron_s.features.1.title') }}</p>
                        <p class="text-xl text-cape-cod" v-html="$t('iron_s.features.1.text')"></p>
                    </div>
                    <div class="flex flex-col items-center text-center">
                        <img src="/i/icons/iron_s-features-2.svg" alt="">
                        <p class="pt-[1.9375rem] pb-4 font-semibold">{{ $t('iron_s.features.2.title') }}</p>
                        <p class="text-xl text-cape-cod" v-html="$t('iron_s.features.2.text')"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="capabilities">
        <div class="bg-athens-gray lg:flex md:hidden lg:my-[4rem]">
            <div class="container lg:py-[4rem] py-[5.5rem] flex lg:flex-row flex-col items-center lg:gap-y-0 gap-y-20 justify-between">
                <div class="flex flex-col items-center">
                    <div class="w-[9.375rem] h-[9.375rem] bg-white rounded-[1.25rem] m-0 relative">
                        <img src="/i/icons/benefits-1-i.svg" class="absolute-center w-[6.375rem]" alt="">
                    </div>
                    <p class="pt-5 text-center font-semibold" v-html="$t('iron_s.capabilities.1')"></p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-[9.375rem] h-[9.375rem] bg-white rounded-[1.25rem] m-0 relative">
                        <img src="/i/icons/diamond-capabilities-2.svg" class="absolute-center w-[4.8125rem]" alt="">
                    </div>
                    <p class="pt-5 text-center font-semibold" v-html="$t('iron_s.capabilities.2')"></p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-[9.375rem] h-[9.375rem] bg-white rounded-[1.25rem] m-0 relative">
                        <img src="/i/icons/ruby-capabilities-3.svg" class="absolute-center w-[3.375rem]" alt="">
                    </div>
                    <p class="pt-5 text-center font-semibold" v-html="$t('iron_s.capabilities.3')"></p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-[9.375rem] h-[9.375rem] bg-white rounded-[1.25rem] m-0 relative">
                        <img src="/i/icons/benefits-4-i.svg" class="absolute-center w-[4.4375rem]" alt="">
                    </div>
                    <p class="pt-5 text-center font-semibold" v-html="$t('iron_s.capabilities.4')"></p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-[9.375rem] h-[9.375rem] bg-white rounded-[1.25rem] m-0 relative">
                        <img src="/i/icons/benefits-2-i.svg" class="absolute-center w-[4.1875rem]" alt="">
                    </div>
                    <p class="pt-5 text-center font-semibold" v-html="$t('iron_s.capabilities.5')"></p>
                </div>
            </div>
        </div>
    </section>
    <MachineDocs/>
</template>

<script setup>
import {computed, onMounted} from "vue";
import useHelper from "../../composables/useHelper";
import useProduct from "../../composables/useProduct";
import MachineChoose from "./MachineChoose.vue";
import MachineDocs from "./MachineDocs.vue"
import characteristics from "./characteristics.json"

const {isDesktop, isHandheld, isTablet, isMobile} = useHelper()
const {
    product
} = useProduct()

onMounted(() => {
    //
})
</script>

<style lang="scss">
//
</style>
