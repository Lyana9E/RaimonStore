import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { productApiService } from '../services/api';
import type { Product } from '../types'

export const useProductStore = defineStore('product', () => {


    const products = ref<Product[]>([])
    const selectedProduct = ref<Product | null>(null)
    const searchTerm = ref<string>('')
    const sortOrder = ref<'asc' | 'desc' | ''>('')
    const isLoading = ref<boolean>(false)
    const error = ref<string | null>(null)

    const filteredAndSortedProducts = computed<Product[]>(() => {
        let items = [...products.value];

        if (searchTerm.value) {
            items = items.filter(item =>
                item.title.toLowerCase().includes(searchTerm.value.toLowerCase())
            );
        }
        if (sortOrder.value === 'asc') {
            items.sort((a, b) => a.price - b.price);
        } else if (sortOrder.value === 'desc') {
            items.sort((a, b) => b.price - a.price);
        }
        return items;
    });

    const fetchProducts = async () => {
        isLoading.value = true
        error.value = null
        try {
            products.value = await productApiService.getAllProducts();
        } catch (err: any) {
            error.value = 'Failed to fetch products.';
            console.error('Error fetching products:', err)
        } finally {
            isLoading.value = false
        }
    };

    const fetchProductById = async (id: number) => {
        isLoading.value = true
        error.value = null
        selectedProduct.value = null
        try {
            selectedProduct.value = await productApiService.getProductById(id)
        } catch (err: any) {
            error.value = 'Failed to fetch product details.';
            console.error(`Error fetching product with ID ${id}:`, err)
        } finally {
            isLoading.value = false
        }
    }

    return {
        products,
        selectedProduct,
        searchTerm,
        sortOrder,
        isLoading,
        error,
        filteredAndSortedProducts,
        fetchProducts,
        fetchProductById,
    };
});