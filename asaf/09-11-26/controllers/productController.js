const { sql } = require('../db.js');

// products: id, name, title, price, description, stock

exports.getProducts = async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM products ORDER BY id`;
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM products WHERE id = ${req.params.id}`;
    if (!rows.length) return res.status(404).json({ message: 'Product not found' });
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, title, price, description, stock } = req.body;
    const rows = await sql`
      INSERT INTO products (name, title, price, description, stock)
      VALUES (${name}, ${title}, ${price}, ${description}, ${stock})
      RETURNING *`;
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, title, price, description, stock } = req.body;
    const rows = await sql`
      UPDATE products
      SET name = ${name}, title = ${title}, price = ${price}, description = ${description}, stock = ${stock}
      WHERE id = ${req.params.id}
      RETURNING *`;
    if (!rows.length) return res.status(404).json({ message: 'Product not found' });
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const rows = await sql`DELETE FROM products WHERE id = ${req.params.id} RETURNING *`;
    if (!rows.length) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted', product: rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
