<template>
    <section id="cart" class="md:mt-[4.3rem] mt-[3.8125rem] relative bg-athens-gray">
        <div class="container">
            <button @click.prevent="goBack()" type="button" class="w-max block">
                <img src="/i/icons/long-arrow-left-i.svg" class="pt-10" alt="">
            </button>
            <div v-if="!_.isEmpty(cart)" class="flex lg:flex-row flex-col md:pb-[9.375rem] pb-[6.25rem] gap-x-[3.125rem] md:gap-y-[9.375rem] lg:gap-y-0">
                <div class="lg:w-[43.75rem]">
                    <div class="flex md:flex-col flex-row md:items-start items-center justify-between lg:pt-0 pt-11">
                        <p class="text-xl lg:pt-[4.5rem]">{{ $t('cart.title') }}</p>
                        <p class="text-shuttle-gray lg:hidden block md:pt-2.5">{{ itemsCountText() }}</p>
                    </div>
                    <div class="flex flex-col gap-y-2.5 mt-[1.875rem]">
                        <div v-for="item in cart" :key="item.id" class="group relative bg-white p-4 rounded shadow-defenderr lg:shadow-none flex md:flex-row flex-col md:items-center items-start gap-y-[1.875rem] md:gap-y-0 md:justify-between">
                            <div class="flex items-center gap-x-5">
                                <div class="bg-athens-gray rounded w-[5.6875rem] h-[7.5rem]">
                                    <img :data-src="item.attributes.imagePath" class="lazyload w-full h-full object-contain" alt="">
                                </div>
                                <div class="flex flex-col items-start gap-y-2.5">
                                    <p class="font-semibold">{{ item.name }} <router-link :to="{ name: 'product', params: { slug: item.attributes.slug } }" class="text-xs pl-2.5 text-azure-radiance font-normal opacity-0 group-hover:!opacity-100">{{ $t('cart.item_page') }}</router-link></p>
                                    <p class="text-xs text-shuttle-gray capitalize">{{ Object.keys(item.attributes.option)[0] }}: {{ Object.values(item.attributes.option)[0] }}</p>
                                    <p class="text-xs text-shuttle-gray capitalize">{{ $t('cart.qty') }} {{ item.quantity }}</p>
                                    <p>{{ item.attributes.priceWithSymbol }}</p>
                                </div>
                            </div>
                            <button @click.prevent="removeFromCart(item.id)" class="uppercase text-xs font-medium absolute right-4 top-4 cursor-pointer">{{ $t('cart.remove') }}</button>
                        </div>
                    </div>
                </div>
                <div class="lg:w-[28.125rem] h-max lg:bg-white md:bg-athens-gray flex flex-col items-start lg:p-[3.125rem] md:mt-0 mt-[6.25rem]">
                    <p class="text-xl pb-2.5">{{ $t('cart.order_summary') }}</p>
                    <p class="text-shuttle-gray">{{ itemsCountText() }}</p>
                    <div class="text-[1.6875rem] flex lg:flex-row md:flex-col flex-row items-center justify-between w-full md:pt-[4.4375rem] pt-[3.125rem]">
                        <p>{{ $t('cart.total') }}</p>
                        <p>{{ cartTotal }}</p>
                    </div>
                    <button @click.prevent="setIsOrderModalOpen(true)" class="md:mt-[1.875rem] mt-[3.75rem] text-lg text-white bg-cod-gray rounded-lg lg:w-full md:w-[21.8125rem] w-full md:mx-auto flex items-center justify-center h-[3.25rem]">{{ $t('cart.place_order') }}</button>
                    <p class="flex items-center justify-center mx-auto pt-6"><img src="/i/icons/black-heart-i.svg" class="mr-4 w-4" alt=""> {{ $t('cart.manager_will') }}</p>
                </div>
            </div>
            <div v-if="_.isEmpty(cart)" class="flex flex-col cart-center justify-center lg:pt-[4.5rem] md:pt-[9.125rem] pt-[1.6875rem] lg:pb-[9.875rem] pb-[6.25rem]">
                <h1 class="text-[1.6875rem]">{{ $t('cart.basket_empty') }}</h1>
                <div class="flex lg:flex-col flex-col-reverse items-center">
                    <router-link :to="{ name: 'catalog' }" class="uppercase lg:my-[3.75rem] text-xs font-semibold lg:w-[13.875rem] w-full h-[3.125rem] flex items-center justify-center rounded-[1.625rem] border border-cod-gray">
                        {{ $t('cart.continue_shopping') }}
                    </router-link>
                    <img data-src="/i/images/empty-bag.png" class="lazyload lg:my-0 md:my-[9.375rem] my-[6.25rem]" alt="">
                </div>
            </div>
        </div>
    </section>



    <TransitionRoot
        :show="isOrderModalOpen"
        id="addToCart"
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
    >
        <Dialog @close="setIsOrderModalOpen" class="bg-white fixed inset-x-0 w-full left-0 md:top-[4.3rem] top-[3.7rem] md:pt-[3.125rem] pt-[1.875rem] z-[999]">
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
                <div class="flex min-h-full items-center justify-center text-center">
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
                            <button @click.prevent="setIsOrderModalOpen(false)" type="button" class="absolute right-[3.25rem] top-[3.25rem]">
                                <img src="/i/icons/cross-i.svg" alt="">
                            </button>
                            <div class="">
                                <h1 class="text-xl pb-2.5">Contact Details</h1>
                                <p class="text-shuttle-gray">Preferred method of contact</p>
                                <form @submit.prevent="orderSubmit()">
                                    <div class="flex justify-center items-center gap-x-4 mt-[1.875rem] mb-[3.125rem]">
                                        <label class="flex flex-col items-center">
                                        <span class="relative w-20 h-20 rounded-[0.625rem] bg-athens-gray border border-transparent" :class="{ '!border-cape-cod': orderForm.method_of_contact === 'phone' }">
                                            <img src="/i/icons/phone-i.svg" class="absolute-center w-6" alt="">
                                        </span>
                                            <span class="pt-2.5 text-xs text-cape-cod border-b border-transparent" :class="{ '!border-cape-cod': orderForm.method_of_contact === 'phone' }">Phone call</span>
                                            <input v-model="orderForm.method_of_contact" type="radio" class="hidden" value="phone">
                                        </label>
                                        <label class="flex flex-col items-center">
                                        <span class="relative w-20 h-20 rounded-[0.625rem] bg-athens-gray border border-transparent" :class="{ '!border-cape-cod': orderForm.method_of_contact === 'whatsapp' }">
                                            <img src="/i/icons/whatsapp.svg" class="absolute-center w-5" alt="">
                                        </span>
                                            <span class="pt-2.5 text-xs text-cape-cod border-b border-transparent" :class="{ '!border-cape-cod': orderForm.method_of_contact === 'whatsapp' }">WhatsApp</span>
                                            <input v-model="orderForm.method_of_contact" type="radio" class="hidden" value="whatsapp">
                                        </label>
                                        <label class="flex flex-col items-center">
                                        <span class="relative w-20 h-20 rounded-[0.625rem] bg-athens-gray border border-transparent" :class="{ '!border-cape-cod': orderForm.method_of_contact === 'email' }">
                                            <img src="/i/icons/sms-i.svg" class="absolute-center w-6" alt="">
                                        </span>
                                            <span class="pt-2.5 text-xs text-cape-cod border-b border-transparent" :class="{ '!border-cape-cod': orderForm.method_of_contact === 'email' }">Email</span>
                                            <input v-model="orderForm.method_of_contact" type="radio" class="hidden" value="email">
                                        </label>
                                    </div>
                                    <div class="w-full">
                                        <fieldset class="w-full">
                                            <input v-model="orderForm.name" type="text" required
                                                   class="bg-white w-full pl-5 placeholder-cape-cod rounded-lg border border-philippine-gray h-[3.125rem]"
                                                   placeholder="Name">
                                        </fieldset>
                                    </div>
                                    <div class="flex md:flex-row flex-col items-center gap-x-6 md:gap-y-0 gap-y-6 md:mt-10 mt-6">
                                        <fieldset class="w-full">
                                            <input v-model="orderForm.phone" type="text" required
                                                   class="bg-white w-full pl-5 placeholder-cape-cod rounded-lg border border-philippine-gray h-[3.125rem]"
                                                   placeholder="Phone">
                                        </fieldset>

                                        <fieldset class="w-full">
                                            <input v-model="orderForm.email" type="email" required
                                                   class="bg-white w-full pl-5 placeholder-cape-cod rounded-lg border border-philippine-gray h-[3.125rem]"
                                                   placeholder="Email">
                                        </fieldset>
                                    </div>
                                    <div class="flex md:flex-row flex-col items-center gap-x-6 md:gap-y-0 gap-y-6 md:mt-10 mt-6">
                                        <fieldset class="w-full">
                                            <input v-model="orderForm.country" type="text"
                                                   class="bg-white w-full pl-5 placeholder-cape-cod rounded-lg border border-philippine-gray h-[3.125rem]"
                                                   placeholder="Country">
                                        </fieldset>

                                        <fieldset class="w-full">
                                            <input v-model="orderForm.city" type="text"
                                                   class="bg-white w-full pl-5 placeholder-cape-cod rounded-lg border border-philippine-gray h-[3.125rem]"
                                                   placeholder="City">
                                        </fieldset>
                                    </div>
                                    <button type="submit" class="mt-[3.75rem] md:w-[21.8125rem] w-full h-[3.25rem] rounded-lg bg-cod-gray text-white">
                                        Send an Request
                                    </button>
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
import {onMounted, ref} from "vue";
import useHelper from "../composables/useHelper";
import useCart from "../composables/useCart";
import _ from "lodash";
import {TransitionRoot, TransitionChild, Dialog, DialogPanel} from '@headlessui/vue'

const {isDesktop, isHandheld, isMobile, goBack} = useHelper()
const {
    cart,
    cartTotal,
    removeFromCart,
    itemsCountText,
    getContent,
} = useCart()
const isOrderModalOpen = ref(false)
const setIsOrderModalOpen = value => { isOrderModalOpen.value = value }

const orderForm = ref({
    method_of_contact: 'phone',
    name: '',
    phone: '',
    email: '',
    country: '',
    city: '',
})
const orderErrors = ref([])

const orderSubmit = async () => {
    try {
        let response = await axios.post('/api/order', orderForm.value)

        alert(response.data.message)
    } catch (e) {
        if(e.response.status === 422) orderErrors.value = e.response.data.errors
    }
}

onMounted(() => {
    getContent()
})
</script>

<style lang="scss">

</style>
