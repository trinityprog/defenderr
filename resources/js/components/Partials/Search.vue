<template>
    <TransitionRoot
        :show="isSearchOpen"
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
    >
        <Dialog as="section" id="search" @close="setIsSearchOpen" class="fixed w-full inset-x-0 md:top-[4.3rem] top-[3.7rem] bg-white z-[999]">
            <DialogPanel as="div" class="container flex justify-center py-8 search">
                <div class="md:w-[33.125rem] w-full relative">
                        <button @click.prevent="setIsSearchOpen(false)" class="cursor-pointer absolute right-0 top-0 flex items-center z-[1]">
                            <span class="text-xs text-philippine-gray">{{ $t('search.close') }}</span>
                            <img src="/i/icons/close-sm-i.svg" alt="">
                        </button>
                        <div class="flex items-center relative md:w-max w-full md:pt-11 pt-20">
                            <input v-model="searchQuery"
                                   type="search"
                                   autocomplete="on"
                                   class="md:w-[33.125rem] w-full placeholder-philippine-gray md:text-xs text-sm uppercase pl-2.5 md:pb-1 pb-2 border-b border-cod-gray placeholder:text-xs"
                                   :placeholder="$t('search.search_query')">
                            <img src="/i/icons/search-i.svg" class="absolute right-0 md:bottom-1 bottom-2" alt="">
                        </div>
                        <div v-if="!searchResponse" class="flex md:flex-row flex-col md:pt-[3.125rem] pt-[3.75rem] gap-x-4 pb-[6.25rem] text-philippine-gray">
                            <button v-for="category in categories" @click.prevent="router.push({name: 'catalog', params: {slug: category.slug}})" class="group cursor-pointer">
                                <div class="bg-athens-gray w-[7.5625rem] h-[9.0625rem] relative md:block hidden">
                                    <img :data-src="category.imagePath" class="lazyload w-[90%] h-[90%] object-contain absolute-center" alt="">
                                </div>
                                <span class="text-center md:mt-1 block uppercase group-hover:text-cod-gray animated-1" :class="{ 'font-matroska text-[0.6rem]': $i18n.locale === 'en', 'font-druk-cyr text-[1rem] tracking-[0.1rem]': $i18n.locale === 'ru' }">{{ category.name }}</span>
                            </button>
                        </div>
                    <ul v-if="searchResponse" class="my-8">
                        <li v-for="product in searchResponse" :key="product.id" class="text-[0.6875rem] text-cape-cod font-normal uppercase my-3 hover:text-[#191818] hover:font-semibold">
                            <router-link :to="{ name: 'product', params: { slug: product.slug } }">
                                {{ product.name }}
                            </router-link>
                        </li>
                    </ul>
                        <div class="flex justify-center gap-x-10 text-xs font-semibold">
                            <a href="#" class="uppercase border-b border-cape-cod">FAQ</a>
                            <a href="#" class="uppercase border-b border-cape-cod">{{ $t('search.shipping_returns') }}</a>
                        </div>
                </div>
            </DialogPanel>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import {inject, onMounted, ref, watch} from "vue";
import {onBeforeRouteUpdate, useRouter} from "vue-router";
import {TransitionRoot, Dialog, DialogPanel} from '@headlessui/vue'
import useHelper from "../../composables/useHelper";
import useCategories from "../../composables/useCategories";


const router = useRouter()
const {categories} = useCategories()
const emitter = inject('emitter')
const {isDesktop, isHandheld, isMobile} = useHelper()

const isSearchOpen = ref(false)
const isSearchOpened = ref(false)
const searchQuery = ref(null)
const searchResponse = ref(null)

const setIsSearchOpen = value => {
    if(!isSearchOpened.value) {
        isSearchOpened.value = true;
        setTimeout(() => {
            isSearchOpen.value = value
            isSearchOpened.value = false
        }, 200)
    }
}
const getSearchProduct = async () => {
    try {
        let response = await axios.get(`/api/products/search?q=${searchQuery.value}`)
        searchResponse.value = response.data.data
    } catch (e) { }
}

watch(searchQuery, () => { if(searchQuery.value) { getSearchProduct() } else { searchResponse.value = null } })

onMounted(() => {
    emitter.on('searchOpen', () => setIsSearchOpen(true));
})

onBeforeRouteUpdate(() => {
    setIsSearchOpen(false)
    searchQuery.value = null
    searchResponse.value = null
})
</script>

<style lang="scss">

</style>
