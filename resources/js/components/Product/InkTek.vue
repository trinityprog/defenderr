<template>
    <section id="choose">
        <div class="container maxlg:w-screen relative">
            <div class="lg:inline-flex block relative gap-x-[6.25rem]">
                <div class="relative prod-machine-swiper">
                    <swiper
                        id="cartridge-choose-swiper"
                        :modules="[Scrollbar, Navigation]"
                        :direction="'horizontal'"
                        :slides-per-view="1"
                        :centered-slides="false"
                        :loop="false"
                        :scrollbar="{ el: '#cartridge-choose-swiper .swiper-scrollbar' }"
                        :navigation="{ nextEl: '#cartridge-choose-swiper .swiper-button-next', prevEl: '#cartridge-choose-swiper .swiper-button-prev' }"
                        :key="selectedOption"
                        class="lg:w-[37.5rem]"
                    >
                        <swiper-slide v-for="(imagePath, index) in getProductByOption.imagesPath" :key="index" class="bg-athens-gray h-[33rem]">
                            <img :src="imagePath" class="w-full h-[26rem] object-contain" alt="">
                        </swiper-slide>


                        <div class="swiper-button-next animated"></div>
                        <div class="swiper-button-prev animated"></div>
                        <div class="swiper-scrollbar"></div>
                    </swiper>
                </div>
                <div class="lg:relative lg:pt-[5.9375rem]">
<!--                    <div v-if="isMobile" class="md:hidden flex gap-x-6 items-center justify-center mt-[3.375rem] mb-[4.625rem]">-->
<!--                        <div v-for="color in product.options.color" :key="color.slug" @click.prevent="setSelectedOption(color.slug)" class="relative">-->
<!--                            <div class="rounded-[0.9375rem] border border-transparent" :class="{ '!border-cod-gray' : selectedOption.color === color.slug }">-->
<!--                                <div class="w-[1.875rem] h-2.5 rounded-[0.9375rem] m-[0.12rem]" :style="{ 'background-color': color.colorCode }"></div>-->
<!--                            </div>-->
<!--                            <p class="text-xs absolute left-1/2 -translate-x-1/2 top-6">{{ color.name }}</p>-->
<!--                        </div>-->
<!--                    </div>-->
                    <div class="text-center md:mt-[6.25rem] lg:mt-0">
                        <p class="m-0 text-xl font-matroska">{{ getProductByOption.name }}</p>
                        <p class="m-0 text-[1.6875rem]">{{ getProductByOption.priceWithSymbol }}</p>
                    </div>
                    <div class="w-[30rem] mx-auto mt-4">
                        <select v-model="selectedOption" class="border border-mercury rounded-lg py-3 flex justify-between h-[3.25rem] text-center w-full">
                            <option v-for="diameter in product.options.diameter" :key="diameter.slug" :value="{diameter: diameter.slug}">{{ diameter.name }}</option>
                        </select>
                        <a href="/guide" target="_blank" class="text-sm uppercase inline-block my-4">How to choose</a>
                        <div class="lg:flex justify-center items-start gap-x-5 hidden">
                            <div class="relative">
                                <p class="m-0 absolute top-1/2 -translate-y-1/2 left-[1.3rem]">Qty:</p>
                                <select v-model="selectedQty" class="border border-mercury rounded-lg py-3 flex justify-between w-[10rem] h-[3.25rem] text-center">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div class="relative flex-1">
                                <button @click.prevent="buyHandle()" type="button" class="rounded-lg bg-cod-gray text-white text-base w-full h-[3.25rem]">
                                    Buy
                                </button>
                                <a v-if="product.amazonLink" :href="product.amazonLink" target="_blank" class="flex items-start justify-center mt-5">Buy on <img src="/i/icons/amazon-i.svg" alt="" class="mt-1.5 ml-0.5"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="description" class="mt-8">
        <div class="container">
            <div class="lg:flex items-center justify-between md:hidden gap-x-[6.25rem]">
                <div class="lg:min-w-[37.5rem] lg:h-[37.5rem] min-w-[21.4375rem] h-[21.4375rem] mx-auto bg-athens-gray bg-cover bg-center bg-no-repeat" :style="{'background-image': `url('/i/images/inktek/description.png')`}"></div>
                <div class="px-6 md:px-0">
                    <p class="text-cape-cod text-[2.0625rem] pb-10 pt-[3.125rem] px-6 md:px-0" v-html="$t('inktek.description')"></p>
                    <div class="px-6 md:px-0">
                        <ul>
                            <li v-for="index in 6" :key="index" class="mb-4 last:mb-0">
                                <span class="font-semibold text-black mr-4">{{ index }}</span>
                                <p class="inline-block">{{ $t(`inktek.description.${index}`) }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {computed, onMounted, ref, inject, watch} from "vue";
import useHelper from "../../composables/useHelper";
import useProduct from "../../composables/useProduct";

import { Scrollbar, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import useCart from "../../composables/useCart";
import _ from "lodash";

const {isDesktop, isHandheld, isTablet, isMobile} = useHelper()
const {
    product
} = useProduct()
const {addToCart} = useCart()
const emitter = inject('emitter')

const selectedQty = ref(1);
const selectedOption = ref({diameter: _.find(product.value.options.diameter, i => i.product.id === product.value.id).slug});
const getProductByOption = computed(() => _.find(product.value.options.diameter, ['slug', selectedOption.value.diameter]).product)

const buyHandle = () => {
    addToCart({
        product_id: getProductByOption.value.id,
        option: selectedOption.value,
        qty: selectedQty.value
    })
    emitter.emit('addedToCart', getProductByOption.value.name);
}

</script>

<style lang="scss">
#cartridge-choose-swiper{
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
</style>
