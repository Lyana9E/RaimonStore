import axios from 'axios';
import type { Product } from '../types';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const productApiService = {
    async getAllProducts(limit?: number): Promise<Product[]> {
        const url = limit ? `/products?limit=${limit}` : '/products';
        try {
            const response = await api.get<Product[]>(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    async getProductById(id: number): Promise<Product> {
        try {
            const response = await api.get<Product>(`/products/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product with id ${id}:`, error);
            throw error;
        }
    },
};