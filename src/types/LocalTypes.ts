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
    userId: number;
    productId: number;
    comment: string;
    rating: number;
  };