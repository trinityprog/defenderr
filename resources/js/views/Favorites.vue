<template>
    <section v-if="favorites" id="favorites" class="md:mt-[4.3rem] mt-[3.8125rem]">
        <div class="container maxlg:w-screen lg:pt-[3.875rem] md:pt-11 pt-7 pb-[6.25rem]">
            <div class="flex md:items-center items-end leading-[1.3] justify-between lg:px-0 md:px-11 px-6">
                <div>
                    <button @click.prevent="goBack()" type="button" class="w-max block">
                        <img src="/i/icons/long-arrow-left-i.svg" class="pt-10" alt="">
                    </button>
                    <h1 class="text-xl text-cape-cod md:hidden pt-7">{{ $t('favorites.my_favorite') }}</h1>
                    <p class="text-shuttle-gray text-center absolute pt-2.5 md:hidden">{{ Object.values(favorites).length }} {{ $t('catalog.items') }}</p>
                </div>
                <div class="relative">
                    <h1 class="text-[1.6875rem] text-cape-cod md:block hidden">{{ $t('favorites.my_favorite') }}</h1>
                    <p class="text-shuttle-gray text-center absolute md:block pt-2 hidden left-1/2 md:-translate-x-1/2">{{ Object.values(favorites).length }} {{ $t('catalog.items') }}</p>
                </div>
                <div></div>
<!--                <a href="#" class="md:text-xl text-base text-cape-cod border-b border-opacity-0 hover:border-opacity-100 border-b-cape-cod animated-1">Log out</a>-->
            </div>
            <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-x-5 gap-x-3.5 gap-y-20 mt-20 pb-[6.25rem] lg:px-0 md:px-10">
                <router-link :to="{ name: 'product', params: { slug: item.attributes.slug } }" v-for="item in favorites" :key="item.id">
                    <div class="relative bg-athens-gray flex flex-col items-center gap-y-4 py-4 lg:w-[17.8125rem] w-[15.125rem] mb-[1.25rem] md:mx-0 mx-auto">
                        <p class="uppercase font-matroska lg:text-[0.8125rem] text-sm text-center w-10/12">
                            {{ item.attributes.shortName }}
                        </p>
<!--                        <p class="absolute hidden lg:block m-0 left-1/2 top-[4.2rem] -translate-x-1/2 -translate-y-1/2 text-xs text-shuttle-gray">Round Liner Long Taper</p>-->
                        <img :src="item.attributes.imagePath" class=" lg:w-full lg:h-[18rem] object-contain" alt="">
                        <div class="flex gap-x-2">
                            <button @click.prevent="removeFromFavorites(item.id)" type="button" class="w-10 h-10 border border-philippine-gray rounded-lg block relative">
                                <img src="/i/icons/black-heart-i.svg" class="w-4 absolute-center" alt="">
                            </button>
                            <a href="#"
                               class="px-2 h-10 flex justify-center items-center
                                      border border-philippine-gray rounded-lg
                                      hover:bg-cod-gray hover:text-white animated
                              ">
                                {{ $t('catalog.add_to_cart') }}
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col items-center lg:text-left text-center">
                        <p class="m-0 font-semibold text-base pb-2.5">{{ item.name }}</p>
                        <p class="m-0">{{ item.attributes.priceWithSymbol }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import {onMounted} from "vue";
import useHelper from "../composables/useHelper";
import useFavorites from "../composables/useFavorites";

const {isDesktop, isHandheld, isMobile} = useHelper()
const {
    favorites,
    getContent, removeFromFavorites
} = useFavorites()

onMounted(() => {
    getContent()
})
</script>

<style lang="scss">

</style>
