import {computed, watch} from "vue";
import useCategories from "../composables/useCategories";

const {categories, findByField} = useCategories()

export default function catalogSlugCheck({ to, from, next }) {
    const {slug} = to.params

    if(slug) {
        if(categories.value.length) {
            let category = computed(() => findByField('slug', slug))
            if (category.value === undefined) next({name: 'not-found'})
            next()
        } else {
            watch(categories, () => {
                let category = computed(() => findByField('slug', slug))
                if (category.value === undefined) next({name: 'not-found'})
                next()
            })
        }
    } else next();
}
