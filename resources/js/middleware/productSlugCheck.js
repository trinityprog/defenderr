import useProduct from "../composables/useProduct";

const {product, getProduct} = useProduct()

export default function productSlugCheck({ to, from, next }) {
    const {slug} = to.params

    getProduct(slug).then(() => {
        if (product.value === undefined) next({name: 'not-found'})
        next()
    })
}
