import './bootstrap';
import { createApp } from 'vue';
import i18n from './i18n'
import router from './router';
import mitt from 'mitt';
import useCategories from "./composables/useCategories";
import useAuth from "./composables/useAuth";

const emitter = mitt();
const {getCategories} = useCategories()
const {attempt} = useAuth()

attempt().then(() =>
    createApp({
        beforeCreate() {
            getCategories()
        }
    })
        .use(router)
        .use(i18n)
        .provide('emitter', emitter)
        .mount('#app')
)

