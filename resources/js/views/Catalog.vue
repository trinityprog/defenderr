<template>
    <section class="md:mt-[4.3rem] mt-[3.8125rem]" id="catalog">
        <div class="container pt-[2.1875rem]">
            <div class="mt-[2.5rem] mb-[5.3125rem] bg-athens-gray lg:rounded-[1.25rem] lg:py-[2.5rem] py-[1.375rem] lg:px-[2.9375rem] px-4">
            <div class="flex items-center justify-between">
                <p class="m-0 lg:text-[1.6875rem] text-base tracking-[0.35px] text-cape-cod">{{ route.params.slug && categoryFromSlug ? 'Choose ' + categoryFromSlug.name : 'Filter' }}</p>
                <button v-show="route.params.slug || filter.length" @click.prevent="clearFilter()"
                   class="text-xs font-semibold text-azure-radiance lg:text-cod-gray uppercase flex items-center">
                    {{ $t('catalog.clear') }}
                    <img src="/i/icons/reset-i.svg" class="pl-[0.8125rem]" alt="">
                </button>
            </div>
            <div v-if="categories" class="text-base mt-[0.4rem]">
                <swiper
                    :direction="'horizontal'"
                    :spaceBetween="20"
                    :slidesPerView="'auto'"
                    class="lg:w-full filter-row-swiper"
                >
                    <swiper-slide class="!w-max">
                        <button @click.prevent="setAllCategories()" class="flex items-center px-[2.9375rem] !h-[2.5rem] lg:!h-[4.375rem] bg-white rounded-[0.625rem]"
                                :class="{'drop-shadow': !route.params.slug}">
                            <span class="font-semibold border-b border-transparent duration-300 easy-in-out"
                                  :class="{'!border-cod-gray': !route.params.slug}">
                                {{ $t('catalog.all_categories') }}
                            </span>
                        </button>
                    </swiper-slide>
                    <swiper-slide v-for="cat in categories" :key="cat.slug" class="!w-max">
                        <button @click.prevent="setCategory(cat.slug)" class="flex items-center !w-max px-[2.9375rem] !h-[2.5rem] lg:!h-[4.375rem] bg-white rounded-[0.625rem]"
                                :class="{'drop-shadow': route.params.slug === cat.slug}">
                            <span class="font-semibold border-b border-transparent duration-300 easy-in-out"
                                  :class="{'!border-cod-gray': route.params.slug === cat.slug}">
                                {{ cat.name }}
                            </span>
                        </button>
                    </swiper-slide>
                </swiper>
            </div>
            <div v-if="characteristics && route.params.slug" v-for="characteristic in _.filter(characteristics, ['set_for', route.params.slug])" :key="characteristic.slug" class="text-base mt-[0.4rem]">
                <swiper
                    :direction="'horizontal'"
                    :spaceBetween="20"
                    :slidesPerView="'auto'"
                    class="lg:w-full filter-row-swiper"
                >
                    <swiper-slide class="!w-max">
                        <button @click.prevent="setAllCharacteristic(characteristic.slug)" class="flex items-center px-[2.9375rem] !h-[2.5rem] lg:!h-[4.375rem] bg-white rounded-[0.625rem]"
                                :class="{'drop-shadow': checkSelectedAllCharacteristic(characteristic.slug)}">
                            <span class="font-semibold border-b border-transparent duration-300 easy-in-out"
                                  :class="{'!border-cod-gray': checkSelectedAllCharacteristic(characteristic.slug)}">
                                {{ characteristic.filterAllVariants }}
                            </span>
                        </button>
                    </swiper-slide>
                    <swiper-slide v-for="value in characteristic.values" :key="value.slug" class="!w-max">
                        <button @click.prevent="setCharacteristic(characteristic.slug, value.slug)" class="flex items-center !w-max px-[2.9375rem] !h-[2.5rem] lg:!h-[4.375rem] bg-white rounded-[0.625rem]"
                                :class="{'drop-shadow': checkSelectedCharacteristic(characteristic.slug, value.slug)}">
                            <span class="font-semibold border-b border-transparent duration-300 easy-in-out"
                                  :class="{'!border-cod-gray': checkSelectedCharacteristic(characteristic.slug, value.slug)}">
                                {{ value.name }}
                            </span>
                            <img v-if="value.imagePath && characteristic.slug === 'line'" :data-src="value.imagePath" class="lazyload pl-5 hidden lg:block" alt="">
                        </button>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
            <div class="w-full flex justify-between items-center mb-[3.4375rem]">
                <p v-if="products.meta" class="uppercase text-xs text-cod-gray font-semibold">{{ products.meta.total }}  {{ $t('catalog.items') }}</p>

                <Menu as="div" class="uppercase relative border border-philippine-gray rounded-[1.625rem] text-philippine-gray text-[0.6875rem]">
                    <!--                    When opened rounded-2xl-->
                    <MenuButton class="block uppercase py-[0.625rem] px-[2.625rem]">{{ $t('catalog.sort_by') }} <span class="text-cod-gray font-semibold">{{ $t(`catalog.${sort}`) }}</span></MenuButton>
                    <Transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform opacity-0"
                        enter-to-class="transform opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform opacity-100"
                        leave-to-class="transform opacity-0"
                    >
                        <MenuItems as="ul" class="pt-5 pb-4 z-10 w-full left-0 flex flex-col justify-center items-center gap-y-3">
                            <MenuItem as="li" class="hover:text-cod-gray animated"><button @click="setSort('newest')">{{ $t('catalog.newest') }}</button></MenuItem>
                            <MenuItem as="li" class="hover:text-cod-gray animated"><button @click="setSort('price_asc')">{{ $t('catalog.price_asc') }}</button></MenuItem>
                            <MenuItem as="li" class="hover:text-cod-gray animated"><button @click="setSort('price_desc')">{{ $t('catalog.price_desc') }}</button></MenuItem>
                        </MenuItems>
                    </Transition>
                </Menu>
            </div>
            <div class="grid lg:grid-cols-4 grid-cols-2 lg:gap-x-5 gap-4 lg:gap-y-20 pb-[6.25rem]">
                <div v-for="product in products.data" :key="product.id">
                    <router-link :to="{ name: 'product', params: { slug: product.slug } }">
                        <div class="relative bg-athens-gray mb-[1.5625rem] py-10">
                            <p class="absolute z-[1] w-max m-0 left-1/2 top-[1rem] -translate-x-1/2 -translate-y-1/2 uppercase font-matroska text-[0.55rem] lg:text-[0.8125rem]">{{ product.shortName }} <span v-if="product.isNewest" class="text-azure-radiance">New</span></p>
                            <img v-if="product.images.length === 1" :data-src="product.images[0].imagePath" class="lazyload w-full h-[10rem] object-contain" alt="">
                            <div v-if="product.images.length === 2" class="group relative h-[10rem]">
                                <img :data-src="product.images[0].imagePath" class="lazyload opacity-100 duration-300 ease-in-out group-hover:!opacity-0 absolute inset-0 w-full h-full object-contain" alt="">
                                <img :data-src="product.images[1].imagePath" class="lazyload opacity-0 duration-300 ease-in-out group-hover:!opacity-100 absolute inset-0 w-full h-full object-contain" alt="">
                            </div>
                            <button @click.prevent="getCartData(product.id)" class="absolute left-1/2 bottom-0 -translate-x-1/2 lg:h-[2.1875rem] w-max p-2
                              md:h-[3.125rem] flex justify-center items-center border border-cod-gray rounded-lg
                              hover:bg-cod-gray hover:text-white animated text-xs lg:text-base mb-1
                              ">
                                {{ $t('catalog.add_to_cart') }}
                            </button>
                        </div>
                        <div class="flex flex-col lg:items-start items-center lg:text-left text-center">
                            <p class="m-0 font-semibold text-sm lg:text-base">{{ product.name }}</p>
                            <p class="m-0 hidden lg:block text-xs text-shuttle-gray py-[0.625rem]" v-html="product.description"></p>
                            <p class="m-0">{{ product.priceWithSymbol }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
            <button v-if="products.meta.total > products.data.length" @click.prevent="loadMore()" class="px-[1.625rem] py-[1.25rem] border border-mercury rounded-[1.625rem] w-[8.75rem] h-[1.875rem] justify-center uppercase text-xs font-semibold flex items-center w-max mx-auto">
                {{ $t('catalog.see_more') }} <span class="pl-2">+</span>
            </button>
        </div>
    </section>

    <TransitionRoot
        v-if="!_.isEmpty(cartData)"
        :show="isAddToCartModalOpen"
        id="addToCart"
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
    >
        <Dialog @close="setIsAddToCartModalOpen" class="bg-white fixed inset-x-0 w-full left-0 md:top-[4.3rem] top-[3.7rem] md:pt-[3.125rem] pt-[1.875rem] z-[999]">
            <DialogPanel>
                <div class="container relative min-h-screen">
                        <button @click.prevent="setIsAddToCartModalOpen(false)" class="w-max block">
                            <img src="/i/icons/arrow-left.svg" class="lg:pl-[2.25rem] pt-10" alt="">
                        </button>
                        <div class="pt-[2.5rem] text-center">
                            <p class="m-0 text-[1.6875rem] text-cape-cod pb-6 capitalize">{{ $t('catalog.choose_your') }} {{ Object.keys(cartData.options)[0] }}</p>
                            <p class="text-lg font-matroska uppercase">{{ getProductByOption.name }} <span class="text-xl pl-4 font-sf-pro-display-regular">{{ getProductByOption.priceWithSymbol }}</span></p>
                        </div>
                        <div v-if="cartData.category.slug === 'machines'" class="mt-[3.375rem] mb-[4.5rem] flex justify-center gap-x-[1rem]">
                            <div v-for="color in cartData.options.color" :key="color.slug" @click.prevent="setSelectedOption(color.slug)" class="group">
                                <div class="flex flex-col rounded-[1.25rem] group-hover:bg-athens-gray items-center px-[2.625rem] pt-[2rem] pb-[1.625rem] cursor-pointer" :class="{ '!bg-athens-gray' : selectedOption.color === color.slug }">
                                    <img src="/i/icons/check-i.svg" class="w-[1.375rem] pb-4 opacity-0" alt="" :class="{ '!opacity-100' : selectedOption.color === color.slug }">
                                    <p class="text-shuttle-gray text-base pb-4 group-hover:text-cod-gray group-hover:font-semibold" :class="{ '!font-semibold' : selectedOption.color === color.slug }">{{ color.name }}</p>
                                    <img :src="color.imagePath" class="w-[2.9375rem] h-[13.3125rem] object-contain" alt="">
                                </div>
                            </div>
                        </div>
                        <img v-if="cartData.category.slug === 'cartriges'" :src="getProductByOption.imagePath" class="w-[17.1875rem] h-[3.75rem] mx-auto lg:mt-[5rem] md:mt-[11.375rem] md:block hidden" alt="">
                        <div v-if="cartData.category.slug === 'cartriges'" class="lg:my-[3.75rem] md:mt-[6.25rem] mt-[3.875rem] md:mb-[8.6875rem] mb-[3.875rem] flex md:flex-row flex-col justify-center">
                            <div v-for="diameter in cartData.options.diameter" :key="diameter.slug" @click.prevent="setSelectedOption(diameter.slug)" class="group">
                                <div class="flex flex-col rounded-[1.25rem] group-hover:bg-athens-gray items-center p-4 gap-y-4 cursor-pointer" :class="{ '!bg-athens-gray' : selectedOption.diameter === diameter.slug }">
                                    <img src="/i/icons/check-i.svg" class="w-[1.375rem] opacity-0" alt="" :class="{ '!opacity-100' : selectedOption.diameter === diameter.slug }">
                                    <p class="text-base text-cape-cod font-semibold">{{ diameter.name }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-if="cartData.category.slug === 'power-unit'" class="mt-[3.375rem] mb-[4.5rem] flex justify-center gap-x-[1rem]">
                            <div v-for="color in cartData.options.color" :key="color.slug" @click.prevent="setSelectedOption(color.slug)" class="group">
                                <div class="flex flex-col rounded-[1.25rem] group-hover:bg-athens-gray items-center px-[2.625rem] pt-[2rem] pb-[1.625rem] cursor-pointer" :class="{ '!bg-athens-gray' : selectedOption.color === color.slug }">
                                    <img src="/i/icons/check-i.svg" class="w-[1.375rem] pb-4 opacity-0" alt="" :class="{ '!opacity-100' : selectedOption.color === color.slug }">
                                    <p class="text-shuttle-gray text-base pb-4 group-hover:text-cod-gray group-hover:font-semibold" :class="{ '!font-semibold' : selectedOption.color === color.slug }">{{ color.name }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-if="cartData.parent_group === 'nitrile_gloves'" class="lg:my-[3.75rem] md:mt-[6.25rem] mt-[3.875rem] md:mb-[8.6875rem] mb-[3.875rem] flex md:flex-row flex-col justify-center">
                            <div v-for="size in cartData.options.size" :key="size.slug" @click.prevent="setSelectedOption(size.slug)" class="group">
                                <div class="flex flex-col rounded-[1.25rem] group-hover:bg-athens-gray items-center p-4 gap-y-4 cursor-pointer" :class="{ '!bg-athens-gray' : selectedOption.size === size.slug }">
                                    <img src="/i/icons/check-i.svg" class="w-[1.375rem] opacity-0" alt="" :class="{ '!opacity-100' : selectedOption.size === size.slug }">
                                    <p class="text-base text-cape-cod font-semibold">{{ size.name }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center gap-x-5">
                            <div class="relative">
                                <p class="m-0 absolute top-1/2 -translate-y-1/2 left-[1.3rem]">{{ $t('cart.qty') }}</p>
                                <select v-model="selectedQty" class="border border-mercury rounded-lg py-3 flex justify-between w-[10rem] h-[3.25rem] text-center">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <button @click.prevent="buyHandle()" type="button" class="rounded-lg bg-cod-gray text-white text-base w-[10rem] h-[3.25rem]">
                                {{ $t('catalog.add_to_cart') }}
                            </button>
                        </div>
                    </div>
            </DialogPanel>
        </Dialog>
    </TransitionRoot>

    <Transition
        v-if="!_.isEmpty(cartData)"
        v-show="addedToCart"
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform opacity-100"
        leave-to-class="transform opacity-0"
    >
        <div class="absolute lg:top-[4.4375rem] md:top-[2.5rem] py-[0.5rem] bg-cod-gray w-full text-xs flex justify-center items-center uppercase gap-x-4 z-[100]">
            <img src="/i/icons/added-to-bag-i.svg" class="w-3.5" alt="">
            <p class="m-0 font-matroska text-white">{{ getProductByOption.name }}</p>
            <p class="m-0 text-mercury">{{ $t('catalog.added_to_bag') }}</p>
        </div>
    </Transition>
</template>

<script setup>
import {computed, onMounted, watch, ref} from "vue";
import {TransitionRoot, Dialog, DialogPanel, Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue'
import _ from 'lodash';
import useCatalog from "../composables/useCatalog"
import useCategories from "../composables/useCategories"
import useHelper from "../composables/useHelper";
import useCart from "../composables/useCart";

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const {isDesktop, isHandheld, isMobile, isTablet, setDocumentTitle} = useHelper()
const {
    products, characteristics,
    filter, sort, page,
    setAllCategories, setCategory, setAllCharacteristic, setCharacteristic, setSort, loadMore,
    checkSelectedAllCharacteristic, checkSelectedCharacteristic,
    setValuesFromRoute, clearFilter,
    getProducts, getCharacteristics
} = useCatalog()
const {categories, findByField} = useCategories()
const {addToCart} = useCart()

const categoryFromSlug = computed(() => findByField('slug', route.params.slug))

watch(route, () => {
    if(route.name === 'catalog') {
        page.value = 1
        getProducts()
    }
}, {deep: true})

const isAddToCartModalOpen = ref(false)
const cartData = ref([])
const selectedQty = ref(1);
const selectedOption = ref(null);
const addedToCart = ref(false);

const getCartData = async productId => {
    try {
        let response = await axios.get(`/api/products/add-to-cart/${productId}`)
        cartData.value = response.data.data
        if(cartData.value.category.slug === 'machines' || cartData.value.category.slug === 'power-unit') {
            selectedOption.value = {color: cartData.value.options.color[0].slug}
        }
        if(cartData.value.category.slug === 'cartriges') {
            selectedOption.value = {diameter: cartData.value.options.diameter[0].slug}
        }
        if(cartData.value.parent_group === 'nitrile_gloves') {
            selectedOption.value = {size: cartData.value.options.size[0].slug}
        }
        selectedQty.value = 1
        setIsAddToCartModalOpen(true)
    } catch (e) { }
}
const getProductByOption = computed(() => {
    if(cartData.value.category.slug === 'machines' || cartData.value.category.slug === 'power-unit') {
        return _.find(cartData.value.options.color, ['slug', selectedOption.value.color]).product
    }
    if(cartData.value.category.slug === 'cartriges') {
        return _.find(cartData.value.options.diameter, ['slug', selectedOption.value.diameter]).product
    }
    if(cartData.value.parent_group === 'nitrile_gloves') {
        return _.find(cartData.value.options.size, ['slug', selectedOption.value.size]).product
    }
    return null
})

const setSelectedOption = (slug) => {
    if(cartData.value.category.slug === 'machines' || cartData.value.category.slug === 'power-unit') {
        selectedOption.value = {color: slug}
    }
    if(cartData.value.category.slug === 'cartriges') {
        selectedOption.value = {diameter: slug}
    }
    if(cartData.value.parent_group === 'nitrile_gloves') {
        selectedOption.value = {size: slug}
    }
}
const setIsAddToCartModalOpen = value => {
    isAddToCartModalOpen.value = value
}
const buyHandle = () => {
    addToCart({
        product_id: getProductByOption.value.id,
        option: selectedOption.value,
        qty: selectedQty.value
    })
    setIsAddToCartModalOpen(false)

    addedToCart.value = true;
    setTimeout(() => {
        addedToCart.value = false;
    }, 3000)
}

onMounted(() => {
    setValuesFromRoute()
    getProducts()
    getCharacteristics()
})
</script>

<style lang="scss">
.filter-row-swiper{
    .swiper-wrapper{
        @apply py-[0.8rem] px-[0.2rem];
    }
}
</style>
