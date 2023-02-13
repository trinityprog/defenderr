<template>
    <section id="docs">
        <div class="container maxlg:w-screen">
            <div class="flex flex-col md:flex-row lg:h-[23.125rem] md:h-[18rem]">
                <a :href="`/docs/presentation-${product.parentGroup}-${locale}.pdf`" target="_blank" class="md:w-1/2 relative">
                    <div class="absolute lg:top-[3.125rem] md:top-[2.1875rem] top-[1.5rem] left-[1.5rem] lg:left-[6.25rem] md:left-[2.4375rem]">
                        <p class="font-matroska text-sm lg:pb-5 pb-2.5 uppercase">{{ product.shortName }}</p>
                        <div class="flex items-center gap-x-5">
                            <span class="lg:text-[1.6875rem] text-[1.3125rem] leading-[1.3] text-cape-cod border-b border-b-cape-cod">{{ $t('product.presentation') }}</span>
                            <img src="/i/icons/staple-i.svg" alt="">
                        </div>
                    </div>
                    <img :data-src="`/i/images/${product.parentGroup}/presentation.jpg`" :key="product.parentGroup" alt="" class="lazyload w-full h-full object-cover">
                </a>
                <a :href="`/docs/manual-${product.parentGroup}-${locale}.pdf`" target="_blank" class="md:w-1/2 relative">
                    <div class="absolute lg:top-[3.125rem] md:top-[2.1875rem] top-[1.5rem] left-[1.5rem] lg:left-[6.25rem] md:left-[2.4375rem]">
                        <p class="font-matroska text-sm lg:pb-5 pb-2.5 uppercase">{{ product.shortName }}</p>
                        <div class="flex items-center gap-x-5">
                            <span class="lg:text-[1.6875rem] text-[1.3125rem] leading-[1.3] text-cape-cod border-b border-b-cape-cod">{{ $t('product.manual') }}</span>
                            <img src="/i/icons/staple-i.svg" alt="">
                        </div>
                    </div>
                    <img :data-src="`/i/images/${product.parentGroup}/manual.jpg`" :key="product.parentGroup" alt="" class="lazyload w-full h-full object-cover">
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import useProduct from "../../composables/useProduct";
import i18n from '../../i18n'

const { locale } = i18n.global;
const {
    product
} = useProduct()
</script>
