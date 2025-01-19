import { User } from './../../types/LocalTypes';
import db from "../../database/db";


export const addUser = (name: string, email: string, password: string): number | bigint => {
    const statement = db.prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');
    const result = statement.run(name, email, password);
    return result.lastInsertRowid;
}

export const getAllUsers = () => {
    const statement = db.prepare('SELECT * FROM users');
    return statement.all();
  };

export const findUserByEmail = (email: string): User | undefined => {
    const statement = db.prepare('SELECT id, name, email, password FROM users WHERE email = ?');
    return statement.get(email) as User | undefined; // Palauttaa käyttäjän tiedot tai undefined
  };