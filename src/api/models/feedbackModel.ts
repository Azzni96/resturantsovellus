import db from '../../database/db';

export const addFeedback = (
  userId: number,
  productId: number,
  comment: string,
  rating: number
): number | bigint => {
  const statement = db.prepare(
    'INSERT INTO feedback (user_id, product_id, comment, rating) VALUES (?, ?, ?, ?)'
  );
  const result = statement.run(userId, productId, comment, rating);
  return result.lastInsertRowid;
};

export const getFeedbackForProduct = (productId: number) => {
  const statement = db.prepare(`
    SELECT f.id, f.comment, f.rating, u.name AS user_name
    FROM feedback f
    JOIN users u ON f.user_id = u.id
    WHERE f.product_id = ?
  `);
  return statement.all(productId);
};
