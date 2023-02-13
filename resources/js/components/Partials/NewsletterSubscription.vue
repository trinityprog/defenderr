<template>
    <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform opacity-100"
        leave-to-class="transform opacity-0"
    >
        <section v-show="isPromptOpen" id="newsletter-subscription" class="bg-[#474646] fixed lg:right-0 lg:left-auto lg:translate-x-0 md:left-1/2 md:-translate-x-1/2 bottom-0 py-8 md:pl-[3.75rem] pl-6 pr-6 md:w-[25.4375rem] w-full text-white z-[999]">
            <div class="flex justify-between">
                <div @click.prevent="openIsModalOpen" class="flex items-center gap-x-10 cursor-pointer">
                    <img src="/i/icons/newsletter-i.svg" alt="">
                    <div>
                        <p class="text-xl uppercase border-b border-white">{{ $t('newsletter.title') }}</p>
                        <p class="text-sm pt-1">{{ $t('newsletter.subscribe') }}</p>
                    </div>
                </div>

                <button @click.prevent="setIsPromptOpen(false)" type="button" class="absolute right-6 top-6">
                    <img src="/i/icons/white-cross-i.svg" alt="">
                </button>
            </div>
        </section>
    </Transition>

    <TransitionRoot :show="isModalOpen">
        <Dialog @close="setIsModalOpen(false)" class="relative z-[1001]">
            <TransitionChild
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-[#303030] bg-opacity-60"></div>
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div
                    class="flex min-h-full items-center justify-center text-center"
                >
                    <TransitionChild
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel
                            class="bg-white relative md:w-[44.0625rem] md:!p-[3.125rem] !pt-[4.375rem] !pb-[3.125rem] !px-10"
                        >
                            <button @click.prevent="setIsModalOpen(false)" type="button" class="absolute right-[3.25rem] top-[3.25rem]">
                                <img src="/i/icons/cross-i.svg" alt="">
                            </button>
                            <div class="flex flex-col items-start">
                                <p class="uppercase text-xl pb-[1.875rem]">{{ $t('newsletter.title') }}</p>
                                <p class="text-xs text-left">
                                    Most newsletters focus on <br class="md:hidden"> content but Mr Porter’s is all about products. <br>
                                    They pull it off by turning every email into eye candy.
                                </p>
                                <form class="pt-20 w-full">
                                    <fieldset class="relative">
                                        <input type="email"
                                               class="w-full pb-4 border-b border-philippine-gray text-sm text-philippine-gray lg:placeholder:pl-0 placeholder:pl-2"
                                               placeholder="email">
                                        <img src="/i/icons/newsletter-gray-i.svg" class="absolute right-0 bottom-5" alt="">
                                    </fieldset>
                                    <a href="#" class="flex items-center justify-between uppercase md:w-[10.75rem] w-[8.75rem] h-[2.125rem]
                                                           bg-cod-gray mx-auto uppercase md:text-xs text-[0.625rem] font-medium text-white
                                                           border border-cod-gray rounded-[1.625rem] px-[1.875rem] mt-4">
                                        {{ $t('newsletter.send') }}
                                        <img src="/i/icons/arrow-right-white-2-i.svg" class="md:w-4 w-3.5" alt="">
                                    </a>
                                </form>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";
import Cookies from 'js-cookie'
import {TransitionRoot, TransitionChild, Dialog, DialogPanel} from '@headlessui/vue'

const emitter = inject('emitter')

const isPromptOpen = ref(false)
const isModalOpen = ref(false)

const setIsPromptOpen = value => { isPromptOpen.value = value }
const setIsModalOpen = value => { isModalOpen.value = value }
const openIsModalOpen = () => {
    isPromptOpen.value = false
    isModalOpen.value = true
}

onMounted(() => {
    emitter.on('closeNewsletterSubscription', () => setIsPromptOpen(false));

    setTimeout(() => {
        if (Cookies.get('accepted-cookies') && !Cookies.get('newsletter-subscription')) { isPromptOpen.value = true }
    }, 3000)
})
</script>

