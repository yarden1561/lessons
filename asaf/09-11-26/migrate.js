// Creates the users/products tables (if missing) and seeds 3 rows in each.
// Run: npm run migrate
const { sql } = require('./db');
const bcrypt = require('bcryptjs');

(async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      full_name TEXT,
      country TEXT,
      salary INT,
      role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin'))
    )`;

  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      name TEXT,
      title TEXT,
      price INT,
      description TEXT,
      stock INT
    )`;

  const users = [
    { email: 'admin@test.com', password: '123456', full_name: 'Admin User', country: 'Israel', salary: 20000, role: 'admin' },
    { email: 'dana@test.com', password: '123456', full_name: 'Dana Cohen', country: 'Israel', salary: 12000, role: 'user' },
    { email: 'john@test.com', password: '123456', full_name: 'John Smith', country: 'USA', salary: 9000, role: 'user' },
  ];
  for (const u of users) {
    const hashed = await bcrypt.hash(u.password, 10);
    await sql`
      INSERT INTO users (email, password, full_name, country, salary, role)
      VALUES (${u.email}, ${hashed}, ${u.full_name}, ${u.country}, ${u.salary}, ${u.role})
      ON CONFLICT (email) DO NOTHING`;
  }

  const [{ count }] = await sql`SELECT COUNT(*)::int AS count FROM products`;
  if (count === 0) {
    await sql`
      INSERT INTO products (name, title, price, description, stock) VALUES
        ('Laptop', 'Dell XPS 13', 5000, 'Lightweight 13 inch laptop', 10),
        ('Phone', 'iPhone 15', 4000, 'Apple smartphone', 25),
        ('Headphones', 'Sony WH-1000XM5', 1500, 'Noise cancelling headphones', 40)`;
  }

  console.log('Users:', await sql`SELECT id, email, role FROM users ORDER BY id`);
  console.log('Products:', await sql`SELECT * FROM products ORDER BY id`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
