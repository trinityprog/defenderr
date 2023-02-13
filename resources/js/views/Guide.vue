<template>
    <section id="guide" class="md:mt-[4.3rem] mt-[3.8125rem]">
        <div class="bg-athens-gray">
            <div class="container maxlg:w-screen flex lg:flex-row flex-col items-center justify-start gap-x-[16.5625rem] lg:pt-[3.125rem] lg:pb-[3.4375rem]">
                <div class="lg:border-none border-b border-mercury lg:w-auto w-full lg:px-0 px-6">
                    <div class="lg:block flex items-center justify-between">
                        <p class="font-bold pb-5 lg:pt-0 pt-5">{{ $t('guide.about_cartridges') }}</p>
                        <img src="/i/icons/arrow-down-i.svg" class="lg:hidden" alt="">
                    </div>
                    <div class="text-sm grid gap-y-3.5 pb-5 lg:pb-0">
                        <a href="#">{{ $t('guide.needle_sharpening') }}</a>
                        <a href="#"><span class="font-bold">RLMT-T</span>  {{ $t('guide.polishing_types') }}</a>
                        <a href="#"><span class="font-bold">RL, RS</span>  {{ $t('guide.bunch_needles') }}</a>
                        <a href="#"><span class="font-bold">SEMST</span>  {{ $t('guide.magnums') }} </a>
                        <a href="#">{{ $t('guide.how_cartridges') }}</a>
                    </div>
                </div>
                <div class="lg:border-none border-b border-mercury lg:w-auto w-full lg:px-0 px-6">
                    <div class="lg:block flex items-center justify-between">
                        <p class="font-bold pb-5 lg:pt-0 pt-5">{{ $t('guide.selection_tips') }}</p>
                        <img src="/i/icons/arrow-down-i.svg" class="lg:hidden" alt="">
                    </div>
                    <div class="text-sm grid gap-y-3.5 pb-5 lg:pb-0">
                        <a href="#"><span class="font-bold">RLST</span>  Round Liner Short Taper</a>
                        <a href="#"><span class="font-bold">RLMT</span>  Round Liner Medium Taper</a>
                        <a href="#"><span class="font-bold">RLHLT</span>  Round Liner Half Long Taper</a>
                        <a href="#"><span class="font-bold">RLLT</span>  Round Liner Long Taper</a>
                        <a href="#"><span class="font-bold">RLSLT</span>  Round Liner Super Long Taper</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-8 pb-12">
            <h1 class="text-[2.0625rem] font-medium pb-8 text-center lg:block hidden">{{ $t('guide.guide_configurations') }}</h1>
            <div class="flex lg:flex-row flex-col lg:items-end items-center justify-start gap-x-[3.4375rem]">
                <div class="flex flex-col">
                    <p class="font-bold lg:text-end text-center">
                        {{ $t('guide.diameter') }} <br class="lg:block hidden">
                        {{ $t('guide.needle_thickness') }}
                    </p>
                    <div class="flex items-end pt-5 lg:gap-x-8 gap-x-6">
                        <div>
                            <div class="w-[0.3125rem] h-[0.3125rem] bg-cod-gray rounded-full"></div>
                            <p class="pt-3.5">18</p>
                        </div>
                        <div>
                            <div class="w-1.5 h-1.5 bg-cod-gray rounded-full"></div>
                            <p class="pt-3.5">20</p>
                        </div>
                        <div>
                            <div class="w-2 h-2 bg-cod-gray rounded-full"></div>
                            <p class="pt-3.5">25</p>
                        </div>
                        <div>
                            <div class="w-2.5 h-2.5 bg-cod-gray rounded-full"></div>
                            <p class="pt-3.5">27</p>
                        </div>
                        <div>
                            <div class="w-3 h-3 bg-cod-gray rounded-full"></div>
                            <p class="pt-3.5">30</p>
                        </div>
                        <div>
                            <div class="w-3.5 h-3.5 bg-cod-gray rounded-full"></div>
                            <p class="pt-3.5">33</p>
                        </div>
                        <div>
                            <div class="w-4 h-4 bg-cod-gray rounded-full"></div>
                            <p class="pt-3.5">35</p>
                        </div>
                        <div>
                            <div class="w-[1.125rem] h-[1.125rem] bg-cod-gray rounded-full"></div>
                            <p class="pt-3.5">40</p>
                        </div>
                    </div>
                </div>
                <div class="flex lg:flex-row flex-col lg:items-center items-start gap-x-[1.875rem] lg:py-0 py-4">
                    <img src="/i/icons/guide-arrow-left-i.svg" class="lg:block hidden" alt="">
                    <img src="/i/icons/needle-arrow-down-i.svg" class="lg:hidden rotate-180" alt="">
                    <p class="lg:text-8xl text-5xl font-extralight lg:py-0 py-2">30<span class="px-6 text-[#D0D0D0]">/</span>01</p>
                    <img src="/i/icons/needle-arrow-down-i.svg" class="lg:hidden ml-auto" alt="">
                    <img src="/i/icons/guide-arrow-right-i.svg" class="lg:block hidden" alt="">
                </div>
                <div class="flex flex-col">
                    <p class="font-bold lg:text-left text-center">{{ $t('guide.needles_in_solder') }}</p>
                    <div class="flex items-end pt-5 gap-x-11">
                        <div class="flex flex-col items-center">
                            <div class="w-1.5 h-1.5 bg-cod-gray rounded-full"></div>
                            <p class="pt-3.5">1</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="/i/icons/three-dot-i.svg" class="w-[1.375rem] h-[1.1875rem]" alt="">
                            <p class="pt-3.5">3</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="/i/icons/five-dot-i.svg" class="w-6 h-6" alt="">
                            <p class="pt-3.5">5</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="/i/icons/seven-dot-i.svg" class="w-6 h-6" alt="">
                            <p class="pt-3.5">7</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:border-y border-b border-mercury">
            <div class="container lg:py-8 pb-8">
                <h2 class="text-[2.0625rem] text-center font-medium">{{ $t('guide.needle_sharpening') }}</h2>
                <p class="pt-2 lg:text-xl text-center">{{ $t('guide.the_longer') }}</p>
                <div class="lg:pt-8 pt-4 flex lg:flex-row flex-col gap-x-[1.875rem]">
                    <div class="bg-athens-gray lg:w-1/2 lg:pt-12 lg:px-[6.25rem] lg:pb-[3.75rem] flex lg:flex-row flex-col
                                px-[3.125rem] py-[4.75rem] lg:items-end items-center gap-x-[1.875rem] rounded-[1.25rem]">
                        <div class="font-semibold text-center flex lg:flex-col items-center lg:justify-center lg:w-auto w-full">
                            <img src="/i/icons/needle-8.5mm-i.svg" class="mx-auto w-[1.5625rem] h-[10.25rem] lg:block hidden" alt="">
                            <div class="lg:text-center text-end lg:p-0 pr-4 pb-4">
                                <p class="pt-5 lg:pb-2.5 pb-1 lg:whitespace-normal whitespace-nowrap">8.5 mm</p>
                                <p>ST</p>
                            </div>
                            <img src="/i/icons/7.55mm-i.svg" class="lg:hidden" alt="">
                        </div>
                        <div class="font-semibold text-center flex lg:flex-col items-center lg:justify-center lg:w-auto w-full">
                            <img src="/i/icons/needle-7.5mm-i.svg" class="mx-auto w-[1.5625rem] h-[7.875rem] lg:block hidden" alt="">
                            <div class="lg:text-center text-end lg:p-0 pr-4 pb-4">
                                <p class="pt-5 lg:pb-2.5 pb-1 lg:whitespace-normal whitespace-nowrap">7.5 mm</p>
                                <p>MT</p>
                            </div>
                            <img src="/i/icons/7.55mm-i.svg" class="lg:hidden" alt="">
                        </div>
                        <div class="font-semibold text-center flex lg:flex-col items-center lg:justify-center lg:w-auto w-full">
                            <img src="/i/icons/needle-5.5mm-i.svg" class="mx-auto w-6 h-[6.625rem] lg:block hidden" alt="">
                            <div class="lg:text-center text-end lg:p-0 pr-4 pb-4">
                                <p class="pt-5 lg:pb-2.5 pb-1 lg:whitespace-normal whitespace-nowrap">5.5 mm</p>
                                <p>HLT</p>
                            </div>
                            <img src="/i/icons/5.5mm-i.svg" class="lg:hidden" alt="">
                        </div>
                        <div class="font-semibold text-center flex lg:flex-col items-center lg:justify-center lg:w-auto w-full">
                            <img src="/i/icons/needle-3.5mm-i.svg" class="mx-auto w-6 h-[5.5625rem] lg:block hidden" alt="">
                            <div class="lg:text-center text-end lg:p-0 pr-4 pb-4">
                                <p class="pt-5 lg:pb-2.5 pb-1 lg:whitespace-normal whitespace-nowrap">3.5 mm</p>
                                <p>LT</p>
                            </div>
                            <img src="/i/icons/3.5mm-i.svg" class="lg:hidden" alt="">
                        </div>
                        <div class="font-semibold text-center flex lg:flex-col items-center lg:justify-center lg:w-auto w-full">
                            <img src="/i/icons/needle-1.5mm-i.svg" class="mx-auto w-6 h-[3.4375rem] lg:block hidden" alt="">
                            <div class="lg:text-center text-end lg:p-0 pr-4 pb-4">
                                <p class="pt-5 lg:pb-2.5 pb-1 lg:whitespace-normal whitespace-nowrap">1.5 mm</p>
                                <p>SLT</p>
                            </div>
                            <img src="/i/icons/1.5mm-i.svg" class="lg:hidden" alt="">
                        </div>
                    </div>
                    <div class="lg:bg-athens-gray rounded-[1.25rem] lg:w-1/2 flex items-center justify-center lg:pt-0 pt-[3.125rem]">
                        <div class="grid gap-y-[1.125rem]">
                            <p class="text-cape-cod"><span class="text-cod-gray font-semibold pr-4">1.5 mm</span>ST Short Taper</p>
                            <p class="text-cape-cod"><span class="text-cod-gray font-semibold pr-4">1.5 mm</span>MT Medium Taper</p>
                            <p class="text-cape-cod"><span class="text-cod-gray font-semibold pr-4">1.5 mm</span>HLT Half Long Taper</p>
                            <p class="text-cape-cod"><span class="text-cod-gray font-semibold pr-4">1.5 mm</span>LT Long Taper</p>
                            <p class="text-cape-cod"><span class="text-cod-gray font-semibold pr-4">1.5 mm</span>SLT Super Long Taper</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container py-8">
            <h3 class="text-[2.0625rem] text-center font-medium">{{ $t('guide.needle_sharpening') }}</h3>
            <div class="flex justify-center pt-[4.4375rem]">
                <div class="swiper needleSharpeningSwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="#" class="border border-mercury rounded-[2.1875rem] py-2.5 px-6 text-sm font-semibold animated-1 hover:text-azure-radiance hover:border-azure-radiance">
                                RLST
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#" class="border border-mercury rounded-[2.1875rem] py-2.5 px-6 text-sm font-semibold animated-1 hover:text-azure-radiance hover:border-azure-radiance">
                                RLMT
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#" class="border border-mercury rounded-[2.1875rem] py-2.5 px-6 text-sm font-semibold animated-1 hover:text-azure-radiance hover:border-azure-radiance">
                                RLHLT
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#" class="border border-mercury rounded-[2.1875rem] py-2.5 px-6 text-sm font-semibold animated-1 hover:text-azure-radiance hover:border-azure-radiance">
                                RLLT
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="#" class="border border-mercury rounded-[2.1875rem] py-2.5 px-6 text-sm font-semibold animated-1 hover:text-azure-radiance hover:border-azure-radiance">
                                RLSLT
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-b border-mercury pb-8">
                <div class="py-8 leading-[1.3] flex gap-x-[5.625rem]">
                    <div class="flex flex-col justify-between">
                        <div>
                            <div class="lg:pb-[1.875rem]">
                                <p class="text-[1.6875rem] font-bold">RLST</p>
                                <p class="text-xl">Round Liner Short Taper</p>
                            </div>
                            <img src="/i/trash/guide.png" class="w-[21.4375rem] h-[17.0625rem] my-[3.125rem] lg:hidden" alt="">
                            <div class="grid gap-y-6">
                                <p class="text-[0.9375rem]">
                                    Kороткая пулевидная заточка. <br>
                                    Имеет округлый и притупленный кончик, который препятствует слишком быстрому и глубокому проколу. <br>
                                    При работе с ней важно не забывать про натяжение кожи.
                                </p>
                                <p class="text-[0.9375rem]">                                    Она отлично подходит для теневого послойного напыления бровей и бережной работы на плотной и толстой коже, особенно в местах, где важно чтобы иголка не утонула глубоко, а пигмент остался только в поверхностном слое.</p>
                            </div>
                        </div>
                        <div class="flex lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:mt-0 mt-6 justify-between">
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/shadow-eyebrow-spraying-i.svg" class="absolute-center w-[2.625rem] h-[2.625rem]" alt="">
                                </div>
                                <p v-html="$t('guide.shadow_eyebrow')"></p>
                            </div>
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/tidy-pixels-i.svg" class="absolute-center w-[3.125rem] h-[3.125rem]" alt="">
                                </div>
                                <p>{{ $t('guide.tidy_pixels') }}</p>
                            </div>
                        </div>
                    </div>
                    <img src="/i/trash/guide.png" class="w-[35.625erm] h-[21.3125rem] lg:block hidden" alt="">
                </div>
                <router-link :to="{ name: 'catalog', params: { slug: 'cartriges' }, query: { 'taper-type': 'rlst' } }" class="flex items-center justify-between w-[15.75rem] h-[3.125rem] px-[1.875rem] mx-auto rounded-[1.625rem] border border-cod-gray text-xs uppercase font-semibold">
                    {{ $t('guide.buy') }} RLST
                    <img src="/i/icons/arrow-right-2-i.svg" alt="">
                </router-link>
            </div>
            <div class="border-b border-mercury pb-8">
                <div class="py-8 leading-[1.3] flex gap-x-[5.625rem]">
                    <div class="flex flex-col justify-between">
                        <div>
                            <div class="lg:pb-[1.875rem]">
                                <p class="text-[1.6875rem] font-bold">RLMT</p>
                                <p class="text-xl">Round Liner Medium Taper</p>
                            </div>
                            <img src="/i/trash/guide.png" class="w-[21.4375rem] h-[17.0625rem] my-[3.125rem] lg:hidden" alt="">
                            <div class="grid gap-y-6">
                                <p class="text-[0.9375rem]">
                                    Cредняя конусная заточка. <br>
                                    Достаточно универсальна и подходит для пудровой техники, перманента губ или стрелки с растушевкой. Окончательный результат зависит от выбранного диаметра.
                                </p>
                                <p class="text-[0.9375rem]"></p>
                            </div>
                        </div>
                        <div class="flex lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:mt-0 mt-6 justify-between">
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/solid-color-i.svg" class="absolute-center w-[3.125rem] h-[3.125rem]" alt="">
                                </div>
                                <p>Плотный прокрас</p>
                            </div>
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/pomade-effect-i.svg" class="absolute-center w-[2.3125rem] h-[1.375rem]" alt="">
                                </div>
                                <p>Помадный эффект</p>
                            </div>
                        </div>
                    </div>
                    <img src="/i/trash/guide.png" class="w-[35.625erm] h-[21.3125rem] lg:block hidden" alt="">
                </div>
                <router-link :to="{ name: 'catalog', params: { slug: 'cartriges' }, query: { 'taper-type': 'rlmt' } }" class="flex items-center justify-between w-[15.75rem] h-[3.125rem] px-[1.875rem] mx-auto rounded-[1.625rem] border border-cod-gray text-xs uppercase font-semibold">
                    {{ $t('guide.buy') }} RLMT
                    <img src="/i/icons/arrow-right-2-i.svg" alt="">
                </router-link>
            </div>
            <div class="border-b border-mercury pb-8">
                <div class="py-8 leading-[1.3] flex gap-x-[5.625rem]">
                    <div class="flex flex-col justify-between">
                        <div>
                            <div class="lg:pb-[1.875rem]">
                                <p class="text-[1.6875rem] font-bold">RLHLT</p>
                                <p class="text-xl">Round Liner Half Long Taper</p>
                            </div>
                            <img src="/i/trash/guide.png" class="w-[21.4375rem] h-[17.0625rem] my-[3.125rem] lg:hidden" alt="">
                            <div class="grid gap-y-6">
                                <p class="text-[0.9375rem]">
                                    Острая заточка. <br>
                                    Золотая середина и оптимальная заточка для всех техник ПМ.
                                    Идеальна как для нормальной, так и для жирной и пористой кожи. <br>
                                    Прекрасно проявляет себя на пудровых бровях, межресничке, а ещё когда требуется плотный прокрас губ.
                                </p>
                                <p class="text-[0.9375rem]"></p>
                            </div>
                        </div>
                        <div class="flex lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:mt-0 mt-6 justify-between">
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/solid-color-i.svg" class="absolute-center w-[3.125rem] h-[3.125rem]" alt="">
                                </div>
                                <p>Плотный прокрас</p>
                            </div>
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/powdered-eyebrows-i.svg" class="absolute-center w-8 h-[1.3125rem]" alt="">
                                </div>
                                <p>Пудровые брови</p>
                            </div>
                        </div>
                    </div>
                    <img src="/i/trash/guide.png" class="w-[35.625erm] h-[21.3125rem] lg:block hidden" alt="">
                </div>
                <router-link :to="{ name: 'catalog', params: { slug: 'cartriges' }, query: { 'taper-type': 'rlhlt' } }" class="flex items-center justify-between w-[15.75rem] h-[3.125rem] px-[1.875rem] mx-auto rounded-[1.625rem] border border-cod-gray text-xs uppercase font-semibold">
                    {{ $t('guide.buy') }} RLHLT
                    <img src="/i/icons/arrow-right-2-i.svg" alt="">
                </router-link>
            </div>
            <div class="border-b border-mercury pb-8">
                <div class="py-8 leading-[1.3] flex gap-x-[5.625rem]">
                    <div class="flex flex-col justify-between">
                        <div>
                            <div class="lg:pb-[1.875rem]">
                                <p class="text-[1.6875rem] font-bold">RLLT</p>
                                <p class="text-xl">Round Liner Long Taper</p>
                            </div>
                            <img src="/i/trash/guide.png" class="w-[21.4375rem] h-[17.0625rem] my-[3.125rem] lg:hidden" alt="">
                            <div class="grid gap-y-6">
                                <p class="text-[0.9375rem]">
                                    Длинная конусная заточка, заостренная на кончике.
                                </p>
                                <p class="text-[0.9375rem]">
                                    Является самой популярной заточкой на ПМ-рынке в странах СНГ. <br>
                                    Оптимальна для тонкой и эластичной кожи, прогибающейся под иглой, особенно на веках и губах, где прокол требуется быстрый и результативный.
                                </p>
                            </div>
                        </div>
                        <div class="flex lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:mt-0 mt-6 justify-between">
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/hair-technique-i.svg" class="absolute-center w-[2.125rem] h-4" alt="">
                                </div>
                                <p>Волосковая техника</p>
                            </div>
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/pixel-eyebrows-i.svg" class="absolute-center w-[2.625rem] h-[2.625rem]" alt="">
                                </div>
                                <p>Пиксельные брови</p>
                            </div>
                        </div>
                    </div>
                    <img src="/i/trash/guide.png" class="w-[35.625erm] h-[21.3125rem] lg:block hidden" alt="">
                </div>
                <router-link :to="{ name: 'catalog', params: { slug: 'cartriges' }, query: { 'taper-type': 'rllt' } }" class="flex items-center justify-between w-[15.75rem] h-[3.125rem] px-[1.875rem] mx-auto rounded-[1.625rem] border border-cod-gray text-xs uppercase font-semibold">
                    {{ $t('guide.buy') }} RLLT
                    <img src="/i/icons/arrow-right-2-i.svg" alt="">
                </router-link>
            </div>
            <div class="pb-8">
                <div class="py-8 leading-[1.3] flex gap-x-[5.625rem]">
                    <div class="flex flex-col justify-between">
                        <div>
                            <div class="lg:pb-[1.875rem]">
                                <p class="text-[1.6875rem] font-bold">RLSLT</p>
                                <p class="text-xl">Round Liner Super Long Taper</p>
                            </div>
                            <img src="/i/trash/guide.png" class="w-[21.4375rem] h-[17.0625rem] my-[3.125rem] lg:hidden" alt="">
                            <div class="grid gap-y-6">
                                <p class="text-[0.9375rem]">
                                    Очень острая заточка, <br>
                                    которую компания Defenderr первой выпустила на рынок ПМ. <br>
                                    Подходит для молодой, комбинированной или шрамированной кожи.
                                    Благодаря своей остроте идеальна для волосковой техники.
                                </p>
                                <p class="text-xs border-l border-cod-gray pl-2.5">
                                    Новичкам стоит быть осторожными при работе с этой заточкой на веках и губах, <br>
                                    т.к. с ней необходимо контролировать глубину проникновения, чтобы работа <br>
                                    не превратилась в травматичную.
                                </p>
                            </div>
                        </div>
                        <div class="flex lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:mt-0 mt-6 justify-between">
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/scarred-skin-i.svg" class="absolute-center w-[1.875rem] h-[1.875rem]" alt="">
                                </div>
                                <p>
                                    Для шрамированной <br>
                                    кожи
                                </p>
                            </div>
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/hair-technique-2-i.svg" class="absolute-center w-[1.8125rem] h-3" alt="">
                                </div>
                                <p>Волосковая техника</p>
                            </div>
                        </div>
                    </div>
                    <img src="/i/trash/guide.png" class="w-[35.625erm] h-[21.3125rem] lg:block hidden" alt="">
                </div>
                <router-link :to="{ name: 'catalog', params: { slug: 'cartriges' }, query: { 'taper-type': 'rlslt' } }" class="flex items-center justify-between w-[15.75rem] h-[3.125rem] px-[1.875rem] mx-auto rounded-[1.625rem] border border-cod-gray text-xs uppercase font-semibold">
                    {{ $t('guide.buy') }} RLSLT
                    <img src="/i/icons/arrow-right-2-i.svg" alt="">
                </router-link>
            </div>
        </div>
        <div class="border-y border-mercury">
            <div class="container lg:pt-8 lg:pb-12 pt-4 pb-8">
                <h4 class="text-[2.0625rem] text-center font-medium">Типы полировки</h4>
                <div class="flex lg:flex-row flex-col gap-x-[8.5rem] pt-[5.4375rem]">
                    <div class="lg:w-1/2 flex flex-col justify-between">
                        <div class="grid gap-y-6">
                            <p><span class="font-bold">Текстурированные иглы</span> имеют специальные микробороздки, которые удерживают на своей шероховатой поверхности гораздо больше пигмента, что дает больший остаток. При правильном подходе процедура получается быстрой и менее травматичной. </p>
                            <p class="text-xs border-l border-cod-gray pl-2.5">
                                Новичкам стоит быть осторожными при работе с этой заточкой на веках и губах, <br>
                                т.к. с ней необходимо контролировать глубину проникновения, чтобы работа <br>
                                не превратилась в травматичную.
                            </p>
                        </div>
                        <div class="lg:flex lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:mt-0 mt-6 justify-between hidden">
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/rough-surface-i.svg" class="absolute-center w-[3.125rem] h-[1.875rem]" alt="">
                                </div>
                                <p>Шероховатая <br> поверхность</p>
                            </div>
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/rapid-dyeing-i.svg" class="absolute-center w-[3.125rem] h-[3.125rem]" alt="">
                                </div>
                                <p>Быстрый прокрас</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/2 lg:flex lg:flex-row flex-col justify-between hidden">
                        <div class="text-xl flex flex-col items-center lg:text-center text-left">
                            <img src="/i/icons/textured-i.svg" class="w-24 h-[14.375rem]" alt="">
                            <p class="font-semibold pt-8 pb-4">Текстурированные — RLMT-T</p>
                            <p class="text-cape-cod">С микробороздками</p>
                        </div>
                        <div class="text-xl flex flex-col items-center text-center">
                            <img src="/i/icons/smooth-i.svg" class="w-24 h-[14.375rem]" alt="">
                            <p class="font-semibold pt-8 pb-4">Гладкие</p>
                            <p class="text-cape-cod">Cтанадартные иглы</p>
                        </div>
                    </div>
                    <div class="pt-[3.4375rem] lg:hidden">
                        <img src="/i/icons/textured-mobile-i.svg" alt="">
                        <p class="font-semibold text-xl pt-6 pb-2.5">Текстурированные — RLMT-T</p>
                        <p class="text-xl text-cape-cod">С микробороздками</p>
                        <div class="flex flex-col gap-y-6 mt-9 mb-[6.25rem] justify-between lg:hidden">
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/rough-surface-i.svg" class="absolute-center w-[3.125rem] h-[1.875rem]" alt="">
                                </div>
                                <p>Шероховатая <br> поверхность</p>
                            </div>
                            <div class="flex items-center gap-x-6">
                                <div class="bg-athens-gray relative w-[3.125rem] h-[3.125rem] rounded-[0.625rem]">
                                    <img src="/i/icons/rapid-dyeing-i.svg" class="absolute-center w-[3.125rem] h-[3.125rem]" alt="">
                                </div>
                                <p>Быстрый прокрас</p>
                            </div>
                        </div>
                        <img src="/i/icons/smooth-mobile-i.svg" alt="">
                        <p class="font-semibold text-xl pt-6 pb-2.5">Гладкие</p>
                        <p class="text-xl text-cape-cod">Cтанадартные иглы</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-b border-mercury">
            <div class="container py-12 lg:block hidden">
                <h5 class="text-[2.0625rem] text-center font-medium">Пучковые иглы</h5>
                <div class="flex justify-between mt-8">
                    <div class="flex flex-col">
                        <div class="pb-2.5 pl-5">
                            <p class="font-semibold">R — Round</p>
                            <p>Напаянные в круг иглы</p>
                        </div>
                        <img src="/i/icons/needle-arrow-top-i.svg" class="max-w-[19.375rem] w-[19.375rem] pl-5" alt="">
                        <div class="flex gap-x-[6rem] pt-2.5">
                            <div class="flex flex-col items-start relative">
                                <p class="text-8xl font-extralight">RL<span class="text-[#BBBBBB]">..</span></p>
                                <div class="flex w-full flex-col items-center">
                                    <img src="/i/icons/needle-arrow-down-i.svg" class="mt-2.5 mb-4" alt="">
                                    <p class="font-bold pb-2.5">L — Liner</p>
                                </div>
                                <p class="text-xs text-left relative left-[4rem]">
                                    Иглы сходятся в пучок у острия иглы. <br>
                                    Предназначены для нанесения <br>
                                    контура и линий.
                                </p>
                            </div>
                            <div class="flex flex-col items-start">
                                <p class="text-8xl font-extralight">RS<span class="text-[#BBBBBB]">..</span></p>
                                <div class="flex w-full flex-col items-center">
                                    <img src="/i/icons/needle-arrow-down-i.svg" class="mt-2.5 mb-4" alt="">
                                    <p class="font-bold pb-2.5">S — Shader</p>
                                </div>
                                <p class="text-xs text-left relative left-[3rem]">
                                    Отличаются параллельным <br>
                                    расположением игл в спайке. <br>
                                    Предназначены для растушевки <br>
                                    и закрашивания.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="relative w-[33.75rem]">
                        <img src="/i/icons/line-top-i.svg" class="top-0 w-full" alt="">
                        <div class="flex px-[3.25rem] justify-between">
                            <div class="flex flex-col items-center">
                                <img src="/temporary/3rl.png" class="w-[1.6875rem] h-[13.5rem]" alt="">
                                <img src="/i/icons/3rl-i.svg" class="mt-10 mb-6 w-[1.4375rem] h-[1.375rem]" alt="">
                                <p class="font-bold">3 RL</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <img src="/temporary/5rl.png" class="w-[2.3125rem] h-[13.5rem]" alt="">
                                <img src="/i/icons/5rl-i.svg" class="mt-10 mb-6 w-[1.6875rem] h-[1.6875rem]" alt="">
                                <p class="font-bold">5 RL</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <img src="/temporary/5rs.png" class="w-[2.9375rem] h-[13.5rem]" alt="">
                                <img src="/i/icons/5rs-i.svg" class="mt-10 mb-6 w-[1.875rem] h-[1.875rem]" alt="">
                                <p class="font-bold">5 RS</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <img src="/temporary/7rs.png" class="w-[3.9375rem] h-[13.5rem]" alt="">
                                <img src="/i/icons/7rs-i.svg" class="mt-10 mb-6 w-9 h-[2.0625rem]" alt="">
                                <p class="font-bold">7 RS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container py-[6.25rem] lg:hidden">
                <h5 class="text-[2.0625rem] text-center font-medium">Пучковые иглы</h5>
                <div class="flex flex-col gap-y-4 mt-[3.125rem]">
                    <div class="bg-athens-gray rounded-[1.25rem] py-[3.125rem] px-[4.125rem]">
                        <div class="pb-6">
                            <p class="font-semibold">R — Round</p>
                            <p>Напаянные в круг иглы</p>
                        </div>
                        <div class="flex flex-col items-start py-4">
                            <img src="/i/icons/needle-arrow-down-i.svg" class="lg:hidden rotate-180" alt="">
                            <p class="text-8xl font-extralight py-2.5">RL<span class="text-[#BBBBBB]">..</span></p>
                            <img src="/i/icons/needle-arrow-down-i.svg" class="lg:hidden ml-auto mr-[6.3rem]" alt="">
                        </div>
                        <p class="font-bold pb-2.5">L — Liner</p>
                        <p class="text-xs">
                            Иглы сходятся в пучок у острия иглы. <br>
                            Предназначены для нанесения <br>
                            контура и линий.
                        </p>
                    </div>
                    <div class="bg-athens-gray rounded-[1.25rem] py-[3.125rem] px-[4.125rem]">
                        <div class="pb-6">
                            <p class="font-semibold">R — Round</p>
                            <p>Напаянные в круг иглы</p>
                        </div>
                        <div class="flex flex-col items-start py-4">
                            <img src="/i/icons/needle-arrow-down-i.svg" class="lg:hidden rotate-180" alt="">
                            <p class="text-8xl font-extralight py-2.5">RS<span class="text-[#BBBBBB]">..</span></p>
                            <img src="/i/icons/needle-arrow-down-i.svg" class="lg:hidden ml-auto mr-[6.3rem]" alt="">
                        </div>
                        <p class="font-bold pb-2.5">S — Shader</p>
                        <p class="text-xs">
                            Отличаются параллельным расположением игл в спайке.
                            Предназначены для растушевки
                            и закрашивания.
                        </p>
                    </div>
                </div>
                <div class="relative mt-[6.25rem]">
                    <img src="/i/icons/line-top-mobile-i.svg" class="absolute left-0" alt="">
                    <div class="grid gap-y-12 py-8">
                        <div class="flex items-center w-full gap-x-[3.125rem]">
                            <img src="/temporary/3rl-mobile.png" class="w-[13.5rem]" alt="">
                            <div class="flex flex-col items-center gap-y-4">
                                <img src="/i/icons/3rl-i.svg" class="" alt="">
                                <p class="font-bold">3 RL</p>
                            </div>
                        </div>
                        <div class="flex items-center w-full gap-x-[3.125rem]">
                            <img src="/temporary/5rl-mobile.png" class="w-[13.5rem]" alt="">
                            <div class="flex flex-col items-center gap-y-4">
                                <img src="/i/icons/5rl-i.svg" class="" alt="">
                                <p class="font-bold">5 RL</p>
                            </div>
                        </div>
                        <div class="flex items-center w-full gap-x-[3.125rem]">
                            <img src="/temporary/5rs-mobile.png" class="w-[13.5rem]" alt="">
                            <div class="flex flex-col items-center gap-y-4">
                                <img src="/i/icons/5rs-i.svg" class="" alt="">
                                <p class="font-bold">5 RS</p>
                            </div>
                        </div>
                        <div class="flex items-center w-full gap-x-[3.125rem]">
                            <img src="/temporary/7rs-mobile.png" class="w-[13.5rem]" alt="">
                            <div class="flex flex-col items-center gap-y-4">
                                <img src="/i/icons/7rs-i.svg" class="" alt="">
                                <p class="font-bold">7 RS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container lg:py-12 py-8">
            <h6 class="text-[2.0625rem] text-center font-medium">Магнумы (SEMST)</h6>
            <p class="pt-2.5 text-center">Soft Edge Magnum Short Taper</p>
            <div class="flex lg:flex-row flex-col gap-x-[6.25rem] lg:my-[6.25rem] mt-[3.125rem]">
                <div>
                    <p class="pb-3.5">Компания Defenderr выпускает два типа раунд магнумов:</p>
                    <div class="flex lg:justify-start justify-center gap-x-11 lg:pb-11 lg:pt-0 py-20">
                        <img src="/i/icons/first-type-magnum-i.svg" class="w-11 h-[3.0625rem]" alt="">
                        <img src="/i/icons/second-type-magnum-i.svg" class="w-[4.1875rem] h-[3.0625rem]" alt="">
                    </div>
                    <p class="lg:pb-5 pb-20 ">
                        <span class="font-bold">Магнумы</span> – одни из самых безопасных типов игл потому как наносят минимальные повреждения на внешние покровы кожи тела.
                        Они имеют плоскую пайку игл со скругленными краями, острия которых расположены не на одной линии, а полукругом.
                    </p>
                    <img src="/i/icons/magnum-thickness-and-length-i.svg" class="w-[14.5rem] h-12" alt="">
                    <div class="pt-2.5 flex gap-x-[2.1875rem] pl-11">
                        <p class="text-xs">
                            Толщина иглы <br>
                            <span class="font-bold">0,25 мм</span>
                        </p>
                        <p class="text-xs">
                            Длина заточки <br>
                            <span class="font-bold">1,5 мм</span>
                        </p>
                    </div>
                </div>
                <img src="/temporary/magnums.png" class="lg:w-[35.625rem] lg:h-[21.25rem] mt-20 lg:mt-0" alt="">
            </div>
            <div class="flex lg:flex-row flex-col pt-20 lg:pt-0 gap-x-[6.25rem] lg:gap-y-0 gap-y-16 items-center">
                <div class="text-xl text-center px-4 lg:px-0">
                    <img src="/i/icons/smooth-borders-i.svg" class="mx-auto w-[2.375rem] h-[1.125rem]" alt="">
                    <p class="font-semibold pt-6 pb-4 lg:text-base text-sm">Плавные границы</p>
                    <p class="text-cape-cod lg:text-base text-xs">
                        При ударе такой иглы, средние колющие элементы входят
                        в кожу максимально глубоко, а расположенные по краям — лишь слегка. Это дает несколько иной рисунок без «засечек», с плавной границей.
                    </p>
                </div>
                <div class="text-xl text-center px-4 lg:px-0">
                    <img src="/i/icons/soft-shading-i.svg" class="mx-auto w-[2.5625rem] h-[2.5625rem]" alt="">
                    <p class="font-semibold pt-6 pb-4 lg:text-base text-sm">Мягкая растушевка</p>
                    <p class="text-cape-cod lg:text-base text-xs">
                        Магнумом можно добиться самых мягких и чистых теней, ровного прокраса при растушевке губ,
                        а также отличной плотности цвета при работе
                        с толстой кожей.
                    </p>
                </div>
            </div>
        </div>
        <div class="bg-athens-gray">
            <div class="container lg:py-12 pt-[3.125rem] pb-8">
                <p class="text-[2.0625rem] text-center font-medium">Как устроены картриджи изнутри?</p>
                <p class="text-center pt-2.5">Nano Systems</p>
                <div class="flex lg:flex-row flex-col lg:gap-x-[8.75rem] mt-8">
                    <img src="/temporary/cartridge-drawing.png" class="lg:w-[29.6875rem] lg:h-[24.6875rem] w-[18.3125rem] h-[15.1875rem] mx-auto lg:mx-0 mb-20 lg:mb-0" alt="">
                    <div class="grid gap-y-2.5">
                        <div class="bg-white rounded-[0.625rem] pt-[1.625rem] p-[1.875rem] h-max flex lg:shadow-none shadow-defenderr">
                            <p class="font-semibold pr-4">1</p>
                            <div class="text-xs pt-1">
                                <p class="font-semibold pb-2.5">Усовершенствованный носик</p>
                                <p>Узкий скошенный носик Defenderr не загораживает обзор при работе, что позволяет мастерам не упустить ни одну мелкую деталь в процессе нанесения пигмента.</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-[0.625rem] pt-[1.625rem] p-[1.875rem] h-max flex lg:shadow-none shadow-defenderr">
                            <p class="font-semibold pr-4">2</p>
                            <div class="text-xs pt-1">
                                <p class="font-semibold pb-2.5">Хирургическая сталь</p>
                                <p>Медицинская хирургическая сталь от японской компании Nissan: Steel AISI 316L.</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-[0.625rem] pt-[1.625rem] p-[1.875rem] h-max flex lg:shadow-none shadow-defenderr">
                            <p class="font-semibold pr-4">3</p>
                            <div class="text-xs pt-1">
                                <p class="font-semibold pb-2.5">Технология Ink Flow Cup.</p>
                                <p>Внутри носика картриджа располагаются специальные бугорки, которые позволяют мгновенно набирать пигмент и плавно отдавать его в процессе. Это очень упрощает работу, поскольку вам не приходится набирать пигмент слишком часто, а кожа клиента остается чистой до конца процедуры.</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-[0.625rem] pt-[1.625rem] p-[1.875rem] h-max flex lg:shadow-none shadow-defenderr">
                            <p class="font-semibold pr-4">4</p>
                            <div class="text-xs pt-1">
                                <p class="font-semibold pb-2.5">Окошко для забора воздуха</p>
                                <p>Специальное окошко в картридже Defenderr необходимо для забора воздуха в процессе набора пигмента и отвечает за то, чтобы краска подавалась равномерно и без разбрызгивания.</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-[0.625rem] pt-[1.625rem] p-[1.875rem] h-max flex lg:shadow-none shadow-defenderr">
                            <p class="font-semibold pr-4">5</p>
                            <div class="text-xs pt-1">
                                <p class="font-semibold pb-2.5">Z-образный замок фиксирует иглу внутри картриджа</p>
                                <p>Технология Long bar fixing lock и Z-образный замок (Z-Systems) фиксируют иглу внутри картриджа для идеально ровного хода без отклонений. Благодаря этому, картридж ведет себя очень стабильно и предсказуемо в работе, что особенно актуально во время ювелирного перманента глаз, а также проработки тонких линий и мелких деталей.</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-[0.625rem] pt-[1.625rem] p-[1.875rem] h-max flex lg:shadow-none shadow-defenderr">
                            <p class="font-semibold pr-4">6</p>
                            <div class="text-xs pt-1">
                                <p class="font-semibold pb-2.5">Мембрана безопасности</p>
                                <p>Облегченная защитная мембрана ускоряет возврат иглы и препятствует пигменту проникать в двигатель машинки, гарантируя стерильность аппарата.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--        <div class="container maxlg:w-screen md:py-[12.5rem] py-[6.25rem] md:pl-10 lg:pl-0">-->
