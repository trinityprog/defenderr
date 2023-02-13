import {ref} from "vue";
import _ from "lodash";
import Cookies from "js-cookie";

const categories = ref([])

export default function useCategories() {

    const getCategories = async () => {
        try {
            let response = await axios.get('/api/categories/list')
            categories.value = response.data.data
        } catch (e) { }
    }

    const findByField = (key, value) => {
        return _.find(categories.value, [key, value])
    }

    return {
        categories,
        getCategories,
        findByField,
    }
}
