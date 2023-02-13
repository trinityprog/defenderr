<template>
    <section id="contacts" class="relative md:mt-[4.3rem] mt-[3.8125rem]">
        <div class="bg-athens-gray">
            <div class="container pt-[4.375rem] pb-[6.25rem]">
                <h1 class="pb-20 text-center text-[1.6875rem]">{{ $t('contacts.defenderr') }}</h1>
                <div class="flex lg:flex-row flex-col gap-y-4 lg:gap-y-0 justify-between">
                    <div class="bg-white rounded-lg lg:w-[23.75rem] pt-8 p-[3.125rem]">
                        <p class="font-semibold flex items-center">USA, Texas <img src="/i/icons/verified-i.svg" class="pl-2 pb-2 w-[1.375rem] h-[1.375rem]" alt=""></p>
<!--                        <p class="text-cape-cod pt-2.5 pb-6 font-normal">261 W 29TH 10001-5225</p>-->
                        <a href="tel:+7 700 755 57 19 " class="font-medium inline-block">+7 700 755 57 19</a>
                        <a href="mailto:info@defenderrsupply.com" class="font-medium border-b border-b-cod-gray inline-block">info@defenderrsupply.com</a>
                    </div>
                    <div class="bg-white rounded-lg lg:w-[23.75rem] pt-8 p-[3.125rem]">
                        <p class="font-semibold flex items-center">Kazakhstan, Almaty <img src="/i/icons/verified-i.svg" class="pl-2 pb-2 w-[1.375rem] h-[1.375rem]" alt=""></p>
                        <!--                        <p class="text-cape-cod pt-2.5 pb-6 font-normal">261 W 29TH 10001-5225</p>-->
                        <a href="tel:+7 700 755 57 19 " class="font-medium inline-block">+7 700 755 57 19</a>
                        <a href="mailto:info@defenderrsupply.com" class="font-medium border-b border-b-cod-gray inline-block">info@defenderrsupply.com</a>
                    </div>
                    <div class="bg-white rounded-lg lg:w-[23.75rem] pt-8 p-[3.125rem]">
                        <p class="font-semibold flex items-center">Russia, Moscow <img src="/i/icons/verified-i.svg" class="pl-2 pb-2 w-[1.375rem] h-[1.375rem]" alt=""></p>
                        <!--                        <p class="text-cape-cod pt-2.5 pb-6 font-normal">261 W 29TH 10001-5225</p>-->
                        <a href="tel:+7 700 755 57 19 " class="font-medium inline-block">+7 700 755 57 19</a>
                        <a href="mailto:info@defenderrsupply.com" class="font-medium border-b border-b-cod-gray inline-block">info@defenderrsupply.com</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-[6.25rem]">
            <h2 class="pb-20 text-center text-[1.6875rem]">{{ $t('contacts.distributor') }}</h2>
            <div class="relative lg:w-max mx-auto">
                <input type="text"
                       v-model="search"
                       class="text-center lg:w-[33.125rem] w-full uppercase border-b border-cod-gray pb-2.5 text-xs placeholder-cod-gray"
                       placeholder="НАЙТИ СТРАНУ">
                <img src="/i/icons/search-i.svg" class="absolute right-0 top-1 w-4 h-4" alt="">
            </div>
            <div class="flex justify-center mt-10 mb-11">
                <swiper
                    id="letters-swiper"
                    :direction="'horizontal'"
                    :slides-per-view="isMobile() ? 9 : 'auto'"
                    :space-between="30"
                    :allow-touch-move="isHandheld()"
                    :no-swiping="isDesktop()"
                >
                    <swiper-slide v-for="(letter, index) in _.uniq(_.map(distributors, 'countryLetter'))" :key="index" class="!w-min">
                        <a :href="`#${letter}`" class="focus:border-b-2 border-cod-gray focus:text-cod-gray text-cape-cod focus:font-semibold font-normal uppercase">{{ letter }}</a>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="border-t border-mercury">
            <div class="container pt-[3.5625rem] pb-[6.25rem]">
                <div v-for="(item, letter) in _.groupBy(searched, 'countryLetter')" :key="letter" :id="letter" class="grid lg:grid-cols-3 grid-cols-2 grid-cols-auto mb-8 last:mb-0">
                    <div class="lg:pr-0 pr-[1.875rem] lg:col-span-1">
                        <p class="lg:text-[6.25rem] text-[3.125rem] font-thin uppercase">{{ letter }}</p>
                    </div>
                    <div class="flex flex-col flex-wrap items-start gap-y-5 text-[0.9375rem] lg:max-h-[20rem] pt-5 lg:col-span-2">
                        <button v-for="country in _.uniq(_.map(item, 'country'))" @click.prevent="setSelectedCountry(country)" type="button">{{ country }}</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <TransitionRoot
        :show="isCountryModalOpen"
        id="addToCart"
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
    >
        <Dialog @close="setIsCountryModalOpen" class="bg-[#303030] bg-opacity-60 fixed inset-0 w-screen w-screen z-[1000]">
            <DialogPanel>
                <div class="fixed z-[100] lg:top-0 bottom-0 lg:bottom-auto right-0 lg:w-[34.4375rem] w-full lg:h-full bg-white py-[5.625rem]">
                    <img @click.prevent="setIsCountryModalOpen(false)" src="/i/icons/cross-i.svg" class="absolute lg:right-[3.25rem] right-[1.625rem] lg:top-[3.25rem] top-10 cursor-pointer" alt="">
                    <div class="flex items-center lg:justify-center pl-6 lg:pl-0 justify-start pb-2.5">
                        <img src="/i/icons/location-i.svg" class="pr-4" alt="">
                        <p class="text-center text-[1.6875rem]">{{ selectedCountry }}</p>
                    </div>
                    <p class="text-xs lg:text-center text-left pl-6 lg:pl-0 pb-[3.125rem]">{{ _.filter(distributors, ['country', selectedCountry]).length }} {{ $t('contacts.distributors_in_country') }}</p>
                    <div class="border-t border-mercury">
                        <div v-for="item in _.uniqBy(_.filter(distributors, ['country', selectedCountry]), 'city')" @click.prevent="setSelectedCity(item.city)" class="border-b border-mercury py-6 px-6 lg:px-[3.125rem] group flex justify-between cursor-pointer">
                            <div class="flex items-center">
                                <p class="font-semibold group-hover:border-opacity-100 border-b-2 border-cod-gray border-opacity-0 animated-1">{{ item.city }}</p>
                                <p class="pl-2.5 text-[#8D8D8D]">{{ _.filter(distributors, ['city', item.city]).length }}</p>
                            </div>
                            <img src="/i/icons/arrow-right-i.svg" class="opacity-0 group-hover:opacity-100 animated-1" alt="">
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </TransitionRoot>

    <TransitionRoot
        :show="isCityModalOpen"
        id="addToCart"
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
    >
        <Dialog @close="setIsCityModalOpen" class="bg-[#303030] bg-opacity-60 fixed inset-0 w-screen w-screen z-[1000]">
            <DialogPanel>
                <div class="fixed z-[100] lg:top-0 bottom-0 lg:bottom-auto right-0 lg:w-[34.4375rem] w-full h-full bg-athens-gray py-[5.625rem]">
                    <img src="/i/icons/arrow-left.svg" @click.prevent="setIsCountryModalOpen(true);setIsCityModalOpen(false)" class="absolute lg:left-[3.25rem] left-[1.625rem] lg:top-[3.25rem] top-10 w-[1.5rem] cursor-pointer" alt="">
                    <img @click.prevent="setIsCityModalOpen(false)" src="/i/icons/cross-i.svg" class="absolute lg:right-[3.25rem] right-[1.625rem] lg:top-[3.25rem] top-10 cursor-pointer" alt="">
                    <div class="flex items-center lg:justify-center pl-6 lg:pl-0 justify-start pb-2.5">
                        <img src="/i/icons/location-i.svg" class="pr-4" alt="">
                        <p class="text-center text-[1.6875rem] ">{{ selectedCountry }}, {{ selectedCity }}</p>
                    </div>
                    <p class="text-xs lg:text-center text-left pl-6 lg:pl-0 pb-[3.125rem]">{{ _.filter(distributors, ['city', selectedCity]).length }} {{ $t('contacts.distributors_in_country') }}</p>
                    <div class="flex flex-col gap-y-4 lg:px-[3.125rem] px-4">
                        <div v-for="item in _.filter(distributors, ['city', selectedCity])" class="bg-white rounded-lg p-[1.875rem] w-full flex items-center justify-between">
                            <div class="flex flex-col gap-y-2">
                                <p class="font-semibold">{{ item.name }}</p>
                                <a v-if="item.website" :href="item.website" class="font-normal underline">{{ item.website }}</a>
                                <a v-if="item.email" :href="`mailto:${item.email}`" class="font-normal underline">{{ item.email }}</a>
                                <a v-if="item.phone" :href="`tel:${item.phone}`" class="font-normal">{{ item.phone }}</a>
                            </div>
                            <div class="flex items-center gap-x-[0.6rem]">
                                <a v-for="social in _.filter(item.socials, (i) => i.name && i.link)" :href="social.link">
                                    <img :src="`/i/icons/${social.name}.svg`" class="w-[1.4rem] h-[1.4rem]" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import {onMounted, ref, watchEffect} from "vue";
