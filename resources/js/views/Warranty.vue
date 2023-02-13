<template>
    <section id="warranty" class="md:mt-[4.3rem] mt-[3.8125rem] bg-athens-gray">
        <div class="container flex lg:flex-row flex-col gap-x-11 pt-[4.4375rem] pb-[6.25rem]">
            <div class="lg:w-[13.75rem]">
                <p class="md:text-[1.6875rem] text-xl leading-[1.3]">Гарантия</p>
                <p class="lg:py-[3.125rem] md:pb-[3.125rem] pb-20 pt-6 text-xs lg:w-auto w-full">
                    На всю продукцию Defenderr, <br class="lg:block hidden">
                    кроме расходных материалов, <br>
                    существует <a href="#" class="font-bold border-b border-b-cod-gray">гарантия в течении года</a> <br class="lg:block hidden">
                    с момента покупки
                </p>
                <ul class="text-xs font-normal lg:grid hidden gap-y-6 list-disc relative border-l border-mercury pl-3">
                    <li>Что делать в случае поломки</li>
                    <li>Аппарат трещит</li>
                    <li>Негарантийные случаи</li>
                    <li>Стоимость ремонта</li>
                </ul>
            </div>
            <div class="flex flex-col gap-y-4 w-full">
                <div class="bg-white md:py-20 md:px-10 py-10 px-5 text-center shadow-defenderr rounded-lg">
                    <p class="md:text-[1.6875rem] text-xl font-normal pb-2.5">Что делать в случае поломки?</p>
                    <p class="text-cape-cod md:pb-20 pb-[3.125rem]">Отправьте запрос в наш сервисный центр</p>
                    <a href="#" class="flex items-center justify-between px-[1.875rem] border border-cod-gray
                                       mx-auto md:mb-20 mb-[3.125rem] md:w-[19.9375rem] h-[3.125rem] rounded-[1.625rem]">
                        <p class="border-b border-cod-gray leading-[1.3] lg:block lg:border-none md:hidden">service@defenderrsupply.com</p>
                        <img src="/i/icons/mail-i.svg" class="md:block hidden" alt="">
                    </a>
                    <div class="flex lg:flex-row flex-col gap-y-10 md:gap-y-7 lg:gap-y-0 justify-between text-xs md:text-sm">
                        <div class="text-left lg:w-[31%]">
                            <div class="w-4 h-4">
                                <img src="/i/icons/chat-i.svg" class="w-auto" alt="">
                            </div>
                            <div class="w-full h-px bg-mercury lg:my-2.5 my-2"></div>
                            <p>
                                В письме расскажите подробнее о проблеме, при необходимости прикрепите к письму
                                фото или видео.
                            </p>
                        </div>
                        <div class="text-left lg:w-[31%]">
                            <div class="w-4 h-4">
                                <img src="/i/icons/hashtag-i.svg" class="w-auto" alt="">
                            </div>
                            <div class="w-full h-px bg-mercury lg:my-2.5 my-2"></div>
                            <p>
                                Внутри каждого изделия есть серийный номер, по которому мы сможем отследить дату покупки
                            </p>
                        </div>
                        <div class="text-left lg:w-[31%]">
                            <div class="w-4 h-4">
                                <img src="/i/icons/dollar-i.svg" class="w-auto" alt="">
                            </div>
                            <div class="w-full h-px bg-mercury lg:my-2.5 my-2"></div>
                            <p>
                                Ремонт продукции, которая попадает под гарантийные случаи, оплачивает наша компания (вы оплачиваете только доставку до нашего офиса и обратно)
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bg-white md:p-10 py-[1.875rem] px-5 text-left shadow-defenderr rounded-lg flex md:flex-row flex-col gap-x-10">
                    <img src="/i/icons/warning-i.svg" class="w-[1.875rem] h-[3.25rem]" alt="">
                    <div>
                        <p class="text-sm font-semibold md:pb-0 pb-2">Аппарат трещит</p>
                        <p class="text-xs">
                            Если ваш аппарат трещит, когда вы его переворачиваете (картриджем вверх), это <span class="font-semibold">не является неисправностью,</span>
                            т.к. мотор сконструирован функционально под определенную задачу. Переверните аппарат, и посторонний звук пропадет.
                        </p>
                    </div>
                </div>
                <div class="bg-white md:py-20 md:px-10 py-10 px-5 text-center shadow-defenderr rounded-lg">
                    <p class="md:text-[1.6875rem] text-xl font-normal pb-2.5">Негарантийные случаи</p>
                    <p class="text-cape-cod md:pb-20 pb-[3.125rem]">Гарантия распространяется на все аппараты, источники питания и портативные батарейки</p>
                    <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-6 md:gap-y-[3.125rem] gap-y-6">
                        <div class="text-left lg:block md:flex items-center gap-x-6 md:text-sm text-xs">
                            <div class="w-4 h-4">
                                <img src="/i/icons/one-i.svg" class="w-auto" alt="">
                            </div>
                            <div class="w-full h-px bg-mercury my-2.5 lg:block hidden"></div>
                            <p>
                                Превышено входное напряжение выше 11 В (максимальное допустимое напряжение — 10 В)
                            </p>
                        </div>
                        <div class="text-left lg:block md:flex items-center gap-x-6 md:text-sm text-xs">
                            <div class="w-4 h-4">
                                <img src="/i/icons/two-i.svg" class="w-auto" alt="">
                            </div>
                            <div class="w-full h-px bg-mercury my-2.5 lg:block hidden"></div>
                            <p>
                                Изделие пострадало от агрессивных неспиртовых антисептических средств
                            </p>
                        </div>
                        <div class="text-left lg:block md:flex items-center gap-x-6 md:text-sm text-xs">
                            <div class="w-4 h-4">
                                <img src="/i/icons/three-i.svg" class="w-auto" alt="">
                            </div>
                            <div class="w-full h-px bg-mercury my-2.5 lg:block hidden"></div>
                            <p>
                                Изделие пострадало вследствие механических повреждений и падений на твердые поверхности
                            </p>
                        </div>
                        <div class="text-left lg:block md:flex items-center gap-x-6 md:text-sm text-xs">
                            <div class="w-4 h-4">
                                <img src="/i/icons/four-i.svg" class="w-auto" alt="">
                            </div>
                            <div class="w-full h-px bg-mercury my-2.5 lg:block hidden"></div>
                            <p>
                                Изделие имеет следы коррозии
                            </p>
                        </div>
                        <div class="text-left lg:block md:flex items-center gap-x-6 md:text-sm text-xs">
                            <div class="w-4 h-4">
                                <img src="/i/icons/five-i.svg" class="w-auto" alt="">
                            </div>
                            <div class="w-full h-px bg-mercury my-2.5 lg:block hidden"></div>
                            <p>
                                Изделие использовалось не по назначению
                                (т.е. не для перманентного макияжа и тату)
                            </p>
                        </div>
                        <div class="text-left lg:block md:flex items-center gap-x-6 md:text-sm text-xs">
                            <div class="w-4 h-4">
                                <img src="/i/icons/six-i.svg" class="w-auto" alt="">
                            </div>
                            <div class="w-full h-px bg-mercury my-2.5 lg:block hidden"></div>
                            <p>
                                Изделие погрузили целиком в спирт
                                или любую другую жидкость
                                (исключение — откручивающийся держатель)
                            </p>
                        </div>
                        <div class="text-left lg:block md:flex items-center gap-x-6 md:text-sm text-xs">
                            <div class="w-4 h-4">
                                <img src="/i/icons/seven-i.svg" class="w-auto" alt="">
                            </div>
                            <div class="w-full h-px bg-mercury my-2.5 lg:block hidden"></div>
                            <p>
                                Изделие погрузили целиком в автоклав, сухожаровый шкаф или ультразвуковую ванну (исключение — откручивающийся держатель)
                            </p>
                        </div>
                        <div class="text-left lg:block md:flex items-center gap-x-6 md:text-sm text-xs">
                            <div class="w-4 h-4">
                                <img src="/i/icons/eight-i.svg" class="w-auto" alt="">
                            </div>
                            <div class="w-full h-px bg-mercury my-2.5 lg:block hidden"></div>
                            <p>
                                Изделие разбирали или подвергали самостоятельному ремонту
                                (без разрешения от сервисного центра)
                            </p>
                        </div>
                        <div class="text-left lg:block md:flex items-center gap-x-6 md:text-sm text-xs">
                            <div class="w-4 h-4">
                                <img src="/i/icons/nine-i.svg" class="w-auto" alt="">
                            </div>
                            <div class="w-full h-px bg-mercury my-2.5 lg:block hidden"></div>
                            <p>
                                Изделие или его компоненты были изменены
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bg-white md:py-20 md:px-10 py-10 px-5 text-center shadow-defenderr rounded-lg">
                    <p class="md:text-[1.6875rem] text-xl font-normal pb-2.5">Сколько стоит ремонт?</p>
                    <div class="flex md:flex-row flex-col md:gap-y-0 gap-y-[3.125rem] justify-between md:pt-20 lg:px-[5.4375rem] gap-x-[6.25rem] md:pb-[6.25rem] py-[3.125rem]">
                        <div class="flex flex-col items-center md:w-1/2">
                            <img src="/i/icons/credit-cards-i.svg" alt="">
                            <p class="pt-5 pb-2.5 text-sm font-semibold">Точная стоимость</p>
                            <p class="text-xs text-cape-cod">Точную стоимость ремонта можно узнать только после получения и диагностики машинки.</p>
                        </div>
                        <div class="flex flex-col items-center md:w-1/2">
                            <img src="/i/icons/sand-glass-i.svg" alt="">
                            <p class="pt-5 pb-2.5 text-sm font-semibold">Гарантийный срок</p>
                            <p class="text-xs text-cape-cod">В случаях когда гарантийный срок закончился или изделие перестало работать не по вине производителя, то все расходы по ремонту оплачиваете вы.</p>
                        </div>
                    </div>
                    <div class="grid lg:grid-cols-3 grid-cols-1">
                        <div class="w-4 h-4">
                            <img src="/i/icons/one-i.svg" class="w-auto lg:block hidden" alt="">
                        </div>
                        <div class="w-4 h-4">
                            <img src="/i/icons/two-i.svg" class="w-auto lg:block hidden" alt="">
                        </div>
                        <div class="w-4 h-4">
                            <img src="/i/icons/three-i.svg" class="w-auto lg:block hidden" alt="">
                        </div>
                        <div class="w-full border-dotted border border-mercury relative mt-2 mb-4 lg:block hidden">
                            <div class="absolute left-0 top-[-0.2rem] w-2 h-2 bg-cod-gray rounded-full"></div>
                        </div>
                        <div class="w-full border-dotted border border-mercury relative mt-2 mb-4 lg:block hidden">
                            <div class="absolute left-0 top-[-0.2rem] w-2 h-2 bg-cod-gray rounded-full"></div>
                        </div>
                        <div class="w-full border-dotted border border-mercury relative mt-2 mb-4 lg:block hidden">
                            <div class="absolute left-0 top-[-0.2rem] w-2 h-2 bg-cod-gray rounded-full"></div>
                            <div class="bg-white w-5 h-5 rounded-full border border-mercury absolute top-[-0.6rem] right-[-0.1rem]">
                                <img src="/i/icons/double-check-i.svg" class="absolute-center w-3.5 h-3.5" alt="">
                            </div>
                        </div>
                        <div class="text-left flex md:flex-row flex-col md:items-center items-start gap-x-5">
                            <div class="w-3.5 lg:hidden md:pb-0 pb-3">
                                <img src="/i/icons/one-i.svg" alt="">
                            </div>
                            <p class="text-sm">
                                Напишите в сервисный центр <br class="lg:block hidden">
                                <span class="font-semibold">service@defenderrsupply.com</span>
                            </p>
                        </div>
                        <div class="text-left flex md:flex-row flex-col md:items-center items-start gap-x-5 lg:my-0 my-10">
                            <div class="w-3.5 lg:hidden md:pb-0 pb-3">
                                <img src="/i/icons/two-i.svg" alt="">
                            </div>
                            <p class="text-sm">
                                Опишите проблему <br class="lg:block hidden">
                                и приложите фото или видео
                            </p>
                        </div>
                        <div class="text-left flex md:flex-row flex-col md:items-center items-start gap-x-5">
                            <div class="w-3.5 lg:hidden md:pb-0 pb-3">
                                <img src="/i/icons/three-i.svg" alt="">
                            </div>
                            <p class="text-sm">
                                Оплатите доставку в обе стороны <br class="lg:block hidden">
                                до нашего сервисного центра
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
