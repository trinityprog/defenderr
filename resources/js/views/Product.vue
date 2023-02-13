<template>
    <section :key="product.id" id="go-back" class="md:mt-[4.3rem] mt-[3.8125rem]">
        <div class="container maxlg:w-screen relative">
            <button @click.prevent="goBack()" class="w-max block">
                <img src="/i/icons/arrow-left.svg" class="pt-10 pb-5 lg:pl-0 pl-4 md:pl-11" alt="">
            </button>

            <img :src="existsInFavorites ? '/i/icons/black-heart-i.svg' : '/i/icons/favorites-i.svg'" @click.prevent="addToFavoritesClick(product.id)" class="absolute right-0 top-[5rem] cursor-pointer lg:block hidden z-[10]" alt="">
        </div>
    </section>

    <component :key="product.id" :is="getViewComponent()"></component>

    <section :key="product.id" id="comments" v-if="product.comments.length && product.commentImagePath">
        <div class="lg:border-t border-mercury mt-[9.4375rem] md:mt-0 pb-[6.25rem] md:pb-0">
            <div class="container flex lg:flex-row md:flex-row-reverse justify-between relative">
                <div class="lg:w-1/2 lg:h-[43.75rem] md:w-[22.1875rem] md:h-[25.875rem] lg:relative md:absolute lg:top-0 top-[9.375rem] z-[100]">
                    <img :src="product.commentImagePath" class="w-full h-full object-cover" alt="">
                </div>
                <div class="lg:w-auto w-full">
                    <div class="relative lg:h-[43.75rem] lg:w-[31.25rem] lg:pb-0 pb-10 z-[99]">
                        <div class="lg:hidden">
                            <p class="md:pb-[6.25rem] pb-[3.125rem] font-medium text-[2.0625rem] text-cape-cod">Reviews</p>
                        </div>
                        <swiper
                            id="comments-swiper"
                            :modules="[Scrollbar, Navigation]"
                            :direction="'horizontal'"
                            :slides-per-view="1"
                            :centered-slides="false"
                            :loop="false"
                            :space-between="isMobile() ? 20: 0"
                            :scrollbar="{el: '#comments .swiper-scrollbar'}"
                            :navigation="{ nextEl: '#comments .swiper-button-next', prevEl: '#comments .swiper-button-prev' }"
                            :key="product.id"
                        >
                            <swiper-slide v-for="comment in product.comments" :key="product.id">
                                <div class="flex flex-col lg:items-center lg:justify-center md:items-start items-center justify-start z-10 lg:h-[43.75rem]">
                                    <div class="rounded-full w-[3.125rem] h-[3.125rem] overflow-hidden">
                                        <img :src="comment.avatarPath" class="w-full h-full object-cover" alt="">
                                    </div>
                                    <p class="font-semibold pt-5 pb-11">{{ comment.name }}</p>
                                    <p class="md:max-w-[18.75rem] whitespace-normal text-xs text-shuttle-gray">{{ comment.text }}</p>
                                </div>
                            </swiper-slide>
                        </swiper>
                        <div class="lg:hidden absolute w-[5.125rem] top-[2.3rem] right-0">
                            <div class="swiper-button-next animated-1"></div>
                            <div class="swiper-button-prev animated-1"></div>
                        </div>
                        <div class="hidden lg:block">
                            <div class="swiper-button-next animated-1"></div>
                            <div class="swiper-button-prev animated-1"></div>
                        </div>
                        <div class="swiper-scrollbar !h-[2px] lg:!bottom-[2.5rem] lg:!left-[10.8125rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section :key="product.id" id="similar-products" v-if="similarProducts.length">
        <div class="container maxlg:w-screen md:py-[12.5rem] py-[6.25rem] md:pl-10 lg:pl-0">
            <div class="flex items-center justify-between">
                <p class="md:pb-[3.125rem] pb-4 font-medium md:text-[2.0625rem] text-[1.6875rem] text-cape-cod lg:text-cod-gray pl-6 md:pl-0">{{ $t('product.similar') }}</p>
                <div class="relative w-[6rem] lg:mr-0 mr-8">
                    <div class="swiper-button-next animated-1"></div>
                    <div class="swiper-button-prev animated-1"></div>
                </div>
            </div>
            <swiper
                id="similar-products-swiper"
                :modules="[Scrollbar, Navigation]"
                :direction="'horizontal'"
                :loop="false"
                :centered-slides="false"
                :slides-per-view="isMobile() ? 2 : (isTablet() ? 3.2 : 4)"
                :slides-per-group="1"
                :space-between="isMobile() ? 0 : (isTablet() ? 13 : 36)"
                :scrollbar="{el: '#similar-products .swiper-scrollbar'}"
                :navigation="{ nextEl: '#similar-products .swiper-button-next', prevEl: '#similar-products .swiper-button-prev' }"
                :key="product.id"
                class="mx-6 md:mx-0"
            >
                <swiper-slide v-for="product in similarProducts" :key="product.id" @click.prevent="router.push({ name: 'product', params: { slug: product.slug } })" class="cursor-pointer">
                    <div class="lg:w-[17.0625rem] md:w-[15.125rem] lg:h-[20.5rem] md:h-[18.25rem] w-[10rem] h-[13.125rem] mx-auto bg-athens-gray relative">
                        <img :data-src="product.imagePath" class="lazyload absolute-center w-full h-full object-contain" alt="">
                    </div>
                    <p class="font-semibold pt-6 pb-[0.625rem] lg:text-left text-center">{{ product.name }}</p>
                    <p class="text-[0.9375rem] lg:text-left text-center">{{ product.priceWithSymbol }}</p>
                </swiper-slide>
            </swiper>

            <div class="swiper-scrollbar !static !h-[2px] mt-[3rem] lg:mt-[4rem]"></div>
        </div>
    </section>

    <Transition
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
            <p class="m-0 font-matroska text-white">{{ addedToCartProduct }}</p>
            <p class="m-0 text-mercury">added to my Bag</p>
        </div>
    </Transition>

    <Transition
        v-show="addedToFavorites"
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform opacity-100"
        leave-to-class="transform opacity-0"
    >
        <div class="absolute lg:top-[4.4375rem] md:top-[2.5rem] py-[0.5rem] bg-cod-gray w-full text-xs flex justify-center items-center uppercase gap-x-4 z-[100]">
            <img src="/i/icons/added-to-bag-i.svg" class="w-3.5" alt="">
            <p class="m-0 font-matroska text-white">{{ product.name }}</p>
            <p class="m-0 text-mercury">added to my favorites</p>
        </div>
    </Transition>