import useHelper from "../composables/useHelper";
import _ from "lodash"

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const {isDesktop, isHandheld, isMobile} = useHelper()
import {TransitionRoot, Dialog, DialogPanel} from '@headlessui/vue'

const distributors = ref([])
const isCountryModalOpen = ref(false)
const selectedCountry = ref({})
const isCityModalOpen = ref(false)
const selectedCity = ref({})
const search = ref('')
const searched = ref([])

watchEffect(() => {
    if(search.value) {
        searched.value = _.filter(distributors.value, d => {
            return d.name.toLowerCase().includes(search.value.toLowerCase())
                ||d.country.toLowerCase().includes(search.value.toLowerCase())
                ||d.city.toLowerCase().includes(search.value.toLowerCase());
        })
    } else {
        searched.value = distributors.value
    }
})

const getDistributors = async () => {
    try {
        let response = await axios.get('/api/contacts/distributors')
        distributors.value = response.data.data
    } catch (e) { }
}
const setIsCountryModalOpen = value => {
    isCountryModalOpen.value = value
}
const setSelectedCountry = value => {
    selectedCountry.value = value
    setIsCountryModalOpen(true)
}
const setIsCityModalOpen = value => {
    isCityModalOpen.value = value
}
const setSelectedCity = value => {
    setIsCountryModalOpen(false)
    selectedCity.value = value
    setIsCityModalOpen(true)
}

onMounted(() => {
    getDistributors()
})
</script>
