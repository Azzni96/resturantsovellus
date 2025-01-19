import db from "../../database/db";

export const addProduct = (name: string, price: number, description: string, image_url: string): number | bigint => {
    const statement = db.prepare('INSERT INTO products (name, price, description, image_url) VALUES (?, ?, ?, ?)');
    const result = statement.run(name, price, description, image_url);
    return result.lastInsertRowid;
};

export const getAllProducts = () => {
    const statement = db.prepare('SELECT * FROM products');
    return statement.all();
};