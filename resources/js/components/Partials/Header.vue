<template>
    <header>
        <div class="bg-white container relative lg:py-[1.4rem] md:py-6 py-5 flex justify-between items-center">
            <div class="flex items-center justify-between w-full">
                <div class="flex items-center">
                    <button type="button" @click.prevent="setIsMobileMenuOpen(true)" class="space-y-1 md:mr-[2.6875rem] mr-[1.9375rem] lg:hidden">
                        <span class="block w-7 h-0.5 bg-cod-gray duration-150 ease-in-out" :class="{'rotate-45 translate-y-0.5' : isMobileMenuOpen}"></span>
                        <span class="block w-7 h-0.5 bg-cod-gray duration-150 ease-in-out" :class="{'-rotate-45 -translate-y-1' : isMobileMenuOpen}"></span>
                    </button>
                    <router-link :to="{name: 'index'}">
                        <img src="/i/icons/logo.svg" class="w-[6.25rem]" alt="">
                    </router-link>
                    <div v-if="isDesktop()" class="lg:flex hidden uppercase text-[0.8125rem] font-medium tracking-[0.8px] pl-[5.25rem] gap-x-[1.875rem]">
                        <Menu>
                            <MenuButton class="uppercase">{{ $t('header.shop') }}</MenuButton>
                            <Transition
                                enter-active-class="transition duration-100 ease-out"
                                enter-from-class="transform opacity-0"
                                enter-to-class="transform opacity-100"
                                leave-active-class="transition duration-75 ease-in"
                                leave-from-class="transform opacity-100"
                                leave-to-class="transform opacity-0"
                            >
                                <MenuItems as="ul" class="bg-white left-0 top-[4.3rem] absolute p-[3.125rem] z-[999] flex gap-x-2.5">
                                    <MenuItem as="li" v-for="category in categories">
                                        <button @click="router.push({name: 'catalog', params: {slug: category.slug}})" class="bg-athens-gray w-[11.3125rem] h-[17.5rem]">
                                            <img :src="category.imagePath" class="mx-auto object-cover h-[11.25rem] mb-7" alt="">
                                            <span class="uppercase text-center" :class="{ 'font-matroska text-xs': $i18n.locale === 'en', 'font-druk-cyr text-[1.3rem] tracking-[0.15rem]': $i18n.locale === 'ru' }">{{ category.name }}</span>
                                        </button>
                                    </MenuItem>
                                </MenuItems>
                            </Transition>
                        </Menu>
                        <router-link :to="{ name: 'contacts' }">{{ $t('header.contacts') }}</router-link>
                        <router-link :to="{ name: 'delivery' }">{{ $t('header.delivery') }}</router-link>
                        <router-link :to="{ name: 'warranty' }">{{ $t('header.warranty') }}</router-link>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="flex gap-x-[1.625rem] pl-[1.625rem]">
                        <button @click.prevent="searchOpen">
                            <img src="/i/icons/search-i.svg" class="w-[1.25rem]" alt="">
                        </button>