<!--            <div class="swiper alsoLikeSwiper lg:h-[37.5rem] md:h-[34.5rem] h-[25.625rem] mx-6 md:mx-0">-->
<!--                <div class="flex items-center justify-between">-->
<!--                    <p class="md:pb-[3.125rem] pb-4 font-medium md:text-[2.0625rem] text-[1.6875rem] text-cape-cod lg:text-cod-gray pl-6 md:pl-0">You may also like</p>-->
<!--                    <div class="relative w-[6rem] lg:mr-0 mr-8">-->
<!--                        <div class="swiper-button-next animated-1"></div>-->
<!--                        <div class="swiper-button-prev animated-1"></div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="swiper-wrapper">-->
<!--                    <div class="swiper-slide">-->
<!--                        <div class="lg:w-[17.0625rem] md:w-[15.125rem] lg:h-[20.5rem] md:h-[18.25rem] w-[10rem] h-[13.125rem] mx-auto bg-athens-gray relative">-->
<!--                            <img src="/i/trash/item.png" class="absolute-center w-full" alt="">-->
<!--                        </div>-->
<!--                        <p class="font-semibold pt-6 pb-[0.625rem] lg:text-left text-center">RLLT 35 / 02</p>-->
<!--                        <p class="text-[0.9375rem] lg:text-left text-center">$ 70</p>-->
<!--                    </div>-->
<!--                    <div class="swiper-slide">-->
<!--                        <div class="lg:w-[17.0625rem] md:w-[15.125rem] lg:h-[20.5rem] md:h-[18.25rem] w-[10rem] h-[13.125rem] mx-auto bg-athens-gray relative">-->
<!--                            <img src="/i/trash/item.png" class="absolute-center w-full" alt="">-->
<!--                        </div>-->
<!--                        <p class="font-semibold pt-6 pb-[0.625rem] lg:text-left text-center">RLLT 35 / 02</p>-->
<!--                        <p class="text-[0.9375rem] lg:text-left text-center">$ 70</p>-->
<!--                    </div>-->
<!--                    <div class="swiper-slide">-->
<!--                        <div class="lg:w-[17.0625rem] md:w-[15.125rem] lg:h-[20.5rem] md:h-[18.25rem] w-[10rem] h-[13.125rem] mx-auto bg-athens-gray relative">-->
<!--                            <img src="/i/trash/item.png" class="absolute-center w-full" alt="">-->
<!--                        </div>-->
<!--                        <p class="font-semibold pt-6 pb-[0.625rem] lg:text-left text-center">RLLT 35 / 02</p>-->
<!--                        <p class="text-[0.9375rem] lg:text-left text-center">$ 70</p>-->
<!--                    </div>-->
<!--                    <div class="swiper-slide">-->
<!--                        <div class="lg:w-[17.0625rem] md:w-[15.125rem] lg:h-[20.5rem] md:h-[18.25rem] w-[10rem] h-[13.125rem] mx-auto bg-athens-gray relative">-->
<!--                            <img src="/i/trash/item.png" class="absolute-center w-full" alt="">-->
<!--                        </div>-->
<!--                        <p class="font-semibold pt-6 pb-[0.625rem] lg:text-left text-center">RLLT 35 / 02</p>-->
<!--                        <p class="text-[0.9375rem] lg:text-left text-center">$ 70</p>-->
<!--                    </div>-->
<!--                    <div class="swiper-slide">-->
<!--                        <div class="lg:w-[17.0625rem] md:w-[15.125rem] lg:h-[20.5rem] md:h-[18.25rem] w-[10rem] h-[13.125rem] mx-auto bg-athens-gray relative">-->
<!--                            <img src="/i/trash/item.png" class="absolute-center w-full" alt="">-->
<!--                        </div>-->
<!--                        <p class="font-semibold pt-6 pb-[0.625rem] lg:text-left text-center">RLLT 35 / 02</p>-->
<!--                        <p class="text-[0.9375rem] lg:text-left text-center">$ 70</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="swiper-scrollbar !h-[2px]"></div>-->
<!--            </div>-->
<!--        </div>-->
    </section>
</template>

<script setup>
import {onMounted, ref} from "vue";
import useHelper from "../composables/useHelper";

const {isDesktop, isHandheld, isMobile} = useHelper()

onMounted(() => {
    //
})
</script>

<style lang="scss">

</style>
