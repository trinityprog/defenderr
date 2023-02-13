import { createRouter, createWebHistory } from "vue-router";
import middlewarePipeline from "./middlewarePipeline";
import documentTitle from "../middleware/documentTitle";
import catalogSlugCheck from "../middleware/catalogSlugCheck";
import productSlugCheck from "../middleware/productSlugCheck";
import guest from "../middleware/guest";


const routes = [
    {
        path: '/',
        component: () => import('../AppLayout.vue'),
        meta: { middleware: [ documentTitle ] },
        children: [
            {
                path: '',
                name: 'index',
                component: () => import('../views/Index.vue'),
                meta: {title: 'Main Page'}
            }, {
                path: 'catalog/:slug?',
                name: 'catalog',
                component: () => import('../views/Catalog.vue'),
                meta: {title: 'Catalog', middleware: [ catalogSlugCheck ]}
            }, {
                path: 'product/:slug',
                name: 'product',
                component: () => import('../views/Product.vue'),
                meta: {title: 'Product', middleware: [ productSlugCheck ]}
            }, {
                path: 'cart',
                name: 'cart',
                component: () => import('../views/Cart.vue'),
                meta: {title: 'Cart'}
            }, {
                path: 'favorites',
                name: 'favorites',
                component: () => import('../views/Favorites.vue'),
                meta: {title: 'Favorites'}
            }, {
                path: 'contacts',
                name: 'contacts',
                component: () => import('../views/Contacts.vue'),
                meta: {title: 'Contacts'}
            }, {
                path: 'faqs/:slug?',
                name: 'faq',
                component: () => import('../views/Faq.vue'),
                meta: {title: 'Faq'}
            }, {
                path: 'delivery',
                name: 'delivery',
                component: () => import('../views/Delivery.vue'),
                meta: {title: 'Delivery'}
            }, {
                path: 'warranty',
                name: 'warranty',
                component: () => import('../views/Warranty.vue'),
                meta: {title: 'Warranty'}
            }, {
                path: 'guide',
                name: 'guide',
                component: () => import('../views/Guide.vue'),
                meta: {title: 'How To Choose?'}
            }, {
                path: 'login',
                name: 'login',
                component: () => import('../views/Login.vue'),
                meta: {title: 'Login', middleware: [ guest ]}
            },
        ]
    }, {
        path: '/:catchAll(.*)*',
        name: 'not-found',
        component: () => import('../views/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const middlewares = [];

    window.scrollTo(0, 0)

    to.matched.forEach(route => { if (route.meta.middleware) route.meta.middleware.forEach(m => middlewares.push(m)) })

    if (!middlewares.length) {
        return next()
    }

    const context = {
        to,
        from,
        next
    }

    return middlewares[0]({
        ...context,
        next: middlewarePipeline(context, middlewares, 1)
    })
})

export default router;
