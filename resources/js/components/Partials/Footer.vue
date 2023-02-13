<template>
    <footer>
        <div class="container pt-[3.75rem] pb-[1.3125rem]">
            <div class="flex lg:w-full lg:flex-row md:flex-col flex-col items-center md:justify-start md:gap-x-[11.25rem] lg:gap-x-0 gap-x-0 lg:justify-between lg:pb-[3.75rem] pb-[5rem] border-b border-mercury">
                <div class="lg:flex lg:w-[56%] grid md:grid-cols-2 w-full justify-between">
                    <div class="lg:block md:block hidden">
                        <img src="/i/icons/footer-logo-i.svg" class="pb-[1.875rem]" alt="">
                        <img src="/i/icons/designed-in-i.svg" alt="">
                        <p class="pt-[1.625rem] pb-[3.125rem] text-shuttle-gray text-xs font-montserrat font-normal">
                            Мы здесь, чтобы разрабатывать передовые <br>
                            инструменты и развивать индустрию.
                        </p>
<!--                        <div class="flex items-center gap-x-5 font-montserrat font-semibold text-[0.625rem] text-cod-gray">-->
<!--                            <a href="#" class="border-b border-cod-gray">Privacy Policy</a>-->
<!--                            <a href="#" class="border-b border-cod-gray">Terms & Conditions</a>-->
<!--                        </div>-->
                    </div>
                    <div class="flex flex-col items-start lg:pl-0 pl-[5.4375rem] font-semibold font-montserrat uppercase text-[0.625rem] gap-y-2.5">
                        <router-link :to="{ name: 'contacts' }" class="flex items-center text-cape-cod hover:text-cod-gray animated group">
                            {{ $t('footer.contacts') }}
                            <img src="/i/icons/arrow-right-i.svg" class="pl-[1.125rem] group-hover:opacity-100 opacity-0 hidden lg:block animated" alt="">
                        </router-link>
                        <router-link :to="{ name: 'guide' }" class="flex items-center text-cape-cod hover:text-cod-gray animated group">
                            {{ $t('footer.guide') }}
                            <img src="/i/icons/arrow-right-i.svg" class="pl-[1.125rem] group-hover:opacity-100 opacity-0 hidden lg:block animated" alt="">
                        </router-link>
                    </div>
                    <div class="lg:hidden md:hidden pt-[5rem]">
                        <img src="/i/icons/footer-logo-i.svg" class="pb-[1.875rem]" alt="">
                        <img src="/i/icons/designed-in-i.svg" alt="">
                        <p class="lg:pt-[1.625rem] lg:pb-[3.125rem] pt-[1.0625rem] pb-[2.375rem] text-shuttle-gray text-xs font-montserrat font-normal">
                            Мы здесь, чтобы разрабатывать передовые <br>
                            инструменты и развивать индустрию.
                        </p>
