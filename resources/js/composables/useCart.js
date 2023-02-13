import {ref} from "vue";
import _ from "lodash";
import i18n from "../i18n";

const {locale} = i18n.global
const cart = ref({})
const cartTotal = ref(null)

export default function useCart() {

    const addToCart = async params => {
        try {
            let response = await axios.post('/api/cart/add', params)
        } catch (e) { }
    }

    const removeFromCart = async id => {
        try {
            let response = await axios.post('/api/cart/remove', { row_id: id })
            getContent()
        } catch (e) { }
    }

    const getContent = async () => {
        try {
            let response = await axios.get('/api/cart/get-content')
            cart.value = response.data.data.content ?? {}
            cartTotal.value = response.data.data.total ?? 0
        } catch (e) { }
    }

    const itemsCountText = () => {
        let n = Object.values(cart.value).length
        let text_forms = locale.value === 'en' ? ['item', 'items', 'items'] : ['товар', 'товара', 'товаров']
        let needed_text = text_forms[2];
        n = Math.abs(n) % 100; var n1 = n % 10;
        if (n > 10 && n < 20) { needed_text = text_forms[2]; }
        if (n1 > 1 && n1 < 5) { needed_text = text_forms[1]; }
        if (n1 == 1) { needed_text = text_forms[0]; }
        return `${n} ${needed_text}`
    }

    return {
        cart,
        cartTotal,

        addToCart,
        removeFromCart,
        getContent,

        itemsCountText
    }
}
