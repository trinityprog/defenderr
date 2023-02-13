import { createI18n } from "vue-i18n";
import Cookies from 'js-cookie'
import en from './en.json';
import ru from './ru.json';

const languages = { en: en, ru: ru }
const messages = Object.assign(languages)

const instance = createI18n({
    legacy: false,
    globalInjection: true,
    locale: Cookies.get('locale') ?? 'en',
    fallbackLocale:'en',
    messages
})

export default instance

// export const i18n = instance.global
