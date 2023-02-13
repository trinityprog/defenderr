<template>
    <section id="faqs" class="bg-athens-gray md:min-h-screen md:mt-[4.3rem] mt-[3.8125rem]">
        <div class="container pt-[4.375rem] pb-[9.375rem]">
            <div class="flex lg:flex-row flex-col lg:items-center justify-between w-full lg:pb-11 pb-[4.375rem]">
                <p class="text-[1.6875rem] uppercase">FAQ</p>
                <div class="flex md:flex-row flex-col-reverse justify-between pt-5 md:pt-[3.125rem] lg:pt-0">
                    <div class="lg:hidden pl-[1rem]">
                        <ul v-if="faqs" class="category-list uppercase text-xs text-shuttle-gray list-disc flex flex-col gap-y-6">
                            <li v-for="category in faqs" :key="category.id">
                                <router-link :to="{ name: 'faq', params: { slug: category.slug } }">{{ category.name }}</router-link>
                            </li>
                        </ul>
                    </div>
                    <p class="text-sm pb-[3.125rem] md:pb-0">
                        If you didn't find an answer to yours – <br>
                        just drop a
                        <a href="#" class="text-azure-radiance border-b border-b-azure-radiance">info@defenderrsupply.com</a>
                    </p>
                </div>
            </div>
            <div class="flex gap-x-[6.25rem]">
                <div class="min-w-[10rem] w-[10rem] lg:block hidden pl-[1rem]">
                    <ul v-if="faqs" class="category-list uppercase text-xs text-shuttle-gray list-disc flex flex-col gap-y-6">
                        <li v-for="category in faqs" :key="category.id">
                            <router-link :to="{ name: 'faq', params: { slug: category.slug } }">{{ category.name }}</router-link>
                        </li>
                    </ul>
                </div>
                <div v-if="faqs && selectedCategory" class="w-full flex flex-col gap-y-4">
                    <div v-for="faq in _.find(faqs, ['slug', selectedCategory]).faqs" :key="faq.id" @click.prevent="openedAnswer !== faq.id ? openedAnswer = faq.id : openedAnswer = null" class="bg-white rounded-lg w-full cursor-pointer lg:p-6 md:p-10 p-6">
                        <div class="flex items-center justify-between">
                            <p class="text-xs md:text-base" :class="{ 'font-semibold' : openedAnswer === faq.id }">{{ faq.question }}</p>
                            <div class="lg:w-[3.125rem] lg:h-[3.125rem] w-4 h-4 rounded-full relative cursor-pointer" :class="{ 'bg-athens-gray' : openedAnswer === faq.id }">
                                <img :src="openedAnswer === faq.id ? '/i/icons/blue-minus-i.svg' : '/i/icons/blue-plus-i.svg'" class="absolute-center w-4 h-4" alt="">
                            </div>
                        </div>
                        <TransitionAccordion>
                            <p v-show="openedAnswer === faq.id" class="text-cape-cod md:text-base text-xs"><br/>{{ faq.answer }}</p>
                        </TransitionAccordion>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import _ from 'lodash';
import useHelper from "../composables/useHelper";
import TransitionAccordion from "../components/TransitionAccordion.vue"

const route = useRoute()
const router = useRouter()
const {isDesktop, isHandheld, isMobile} = useHelper()
const faqs = ref(null)
const selectedCategory = ref(route.params.slug)
const openedAnswer = ref(null)

const getFaqs = async () => {
    try {
        let response = await axios.get('/api/faqs/list')
        faqs.value = response.data.data
        if(!route.params.slug) router.push({ params: { slug: faqs.value[0].slug } })
    } catch (e) { }
}

watch(route, () => {
    if(route.name === 'faq') {
        if(!route.params.slug) router.push({ params: { slug: faqs.value[0].slug } })
        selectedCategory.value = route.params.slug
    }
}, {deep: true})

onMounted(() => {
    getFaqs()
})
</script>

<style lang="scss">
.category-list{
    .router-link-active{
        @apply text-cod-gray font-semibold
    }
}
</style>