</template>

<script setup>
import {onMounted, ref, watch, inject, computed} from "vue";
import {useRouter} from "vue-router";
import {useRoute} from "vue-router";
import _ from "lodash";
import useHelper from "../composables/useHelper";
import useProduct from "../composables/useProduct";
import useFavorites from "../composables/useFavorites";

import { Scrollbar, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

const emitter = inject('emitter')
const router = useRouter()
const route = useRoute()
const {isDesktop, isHandheld, isTablet, isMobile, setDocumentTitle, goBack} = useHelper()
const {
    product, similarProducts,
    getSimilarProducts, getViewComponent
} = useProduct()
const {
    favorites,
    addToFavorites, getContent
} = useFavorites()

const addedToCart = ref(false);
const addedToCartProduct = ref(null);

const addedToFavorites = ref(false);

const existsInFavorites = computed(() => _.find(favorites.value, ['attributes.product_id', product.value.id]));

const addToFavoritesClick = productId => {
    addToFavorites({ product_id: productId })
    addedToFavorites.value = true
    setTimeout(() => addedToFavorites.value = false, 3000)
}

watch(() => route.params.slug, () => { if(route.name === 'product') {
    setDocumentTitle(product.value.name)
    getSimilarProducts()
} })

onMounted(() => {
    getSimilarProducts()
    setDocumentTitle(product.value.name)
    emitter.on('addedToCart', (e) => {
        addedToCart.value = true
        addedToCartProduct.value = e
        setTimeout(() => addedToCart.value = false, 3000)
    });
    getContent()
})
</script>

<style lang="scss">
#comments, #similar-products{
    .swiper-button-prev {
        width: 1.6rem;
        height: 1.6rem;
        border: 1px solid #E3E3E3;
        border-radius: 50%;
        &:hover {
            border: 1px solid #191818;
        }
        &::after {
            content: "";
            width: 0.4rem;
            height: 0.8rem;
            background: url("/public/i/icons/arrow-left-i.svg") 100%/contain no-repeat;
            position: absolute;
            transform: translate(0%, -50%);
            top: 50%;
            display: inline-block;
        }
    }
    .swiper-button-next {
        width: 1.6rem;
        height: 1.6rem;
        border: 1px solid #E3E3E3;
        border-radius: 50%;
        &:hover {
            border: 1px solid #191818;
        }
        &::after {
            content: "";
            width: 0.4rem;
            height: 0.8rem;
            background: url("/public/i/icons/arrow-right-i.svg") 100%/contain no-repeat;
            position: absolute;
            transform: translate(0%, -50%);
            top: 50%;
            display: inline-block;
        }
    }
}

#comments {
    .swiper-scrollbar {
        .swiper-scrollbar-horizontal {
            width: 100%;
        }
    }
    .swiper-button-prev {
        left: 0;
    }
    .swiper-button-next {
        right: 0;
    }
}
@media (min-width: 1024px) {
    #comments {
        .swiper-scrollbar {
            width: 9.0625rem !important;
        }
    }
}
</style>
