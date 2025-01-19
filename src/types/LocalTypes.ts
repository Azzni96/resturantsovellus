export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

export type Product = {
    id: number;
    name: string;
    price: number;
    description?: string;
    image_url?: string;
};

export type Feedback = {
    id: number;
    user_id: number;
    product_id: number;
    comment: string;
    rating: number;
};