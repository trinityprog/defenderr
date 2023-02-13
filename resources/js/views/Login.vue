<template>
    <section id="" class="md:mt-[4.3rem] mt-[3.8125rem] lg:bg-white bg-athens-gray lg:h-auto md:h-screen">
        <div class="container maxlg:w-screen flex gap-x-[6.25rem]">
            <img src="/i/images/login.png" class="w-[37.5rem] h-[46.25rem] lg:block hidden" alt="">
            <div class="lg:w-auto w-full flex flex-col lg:items-start items-center">
                <h1 class="text-[2.0625rem] text-cape-cod border-b-2 border-b-cape-cod lg:pt-[3.5rem] md:pt-[4.375rem] pt-10 w-max leading-[1.3]">Log in</h1>
                <form @submit.prevent="login(form)" class="lg:mt-[3.125rem] lg:mb-[9.375rem] md:my-[6.25rem] mt-11 mb-[5.625rem] flex flex-col items-start">
                    <fieldset>
                        <input
                            v-model="form.email"
                            type="email"
                            class="w-[18.125rem] h-[3.125rem] border border-philippine-gray rounded-lg pl-5 placeholder-cape-cod"
                            placeholder="Email">

                        <p v-if="errors.email" class="text-xs pt-1 pl-2 text-red-500">{{ errors.email[0] }}</p>
                    </fieldset>
                    <fieldset class="mt-5">
                        <input
                            v-model="form.password"
                            type="password"
                            class="w-[18.125rem] h-[3.125rem] border border-philippine-gray rounded-lg pl-5 placeholder-cape-cod"
                            placeholder="Password">

                        <p v-if="errors.password" class="text-xs pt-1 pl-2 text-red-500">{{ errors.password[0] }}</p>
                    </fieldset>
                    <button type="submit" class="mt-[1.875rem] w-[18.125rem] h-[3.25rem] text-white bg-cod-gray rounded-lg">
                        Log in
                    </button>
<!--                    <a href="#" class="md:pt-4 pt-9 text-cape-cod lg:mx-0 mx-auto">Forgot your password?</a>-->
                </form>
<!--                <div class="w-full lg:w-auto lg:px-0 md:px-[7.125rem] px-6">-->
<!--                    <div class="flex items-center lg:justify-start justify-between mb-5">-->
<!--                        <p class="mr-[7.1875rem] text-xl">Not yet signed up?</p>-->
<!--                        <a href="#" class="text-xl border-b border-b-cod-gray md:block hidden">Create Account</a>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        <p class="flex items-center pb-1"><img src="/i/icons/black-heart-i.svg" class="mr-2.5" alt=""> View order history</p>-->
<!--                        <p class="flex items-center"><img src="/i/icons/black-heart-i.svg" class="mr-2.5" alt=""> Save your details for quicker checkout</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <a href="#" class="text-xl border-b border-b-cod-gray md:hidden mt-[3.125rem] mb-[4.125rem] mx-auto">Create Account</a>-->
            </div>
        </div>
    </section>
</template>

<script setup>
import {ref} from "vue";
import useHelper from "../composables/useHelper";
import useAuth from "../composables/useAuth";

const {isDesktop, isHandheld, isMobile} = useHelper()
const {login, errors} = useAuth()
const form = ref({email: '', password: ''});
</script>

<style lang="scss">

</style>
