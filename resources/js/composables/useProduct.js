import {ref} from "vue";
import {useRouter} from "vue-router";
import {components} from "../components/Product/components";
import _ from "lodash";

const product = ref({})
const similarProducts = ref([])

export default function useProduct() {

    const router = useRouter()

    const getSimilarProducts = async () => {
        try {
            let response = await axios.get(`/api/products/similar?except_id=${product.value.id}`)
            similarProducts.value = response.data.data
        } catch (e) { }
    }

    const getViewComponent = () => {
        let searchKey = ''
        if(product.value.parentGroup) searchKey = `parent_group=${product.value.parentGroup}`
        else searchKey = `slug=${product.value.slug}`

        if(components[searchKey]) return components[searchKey]
        else return components['empty']
    }

    const getProduct = async (slug) => {
        try {
            let response = await axios.get(`/api/products/${slug}`)
            product.value = response.data.data
        } catch (e) { }
    }

    return {
        product,
        similarProducts,

        getSimilarProducts,
        getViewComponent,
        getProduct,
    }
}
