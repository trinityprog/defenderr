<template>
    <section id="hero" class="md:mt-[3.8rem] mt-[3.8125rem]" v-if="randomBanner">
        <div class="container maxlg:w-screen">
            <a :href="randomBanner.link">
                <img :src="isDesktop() ? randomBanner.imagePath : randomBanner.mobImagePath" class="w-full" alt="">
            </a>
        </div>
    </section>
    <section id="popular" class="md:mt-[3.8rem] mt-[3.8125rem]" v-if="popularProducts.length">
        <div class="container maxlg:w-screen">
            <div class="">
                <h2 class="text-[2.0625rem] text-center lg:block hidden">{{ $t('index.best_selling') }}</h2>
                <h2 class="text-[1.6875rem] text-center lg:hidden pb-[3.125rem]">{{ $t('index.popular_items') }}</h2>

                <swiper
                    v-if="isHandheld()"
                    id="popular-products-swiper"
                    :modules="[Scrollbar]"
                    :direction="'horizontal'"
                    :allow-touch-move="isHandheld()"
                    :slides-per-view="isMobile() ? 2 : 4"
                    :centered-slides="false"
                    :loop="false"
                    :scrollbar="{el: '#popular-products-swiper .swiper-scrollbar'}"
                    class="h-[19rem]"
                >
                    <swiper-slide v-for="product in popularProducts" :key="product.id" @click.prevent="router.push({ name: 'product', params: { slug: product.slug } })">
                        <div class="relative w-[10rem] h-[12rem] bg-athens-gray mx-auto">
                            <img :data-src="product.imagePath" class="lazyload w-full h-[10rem] object-contain absolute-center" alt="">
                        </div>
                        <p class="flex items-center justify-center pt-6 pb-2.5 font-semibold text-sm">{{ product.name }}</p>
                        <p class="text-center">{{ product.priceWithSymbol }}</p>
                    </swiper-slide>

                    <div class="swiper-scrollbar !h-[2px]"></div>
                </swiper>

                <div v-if="isDesktop()" class="items-center gap-x-[2.25rem] mt-[4rem] flex">
                    <div v-for="product in popularProducts.slice(0, 4)" :key="product.id" @click.prevent="router.push({ name: 'product', params: { slug: product.slug } })" class="group cursor-pointer">
                        <div class="relative w-[17.0625rem] h-[20.5rem] rounded-[1.5625rem] bg-athens-gray
                                    group-hover:shadow-defenderr group-hover:bg-white animated">
                            <div class="w-[17.0625rem] h-[20.5rem]">
                                <img :data-src="product.imagePath" class="lazyload w-full h-[16rem] object-contain absolute-center" alt="">
                            </div>
                        </div>
                        <p class="flex items-center justify-center pt-6 pb-2.5 pl-8 font-semibold text-sm">
                            {{ product.name }}
                            <img src="/i/icons/arrow-right-2-i.svg" class="pl-5 opacity-0 group-hover:opacity-100 animated" alt="">
                        </p>
                        <p class="text-center">{{ product.priceWithSymbol }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="quality" class="md:mt-[3.8rem] mt-[3.8125rem]">
        <div class="container maxlg:w-screen">
            <div class="relative lg:pt-[10.625rem] pt-[3.125rem] lg:pb-[10.625rem] pb-[6.25rem] lg:bg-white bg-athens-gray">
                <img src="/i/icons/blot-i.svg" class="absolute w-[21.875rem] h-[21.0625rem] top-[-2rem] right-[-1rem] z-10 lg:block hidden" alt="">
                <img src="/i/icons/blot-mobile-i.svg" class="absolute w-[23.4375rem] h-[36.875rem] top-[-2rem] right-[-1rem] z-1 lg:hidden" alt="">
                <h3 class="lg:text-[2.0625rem] text-2xl text-center font-playfair-display z-[9]">Defenderr <br class="lg:hidden"> — <br class="lg:hidden"> {{ $t('index.when_the_work') }} <br class="lg:hidden"> {{ $t('index.turns_into_art') }}</h3>
                <div class="flex lg:flex-row flex-col lg:gap-y-0 gap-y-[6.25rem] justify-between items-center mt-[6.25rem] z-[9] px-6 lg:px-0">
                    <div class="flex flex-col items-center justify-center text-center">
                        <img src="/i/icons/footer-logo-i.svg" class="w-[2.4375rem]" alt="">
                        <p class="text-[1.1875rem] font-semibold pt-[1.9375rem] pb-4">{{ $t('index.designed_in') }}</p>
                        <p class="text-cape-cod text-[1.1875rem]">
                            Defenderr — американская компания профессионального <br class="hidden lg:block">
                            оборудования для перманентного макияжа и тату с <br class="hidden lg:block">
                            собственным производством в Китае
                        </p>
                    </div>
                    <div class="flex flex-col items-center justify-center text-center">
                        <img src="/i/icons/big-plus-i.svg" class="w-6" alt="">
                        <p class="text-[1.1875rem] font-semibold pt-[1.9375rem] pb-4">Сертификацированно</p>
                        <p class="text-cape-cod text-[1.1875rem]">
                            Все продукция имеет необходимые сертификаты <br class="hidden lg:block">
                            и соответствует медицинским стандартам <br class="hidden lg:block">
                            проведению процедур.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="newest" class="" v-if="newestProducts.length">
        <div class="container maxlg:w-screen">
            <div class="mb-[4rem] pt-[4rem] lg:pt-0">
                <h4 class="text-[2.0625rem] text-center">{{ $t('index.newest_machines') }}</h4>

                <div v-if="isDesktop()" class="flex items-center my-[4rem] px-4 lg:px-0 lg:gap-x-7">
                    <div v-for="product in newestProducts.slice(0, 3)" :key="product.id">
                        <div @click.prevent="router.push({ name: 'product', params: { slug: product.slug } })" class="lazyload cursor-pointer relative mx-auto lg:w-[23.75rem] w-[19.8125rem] lg:h-[34.625rem] h-[28.875rem] bg-no-repeat bg-contain rounded-[1.5625rem]"
                             :data-bg="product.imagePath">
                            <p class="uppercase text-[1.875rem] text-white font-matroska absolute-center">
                                {{ product.name }}
                            </p>
                        </div>
                    </div>
                </div>

                <swiper
                    v-if="isHandheld()"
                    id="newest-products-swiper"
                    :modules="[Scrollbar]"
                    :direction="'horizontal'"
                    :slides-per-view="isMobile() ? 1.2 : 3"
                    :space-between="isMobile() ? 20 : 0"
                    :allow-touch-move="isHandheld()"
                    :no-swiping="isDesktop()"
                    :centered-slides="false"
                    :loop="false"
                    :scrollbar="{el: '#newest-products-swiper .swiper-scrollbar'}"
                >
                    <swiper-slide v-for="product in newestProducts" :key="product.id" @click.prevent="router.push({ name: 'product', params: { slug: product.slug } })">
                        <div :data-bg="product.imagePath" class="lazyload relative mx-auto lg:w-[23.75rem] w-[19.8125rem] lg:h-[34.625rem] h-[28.875rem] bg-no-repeat rounded-[1.5625rem]">
                            <p class="uppercase text-[1.6rem] text-white font-matroska absolute-center">{{ product.name }}</p>
                        </div>
                    </swiper-slide>

                    <div class="swiper-scrollbar !h-[2px]"></div>
                </swiper>


                <router-link :to="{ name: 'catalog', params: { slug: 'machines' } }" class="flex items-center justify-between w-[15.75rem] h-[3.125rem] mt-[5.0625rem] lg:mt-0 mx-auto uppercase text-xs font-semibold border border-cod-gray rounded-[1.625rem] px-[1.875rem]">
                    {{ $t('index.shop_all') }}
                    <img src="/i/icons/arrow-right-2-i.svg" class="w-4" alt="">
                </router-link>
            </div>
        </div>
    </section>
    <section id="distributors" class="md:mt-[3.8rem] mt-[3.8125rem]">
        <div class="container maxlg:w-screen">
            <div class="mt-[4rem]">
                <div class="flex lg:flex-row flex-col gap-x-[6.25rem]">
                    <img data-src="/i/images/distributors.gif" class="lazyload lg:w-[37.5rem] lg:h-[31.25rem] w-full h-[17.875rem] px-4" alt="">
                    <div class="flex items-center flex-col py-[8.125rem] lg:px-[4.75rem] px-6">
                        <img src="/i/icons/logo.svg" alt="">
                        <p class="text-[2.0625rem] text-center font-medium py-[3.125rem]" v-html="$t('index.network')"></p>
                        <a href="#" class="flex items-center justify-between lg:w-[15.75rem] w-full h-[3.125rem] bg-cod-gray mx-auto
                                   uppercase text-xs font-medium text-white border border-cod-gray rounded-[1.625rem] px-[1.875rem]">
                            {{ $t('index.find_nearby') }}
                            <img src="/i/icons/arrow-right-white-2-i.svg" class="w-4" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="links" class="md:mt-[3.8rem] mt-[3.8125rem]">
        <div class="container maxlg:w-screen">
            <div class="flex lg:flex-row flex-col lg:gap-y-0 gap-y-4 items-center mb-[4rem] mx-4 lg:mx-0">
                <a href="#" class="lg:bg-white bg-athens-gray hover:bg-athens-gray group rounded-[1.5625rem] lg:py-[5.4375rem] py-[1.875rem] lg:w-[33%] w-full animated-1">
                    <p class="text-[2.0625rem] border-b-2 lg:border-b-transparent group-hover:border-b-cod-gray
                              border-b-cod-gray animated-1 leading-[1.3] w-max mx-auto">
                        {{ $t('index.community') }}
                    </p>
                </a>
                <router-link :to="{ name: 'faq' }" class="lg:bg-white bg-athens-gray hover:bg-athens-gray group rounded-[1.5625rem] lg:py-[5.4375rem] py-[1.875rem] lg:w-[33%] w-full animated-1">
                    <p class="text-[2.0625rem] border-b-2 lg:border-b-transparent group-hover:border-b-cod-gray
                              border-b-cod-gray animated-1 leading-[1.3] w-max mx-auto">
                        FAQ
                    </p>
                </router-link>
                <a href="#" class="lg:bg-white bg-athens-gray hover:bg-athens-gray group rounded-[1.5625rem] lg:py-[5.4375rem] py-[1.875rem] lg:w-[33%] w-full animated-1">
                    <p class="text-[2.0625rem] border-b-2 lg:border-b-transparent group-hover:border-b-cod-gray
                              border-b-cod-gray animated-1 leading-[1.3] w-max mx-auto">
                        {{ $t('index.contacts') }}
                    </p>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import  {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import useHelper from "../composables/useHelper";

import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/scrollbar';

const router = useRouter()
const {isDesktop, isHandheld, isMobile} = useHelper()
const randomBanner = ref(false)
const popularProducts = ref(false)
const newestProducts = ref(false)

const getRandomBanner = async () => {
    try {
        let response = await axios.get('/api/banners/one-random')
        randomBanner.value = response.data.data
    } catch (e) { }
}
const getPopularProducts = async () => {
    try {
        let response = await axios.get('/api/products/popular')
        popularProducts.value = response.data.data
    } catch (e) { }
}
const getNewestProducts = async () => {
    try {
        let response = await axios.get('/api/products/newest')
        newestProducts.value = response.data.data
    } catch (e) { }
}

onMounted(() => {
    getRandomBanner()
    getPopularProducts()
    getNewestProducts()
})
</script>

<style lang="scss">
#newest-products-swiper{
    .swiper-wrapper{
        @apply my-[4rem] px-4 lg:px-0;
    }
}
</style>
