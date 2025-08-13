import { defineStore } from 'pinia'
import type { Product, CartItem } from '../types'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: [] as CartItem[],
    }),

    getters: {
        totalItems: (state) => {
            return state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
        },
        totalPrice: (state) => {
            return state.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        },
    },

    // Actions
    actions: {
        addToCart(product: Product) {
            const existingItem = this.cartItems.find(item => item.id === product.id)
            if (existingItem) {
                this.increaseQuantity(product.id)
            } else {
                this.cartItems.push({ ...product, quantity: 1 })
            }
        },
        removeFromCart(productId: number) {
            this.cartItems = this.cartItems.filter(item => item.id !== productId)
        },
        increaseQuantity(productId: number) {
            const item = this.cartItems.find(item => item.id === productId)
            if (item) {
                item.quantity++
            }
        },
        decreaseQuantity(productId: number) {
            const item = this.cartItems.find(item => item.id === productId)
            if (item && item.quantity > 1) {
                item.quantity--
            } else if (item && item.quantity === 1) {
                this.removeFromCart(productId)
            }
        },
        clearCart() {
            this.cartItems = []
        }
    },
    persist: {
        storage: localStorage,
    },
})