import {ref} from "vue";
import i18n from "../i18n";

const {locale} = i18n.global
const favorites = ref({})

export default function useFavorites() {

    const addToFavorites = async params => {
        try {
            let response = await axios.post('/api/favorites/add', params)
            getContent()
        } catch (e) { }
    }

    const removeFromFavorites = async id => {
        try {
            let response = await axios.post('/api/favorites/remove', { row_id: id })
            getContent()
        } catch (e) { }
    }

    const getContent = async () => {
        try {
            let response = await axios.get('/api/favorites/get-content')
            favorites.value = response.data.data.content ?? {}
        } catch (e) { }
    }

    return {
        favorites,

        addToFavorites,
        removeFromFavorites,
        getContent,
    }
}
