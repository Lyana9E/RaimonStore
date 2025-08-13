import { defineStore } from 'pinia';
import { productApiService } from '../services/api';
import type { Product } from '../types';

export const useHomeProductStore = defineStore('homeProduct', {
    state: () => ({
        featuredProducts: [] as Product[],
        isLoading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchFeaturedProducts() {
            this.isLoading = true;
            this.error = null;
            try {
                this.featuredProducts = await productApiService.getAllProducts(6);
            } catch (err: any) {
                this.error = 'Failed to fetch featured products.';
                console.error('Error fetching featured products:', err);
            } finally {
                this.isLoading = false;
            }
        },
    },
});