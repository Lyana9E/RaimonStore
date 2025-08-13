
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface CartItem extends Product {
    quantity: number;
}



export interface CheckoutFormState {
    fullName: string;
    address: string;
    phoneNumber: string;
}

export interface OrderResponse {
    success: boolean;
    orderId: string;
}