<!--                        <a href="#" class="hidden md:flex">-->
<!--                            <img src="/i/icons/profile-i.svg" class="w-[1.25rem]" alt="">-->
<!--                        </a>-->
                        <router-link :to="{ name: 'favorites' }">
                            <img src="/i/icons/favorites-i.svg" class="w-[1.25rem]" alt="">
                        </router-link>
                        <router-link :to="{ name: 'cart' }">
                            <img src="/i/icons/cart-i.svg" class="w-[1.25rem]" alt="">
                        </router-link>
                    </div>
                    <div class="hidden lg:block pl-[2.9375rem]">
                        <button v-if="$i18n.locale === 'ru'" @click.prevent="setLocale('en')" type="button" class="uppercase border-b border-b-cod-gray font-semibold text-[0.8125rem]">EN</button>
                        <button v-if="$i18n.locale === 'en'" @click.prevent="setLocale('ru')" type="button" class="uppercase border-b border-b-cod-gray font-semibold text-[0.8125rem]">RU</button>
                    </div>
                </div>
            </div>
        </div>

        <TransitionRoot
            v-if="isHandheld()"
            :show="isMobileMenuOpen"
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
            <Dialog @close="setIsMobileMenuOpen" class="bg-white fixed inset-x-0 w-full left-0 md:max-h-full max-h-[calc(100vh_-_3.7rem)] overflow-y-scroll md:top-[4.3rem] top-[3.7rem] md:pt-[3.125rem] pt-[1.875rem] z-[999]">
                <DialogPanel>
                    <div class="md:px-10 px-6">
                        <div class="md:flex grid grid-cols-2 gap-x-2.5 gap-y-2.5 md:gap-y-0 lg:pt-0 md:pt-[3.125rem]">
                            <button @click="router.push({name: 'catalog', params: {slug: category.slug}})" v-for="category in categories" :key="category.id" class="bg-athens-gray md:w-[11.3125rem] w-[9.875rem] md:h-[17.5rem] h-[9.875rem] relative">
                                <span class="block md:w-full md:h-full md:pt-7 w-[7rem] h-[7rem] mx-auto">
                                    <img :src="category.imagePath" class="object-contain w-full h-full" alt="">
                                </span>
                                <span class=" block uppercase text-center md:relative lg:pt-0 md:pt-11" :class="{ 'font-matroska text-xs': $i18n.locale === 'en', 'font-druk-cyr tracking-[0.15rem]': $i18n.locale === 'ru' }">{{ category.name }}</span>
                            </button>
                        </div>
                        <div class="md:hidden flex flex-col items-start gap-y-6 uppercase font-bold text-xs pt-[3.125rem]">
                            <a href="#">{{ $t('header.contacts') }}</a>
                            <a href="#">{{ $t('header.blog') }}</a>
                            <router-link :to="{ name: 'delivery' }">{{ $t('header.delivery') }}</router-link>
                            <router-link :to="{ name: 'warranty' }">{{ $t('header.warranty') }}</router-link>
                        </div>
                    </div>
                    <div class="flex w-full justify-between mt-[3.875rem] md:border-none border-t border-mercury md:pt-0 pt-[3.125rem]">
                        <a href="#" class="uppercase text-xs font-matroska lg:hidden flex items-center justify-center w-[11.875rem] h-[3.125rem] rounded-lg border border-cape-cod mx-auto md:mb-[6.25rem] mb-[3.125rem]">
                            <img src="/i/icons/lock-i.svg" class="pr-4" alt="">
                            {{ $t('header.login') }}
                        </a>
                        <button v-if="$i18n.locale === 'ru'" @click.prevent="setLocale('en')" type="button" class="uppercase text-xs font-semibold md:hidden flex items-center justify-center w-[7.5rem] h-[3.125rem] rounded-lg border border-cape-cod mx-auto">EN</button>
                        <button v-if="$i18n.locale === 'en'" @click.prevent="setLocale('ru')" type="button" class="uppercase text-xs font-semibold md:hidden flex items-center justify-center w-[7.5rem] h-[3.125rem] rounded-lg border border-cape-cod mx-auto">RU</button>
                    </div>
                    <div class="border-t border-mercury lg:hidden md:flex hidden items-center justify-between py-6 px-10">
                        <div class="flex gap-x-[3.125rem] uppercase font-bold text-xs">
                            <a href="#">{{ $t('header.contacts') }}</a>
                            <a href="#">{{ $t('header.blog') }}</a>
                            <router-link :to="{ name: 'delivery' }">{{ $t('header.delivery') }}</router-link>
                            <router-link :to="{ name: 'warranty' }">{{ $t('header.warranty') }}</router-link>
                        </div>
                        <div class="flex gap-x-[3.125rem] uppercase font-bold text-xs">
                            <button v-if="$i18n.locale === 'ru'" @click.prevent="setLocale('en')" type="button" class="border-b border-b-cod-gray">EN</button>
                            <button v-if="$i18n.locale === 'en'" @click.prevent="setLocale('ru')" type="button" class="border-b border-b-cod-gray">RU</button>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </TransitionRoot>
    </header>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";
import {onBeforeRouteUpdate, useRouter} from "vue-router";
import Cookies from 'js-cookie';
import { useI18n } from 'vue-i18n';
import useCategories from "../../composables/useCategories"
import useHelper from "../../composables/useHelper";
import {TransitionRoot, Dialog, DialogPanel, Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue'

const emitter = inject('emitter')
const i18n = useI18n();
const router = useRouter()
const {categories} = useCategories()
const {isDesktop, isHandheld} = useHelper()
const isMobileMenuOpen = ref(false)
const isMobileMenuOpened = ref(false)

const setIsMobileMenuOpen = value => {
    if(!isMobileMenuOpened.value) {
        isMobileMenuOpened.value = true;
        setTimeout(() => {
            isMobileMenuOpen.value = value
            isMobileMenuOpened.value = false
        }, 200)
    }
}
const setLocale = async (locale) => {
    i18n.locale.value = locale
    Cookies.set('locale', locale)
    window.location.reload()
}
const searchOpen = () => {
    emitter.emit('searchOpen')
}

onMounted(() => {

})

onBeforeRouteUpdate(() => {
    isMobileMenuOpen.value = false
    isMobileMenuOpened.value = false
})
</script>