<!--                        <div class="flex items-center gap-x-5 font-montserrat font-semibold text-[0.625rem] text-cod-gray">-->
<!--                            <a href="#" class="border-b border-cod-gray">Privacy Policy</a>-->
<!--                            <a href="#" class="border-b border-cod-gray">Terms & Conditions</a>-->
<!--                        </div>-->
                    </div>
                </div>
                <div class="pt-[5rem] lg:pt-0 lg:text-left text-center">
                    <p class="text-sm text-gray font-montserrat" v-html="$t('footer.follow_us')"></p>
                    <div class="flex items-center lg:gap-x-[1.875rem] gap-x-2.5 lg:pt-[1.375rem] pt-[1.125rem] lg:pb-[2.9375rem] pb-[5rem] justify-center lg:justify-start">
                        <a href="https://www.instagram.com/defenderrofficial" target="_blank" class="lg:bg-transparent lg:p-0 bg-athens-gray rounded-lg md:p-[1.75rem] p-[1.35rem]"><img src="/i/icons/instagram.svg" class="lg:w-auto lg:h-auto md:w-6 md:h-6" alt=""></a>
                        <a href="https://www.facebook.com/defenderrsupply" target="_blank" class="lg:bg-transparent lg:p-0 bg-athens-gray rounded-lg md:p-[1.75rem] p-[1.35rem]"><img src="/i/icons/facebook.svg" class="lg:w-auto lg:h-auto md:w-6 md:h-6" alt=""></a>
                        <a href="https://t.me/+R8rcAL8Kr91bg-jA" target="_blank" class="lg:bg-transparent lg:p-0 bg-athens-gray rounded-lg md:p-[1.75rem] p-[1.35rem]"><img src="/i/icons/telegram.svg" class="lg:w-auto lg:h-auto md:w-6 md:h-6" alt=""></a>
                        <a href="https://www.youtube.com/@defenderrsupply1857" target="_blank" class="lg:bg-transparent lg:p-0 bg-athens-gray rounded-lg md:p-[1.75rem] p-[1.35rem]"><img src="/i/icons/yt-i.svg" class="lg:w-auto lg:h-auto md:w-6 md:h-6" alt=""></a>
                        <a href="https://vk.com/defenderrsupplycom" target="_blank" class="lg:bg-transparent lg:p-0 bg-athens-gray rounded-lg md:p-[1.75rem] p-[1.35rem]"><img src="/i/icons/vk.svg" class="lg:w-auto lg:h-auto md:w-6 md:h-6" alt=""></a>
                    </div>
                    <p class="text-sm text-gray font-montserrat pb-[1.375rem]" v-html="$t('footer.click_join')"></p>
                    <form @submit.prevent="newSubSubmit" class="border border-cod-gray lg:bg-white bg-athens-gray flex items-center lg:rounded-[1.25rem] rounded-[3.75rem] lg:w-[19.375rem] mx-auto lg:p-[0.25rem] p-[0.25rem] font-montserrat">
                        <input v-model="newSubForm.email" type="email" placeholder="Your Email" class="bg-transparent w-full lg:pl-4 pl-[1.875rem] lg:placeholder-gray placeholder-shuttle-gray text-xs">
                        <button type="submit" class="bg-cape-cod rounded-full lg:w-[1.7rem] lg:h-[1.5rem] w-[2.2rem] h-[2rem] relative right-0">
                            <svg class="absolute-center w-[0.375rem] h-[0.6875rem]" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.3953 0.771447C1.20004 0.576184 0.883457 0.576184 0.688195 0.771447C0.492932 0.966709 0.492932 1.28329 0.688195 1.47855L1.3953 0.771447ZM5.41675 5.5L5.7703 5.85355C5.96556 5.65829 5.96556 5.34171 5.7703 5.14645L5.41675 5.5ZM0.688195 9.52145C0.492932 9.71671 0.492932 10.0333 0.688195 10.2286C0.883457 10.4238 1.20004 10.4238 1.3953 10.2286L0.688195 9.52145ZM0.688195 1.47855L5.06319 5.85355L5.7703 5.14645L1.3953 0.771447L0.688195 1.47855ZM5.06319 5.14645L0.688195 9.52145L1.3953 10.2286L5.7703 5.85355L5.06319 5.14645Z" fill="#ffffff"/>
                            </svg>
                        </button>
                    </form>
                    <p v-if="newSubErrors.email" class="text-xs pt-1 pl-2 text-red-500">{{ newSubErrors.email[0] }}</p>
                </div>
            </div>
            <div class="pt-[1.375rem] flex lg:flex-row md:flex-row flex-col items-center justify-between">
                <div></div>
                <p class="m-0 text-xs font-montserrat lg:text-gray md:text-shuttle-gray text-gray"><sup>©</sup> Defenderr Co. {{ new Date().getFullYear() }}</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import {defineEmits, inject, ref} from "vue"
import Cookies from 'js-cookie'

const emitter = inject('emitter')

const newSubForm = ref({ email: '' })
const newSubErrors = ref([])

const newSubSubmit = async () => {
    try {
        let response = await axios.post('/api/newsletter-subscriptions/join', newSubForm.value)
        emitter.emit('closeNewsletterSubscription');
        Cookies.set('newsletter-subscription', true)
        alert(response.data.message)
    } catch (e) {
        if(e.response.status === 422) newSubErrors.value = e.response.data.errors
    }
}
</script>
