import {ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import _ from "lodash";

const products = ref({ data: [], meta: {} })
const characteristics = ref({})
const DEFAULT_SORT = 'newest'

const filter = ref([])
const sort = ref(DEFAULT_SORT)
const page = ref(1)

export default function useCatalog() {
    const route = useRoute()
    const router = useRouter()

    const setAllCategories = () => {
        filter.value = []
        return router.push({
            params: {
                slug: null
            },
            query: {
                sort: sort.value
            }
        })
    }
    const setCategory = (slug) => {
        filter.value = []
        return router.push({
            params: {
                slug: slug
            },
            query: {
                sort: sort.value
            }
        })
    }

    const setAllCharacteristic = char_name => {
        filter.value = _.filter(filter.value, char => Object.keys(char)[0] !== char_name )
        changeQueryParams()
    }
    const setCharacteristic = (char_name, char_value) => {
        filter.value = _.filter(filter.value, char => Object.keys(char)[0] !== char_name )
        filter.value.push({[char_name]: char_value})
        changeQueryParams()
    }
    const checkSelectedAllCharacteristic = (char_name) => {
        let filtered = _.filter(filter.value, char => Object.keys(char)[0] === char_name )
        return !filtered.length
    }
    const checkSelectedCharacteristic = (char_name, char_value) => {
        let filtered = _.filter(filter.value, char => Object.keys(char)[0] === char_name && char[Object.keys(char)[0]] === char_value)
        return filtered.length
    }

    const setSort = (slug) => {
        sort.value = slug
        changeQueryParams()
    }

    const loadMore = () => {
        page.value++
        getProducts()
    }

    const setValuesFromRoute = () => {
        if(route && route.query.sort) sort.value = route.query.sort
        if(route && route.query.page) page.value = route.query.page
        watch(characteristics, () => { if(route && route.query) filter.value = findCharInQuery() })
    }
    const findCharInQuery = () => {
        let filter = []
        _.forEach(route.query, (value, key, collection) => {
            let findChar = _.find(characteristics.value, ['slug', key])
            return findChar && findChar.slug === key ? filter.push({[key]: value}) : null
        })
        return filter
    }
    const changeQueryParams = () => {
        let query = {}
        if(sort.value) query.sort = sort.value
        if(filter.value) query = Object.assign(query, ...filter.value)

        return router.push({
            params: route.params,
            query: query
        })
    }
    const clearFilter = () => {
        filter.value = []
        return router.push({
            params: {
                slug: null
            },
            query: {
                sort: sort.value
            }
        })
    }

    const getProducts = async () => {
        try {
            let url = route.params.slug ? `/api/products/catalog/${route.params.slug}` : '/api/products/catalog'
            let response = await axios.get(url, { params: Object.assign(route.query, {page: page.value}) })
            products.value.data = page.value === 1 ? response.data.data : _.unionBy(products.value.data, response.data.data, 'id')
            products.value.meta = response.data.meta
        } catch (e) {

        }
    }
    const getCharacteristics = async () => {
        try {
            let response = await axios.get('/api/characteristics/list')
            characteristics.value = response.data.data
        } catch (e) { }
    }

    return {
        products,
        characteristics,

        filter,
        sort,
        page,

        setAllCategories,
        setCategory,
        setAllCharacteristic,
        setCharacteristic,
        setSort,
        loadMore,

        checkSelectedAllCharacteristic,
        checkSelectedCharacteristic,

        setValuesFromRoute,
        clearFilter,

        getProducts,
        getCharacteristics
    }
}
