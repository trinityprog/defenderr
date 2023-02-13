<template>
    <section id="choose">
        <div class="container maxlg:w-screen relative">
            <div class="lg:inline-flex block relative gap-x-[6.25rem]">
                <div class="relative prod-machine-swiper">
                    <swiper
                        id="choose-swiper"
                        :modules="[Scrollbar, Navigation]"
                        :direction="'horizontal'"
                        :slides-per-view="1"
                        :centered-slides="false"
                        :loop="false"
                        :scrollbar="{ el: '#choose-swiper .swiper-scrollbar' }"
                        :navigation="{ nextEl: '#choose-swiper .swiper-button-next', prevEl: '#choose-swiper .swiper-button-prev' }"
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
                    <div v-if="isMobile" class="md:hidden flex gap-x-6 items-center justify-center mt-[3.375rem] mb-[4.625rem]">
                        <div v-for="color in product.options.color" :key="color.slug" @click.prevent="setSelectedOption(color.slug)" class="relative">
                            <div class="rounded-[0.9375rem] border border-transparent" :class="{ '!border-cod-gray' : selectedOption.color === color.slug }">
                                <div class="w-[1.875rem] h-2.5 rounded-[0.9375rem] m-[0.12rem]" :style="{ 'background-color': color.colorCode }"></div>
                            </div>
                            <p class="text-xs absolute left-1/2 -translate-x-1/2 top-6">{{ color.name }}</p>
                        </div>
                    </div>
                    <div class="text-center md:mt-[6.25rem] lg:mt-0">
                        <p class="m-0 text-xl font-matroska">{{ getProductByOption.name }}</p>
                        <p class="m-0 text-[1.6875rem]">{{ getProductByOption.priceWithSymbol }}</p>
                    </div>
                    <div v-if="(isTablet() || isDesktop) && product.options.color" class="md:flex hidden justify-center gap-x-[0.7rem] lg:mt-[1.8125rem] lg:w-[31.25rem] lg:relative md:absolute z-10 top-[40.5625rem] left-1/2 -translate-x-1/2 lg:top-auto lg:left-auto lg:translate-x-0">
                        <div v-for="color in product.options.color" :key="color.slug" @click.prevent="setSelectedOption(color.slug)" class="group cursor-pointer">
                            <div class="flex flex-col rounded-[1.25rem] lg:group-hover:bg-athens-gray items-center py-[1.5rem] min-w-[6rem]" :class="{ '!bg-athens-gray' : selectedOption.color === color.slug }">
                                <img src="/i/icons/check-i.svg" class="w-[1.375rem] opacity-0" alt="" :class="{ '!opacity-100' : selectedOption.color === color.slug }">
                                <div class="rounded-[0.9375rem] my-2.5">
                                    <div class="w-[3.5rem] h-[0.3125rem] rounded-[0.9375rem] m-[0.3125rem]" :style="{ 'background-color': color.colorCode }"></div>
                                </div>
                                <p class="text-shuttle-gray lg:text-xs md:text-sm group-hover:text-cod-gray group-hover:font-semibold" :class="{ '!font-semibold' : selectedOption.color === color.slug }">{{ color.name }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:flex justify-center items-start gap-x-5 mt-[4.25rem] hidden">
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
                        <div class="relative">
                            <button @click.prevent="buyHandle()" type="button" class="rounded-lg bg-cod-gray text-white text-base w-[10rem] h-[3.25rem]">
                                Buy
                            </button>
                            <a v-if="product.amazonLink" :href="product.amazonLink" target="_blank" class="flex items-start justify-center mt-5">Buy on <img src="/i/icons/amazon-i.svg" alt="" class="mt-1.5 ml-0.5"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="benefits">
        <div class="container">
            <div class="lg:border-y md:border-y-0 border-y border-mercury w-full lg:flex grid md:grid-cols-2 md:place-items-center md:gap-y-[4.375rem] gap-y-[3.75rem] lg:gap-y-0 lg:bg-white md:bg-athens-gray items-center justify-between my-[4rem] py-[4rem] lg:px-[3.125rem] px-6">
                <div class="flex lg:w-auto md:w-[13rem] items-center">
                    <div class="relative rounded-[0.625rem] w-[3.125rem] h-[3.125rem] lg:bg-athens-gray md:bg-white bg-athens-gray">
                        <img src="/i/icons/power_supply-benefits-1.svg" class="absolute-center w-[0.875rem]" alt="">
                    </div>
                    <div class="flex flex-col pl-5" v-html="$t('power_supply.benefits.1')"></div>
                </div>
                <div class="flex lg:w-auto md:w-[13rem] items-center">
                    <div class="relative rounded-[0.625rem] w-[3.125rem] h-[3.125rem] lg:bg-athens-gray md:bg-white bg-athens-gray">
                        <img src="/i/icons/power_supply-benefits-2.svg" class="absolute-center w-[1.375rem]" alt="">
                    </div>
                    <div class="flex flex-col pl-5" v-html="$t('power_supply.benefits.2')"></div>
                </div>
                <div class="flex lg:w-auto md:w-[13rem] items-center">
                    <div class="relative rounded-[0.625rem] w-[3.125rem] h-[3.125rem] lg:bg-athens-gray md:bg-white bg-athens-gray">
                        <img src="/i/icons/power_supply-benefits-3.svg" class="absolute-center w-[1.5rem]" alt="">
                    </div>
                    <div class="flex flex-col pl-5" v-html="$t('power_supply.benefits.3')"></div>
                </div>
                <div class="flex lg:w-auto md:w-[13rem] items-center">
                    <div class="relative rounded-[0.625rem] w-[3.125rem] h-[3.125rem] lg:bg-athens-gray md:bg-white bg-athens-gray">
                        <img src="/i/icons/power_supply-benefits-4.svg" class="absolute-center w-[1.5rem]" alt="">
                    </div>
                    <div class="flex flex-col pl-5" v-html="$t('power_supply.benefits.4')"></div>
                </div>
            </div>
        </div>
    </section>
    <section id="characteristics">
        <div class="container">
            <div class="md:flex hidden lg:flex-row flex-col flex-col-reverse items-center gap-x-[6.25rem] lg:mb-[9.0625rem] mb-[6.25rem]">
                <img :src="product.characteristicImagePath" class="w-[37.5rem] mt-[6.4375rem] lg:mt-0" alt="">
                <div class="lg:w-[31.25rem] w-[33rem]">
                    <p class="text-[2.0625rem] font-medium">{{ $t('product.characteristics') }}</p>
                    <p class="uppercase">{{ product.shortName }}</p>
                    <div class="mt-10">
                        <div class="group" v-for="(value, key) in characteristics[$i18n.locale].power_supply">
                            <div class="w-full flex justify-between border-b border-b-cod-gray group-hover:border-b-azure-radiance animated-1 pt-5 pb-1">
                                <p class="text-base leading-[1.3] group-hover:text-azure-radiance animated-1">{{ key }}</p>
                                <p class="text-sm leading-[1.3] group-hover:text-azure-radiance animated-1">{{ value }}</p>
                            </div>
                        </div>
                    </div>
                    <p class="mt-10 text-azure-radiance text-sm lg:hidden md:flex items-center justify-center">More info <img src="/i/icons/blue-plus-circle-i.svg" class="w-6 h-6 ml-1.5" alt=""></p>
                </div>
            </div>
        </div>
    </section>
    <section id="features">
        <div class="container">
            <div class="mb-[10.0625rem] lg:block md:hidden">
                <p class="text-center lg:text-[2.0625rem] text-[1.6875rem] lg:pb-[6.375rem] pb-[3.75rem]">{{ $t('product.features', { name: product.shortName }) }}</p>
                <div class="flex lg:flex-row flex-col justify-center gap-x-[12.5rem] lg:gap-y-0 gap-y-[5.125rem]">
                    <div class="flex flex-col items-center text-center">
                        <img src="/i/icons/power_supply-features-1.svg" alt="">
                        <p class="text-xl text-cape-cod mt-4" v-html="$t('power_supply.features.1')"></p>
                    </div>
                    <div class="flex flex-col items-center text-center">
                        <img src="/i/icons/titanium-features-4.svg" alt="">
                        <p class="text-xl text-cape-cod mt-4" v-html="$t('power_supply.features.2')"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="capabilities">
        <div class="bg-athens-gray lg:flex md:hidden lg:my-[4rem]">
            <div class="container lg:py-[4rem] py-[5.5rem] flex lg:flex-row flex-col items-center lg:gap-y-0 gap-y-20 justify-between">
                <div class="flex flex-col items-center">
                    <div class="w-[9.375rem] h-[9.375rem] bg-white rounded-[1.25rem] m-0 relative">
                        <img src="/i/icons/power_supply-capabilities-1.svg" class="absolute left-1/2 -translate-x-1/2 bottom-0 w-[6.75rem]" alt="">
                    </div>
                    <p class="pt-5 text-center font-semibold" v-html="$t('power_supply.capabilities.1')"></p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-[9.375rem] h-[9.375rem] bg-white rounded-[1.25rem] m-0 relative">
                        <img src="/i/icons/power_supply-capabilities-2.svg" class="absolute-center w-[5.18rem]" alt="">
                    </div>
                    <p class="pt-5 text-center font-semibold" v-html="$t('power_supply.capabilities.2')"></p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-[9.375rem] h-[9.375rem] bg-white rounded-[1.25rem] m-0 relative">
                        <img src="/i/icons/power_supply-capabilities-3.svg" class="absolute-center w-[4rem]" alt="">
                    </div>
                    <p class="pt-5 text-center font-semibold" v-html="$t('power_supply.capabilities.3')"></p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-[9.375rem] h-[9.375rem] bg-white rounded-[1.25rem] m-0 relative">
                        <img src="/i/icons/power_supply-capabilities-4.svg" class="absolute-center w-[3.68rem]" alt="">
                    </div>
                    <p class="pt-5 text-center font-semibold" v-html="$t('power_supply.capabilities.4')"></p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-[9.375rem] h-[9.375rem] bg-white rounded-[1.25rem] m-0 relative">
                        <img src="/i/icons/power_supply-capabilities-5.svg" class="absolute-center w-[3.2rem]" alt="">
                    </div>
                    <p class="pt-5 text-center font-semibold" v-html="$t('power_supply.capabilities.5')"></p>
                </div>
            </div>
        </div>
    </section>
    <section id="description">
        <div class="container">
            <div class="lg:flex items-center justify-between md:hidden gap-x-[6.25rem] mb-[12.5rem]">
                <div class="lg:min-w-[37.5rem] lg:h-[37.5rem] min-w-[21.4375rem] h-[21.4375rem] mx-auto bg-athens-gray bg-cover bg-center bg-no-repeat" :style="{'background-image': `url(/i/images/power_supply/description-1.png)`}"></div>
                <div class="px-6 md:px-0">
                    <p class="text-cape-cod text-[2.0625rem] pb-10 pt-[3.125rem] px-6 md:px-0" v-html="$t('power_supply.description.1.title')"></p>
                    <div class="px-6 md:px-0" v-html="$t('power_supply.description.1.text')"></div>
                </div>
            </div>
            <div class="lg:flex items-center justify-between md:hidden gap-x-[6.25rem] mb-[12.5rem]">
                <div class="lg:min-w-[37.5rem] lg:h-[37.5rem] min-w-[21.4375rem] h-[21.4375rem] mx-auto bg-athens-gray bg-cover bg-center bg-no-repeat" :style="{'background-image': `url(/i/images/power_supply/description-2.png)`}"></div>
                <div class="px-6 md:px-0">
                    <p class="text-cape-cod text-[2.0625rem] pb-10 pt-[3.125rem] px-6 md:px-0" v-html="$t('power_supply.description.2.title')"></p>
                    <div class="px-6 md:px-0" v-html="$t('power_supply.description.2.text')"></div>
                </div>
            </div>
            <div class="lg:flex items-center justify-between md:hidden gap-x-[6.25rem] mb-[12.5rem]">
                <div class="lg:min-w-[37.5rem] lg:h-[37.5rem] min-w-[21.4375rem] h-[21.4375rem] mx-auto bg-athens-gray bg-cover bg-center bg-no-repeat" :style="{'background-image': `url(/i/images/power_supply/description-3.png)`}"></div>
                <div class="px-6 md:px-0">
                    <p class="text-cape-cod text-[2.0625rem] pb-10 pt-[3.125rem] px-6 md:px-0" v-html="$t('power_supply.description.3.title')"></p>
                    <div class="px-6 md:px-0" v-html="$t('power_supply.description.3.text')"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {computed, onMounted, ref, inject} from "vue";
import useHelper from "../../composables/useHelper";
import useProduct from "../../composables/useProduct";
import { Scrollbar, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import useCart from "../../composables/useCart";
import _ from "lodash";
import characteristics from "./characteristics.json"

const {isDesktop, isHandheld, isTablet, isMobile} = useHelper()
const {
    product
} = useProduct()
const {addToCart} = useCart()
const emitter = inject('emitter')

const selectedQty = ref(1);
const selectedOption = ref({color: _.find(product.value.options.color, i => i.product.id === product.value.id).slug});
const setSelectedOption = (slug) => selectedOption.value = {color: slug}
const getProductByOption = computed(() => _.find(product.value.options.color, ['slug', selectedOption.value.color]).product)

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
#choose-swiper{
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
