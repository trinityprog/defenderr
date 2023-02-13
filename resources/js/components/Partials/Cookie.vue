<template>
    <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform opacity-100"
        leave-to-class="transform opacity-0"
    >
        <section v-show="isOpen" id="cookie" class="fixed border-t border-shuttle-gray bottom-0 w-full z-[999] bg-white leading-[1.3]">
            <div class="container md:py-3.5 py-9 flex md:flex-row flex-col items-center justify-between">
                <div class="flex items-start md:items-center md:gap-x-8 gap-x-6">
                    <img src="/i/icons/cookie-i.svg" alt="">
                    <div>
                        <p class="md:border-none border-b border-cod-gray md:w-auto w-max md:mb-0 mb-4">{{ $t('cookie.title') }}</p>
                        <p class="text-xs pt-1">Offer analyser son utilisation et vous proposer de la publicité <br class="lg:hidden md:block hidden"> personnaln utilisation et vous proposer de la publicité personnal</p>
                    </div>
                </div>
                <div class="flex items-center gap-x-[3.25rem] w-full md:w-auto mt-8 md:mt-0">
                    <button @click.prevent="acceptCookies" type="button" class="md:w-40 w-full h-[3.25rem] text-white rounded-lg bg-cod-gray flex items-center justify-center">
                        {{ $t('cookie.button') }}
                    </button>
                    <button @click.prevent="setIsOpen(false)" type="button" class="md:block hidden">
                        <img src="/i/icons/cross-i.svg" alt="">
                    </button>
                </div>
            </div>
        </section>
    </Transition>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Cookies from 'js-cookie'

const isOpen = ref(false)

const setIsOpen = value => { isOpen.value = value }
const acceptCookies = () => {
    Cookies.set('accepted-cookies', true)
    isOpen.value = false
}

onMounted(() => {
    setTimeout(() => {
        if (!Cookies.get('accepted-cookies')) { isOpen.value = true }
    }, 3000)
})
</script>

