const { sql } = require('../db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// users: id, email (unique), password, full_name, country, salary, role ('user' | 'admin')

exports.getUsers = async (req, res) => {
  try {
    const users = await sql`SELECT id, email, full_name, country, salary, role FROM users ORDER BY id`;
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.register = async (req, res) => {
  try {
    const { email, password, full_name, country, salary, role } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'email and password are required' });
    }
    const userRole = role === 'admin' ? 'admin' : 'user';
    const hashed = await bcrypt.hash(password, 10);

    const rows = await sql`
      INSERT INTO users (email, password, full_name, country, salary, role)
      VALUES (${email}, ${hashed}, ${full_name}, ${country}, ${salary}, ${userRole})
      RETURNING id, email, full_name, country, salary, role`;
    res.status(201).json(rows[0]);
  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).json({ message: 'Email already exists' });
    }
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const rows = await sql`SELECT * FROM users WHERE email = ${email}`;
    const user = rows[0];
    if (!user || !(await bcrypt.compare(password ?? '', user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '10h' }
    );
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
