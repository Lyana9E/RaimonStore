import { createRouter, createWebHistory,  } from 'vue-router'
export type AppRouteNames = 'Home' | 'Shop' | 'ProductDetails' | 'Cart' | 'Checkout' | 'NotFound';

const routes  = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/shop',
        name: 'Shop',
        component: () => import('../pages/Shop.vue')
    },
    {
        path: '/product/:id',
        name: 'ProductDetails',
        component: () => import('../pages/ProductDetails.vue'),
        props: true
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../pages/Cart.vue')
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('../pages/Checkout.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../pages/ NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
