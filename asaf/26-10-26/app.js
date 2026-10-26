const express = require('express');
let {sql} = require('./db.js');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {

  const rows = await sql`SELECT * FROM person order by id`;
  res.json(rows);
});

app.post('/', async (req, res) => {
  try {
  const {name, salary} = req.body;
  const rows = await sql`INSERT INTO person (full_name, salary) VALUES (${name}, ${salary})`;
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
});

app.put('/:id', async (req, res) => {
  try {
  const {id} = req.params;
  const {name, salary} = req.body;
  const rows = await sql`UPDATE person SET full_name = ${name}, salary = ${salary} WHERE id = ${id}`;
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
});

app.get('/course', async (req, res) => {

  const rows = await sql`SELECT * FROM course order by id`;
  res.json(rows);
});

app.post('/course', async (req, res) => {
  try {
  const {name, price} = req.body;
  const rows = await sql`INSERT INTO course (course_name, price) VALUES (${name}, ${price})`;
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
});

app.put('/course/:id', async (req, res) => {
  try {
  const {id} = req.params;
  const {course_name, price} = req.body;
  const rows = await sql`UPDATE course SET course_name = ${course_name}, price = ${price} WHERE id = ${id}`;
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
});

app.delete('/course/:id', async (req, res) => {
  try {
  const {id} = req.params;
  const rows = await sql`DELETE FROM course WHERE id = ${id}`;
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
});

app.listen(3000, () => console.log(`Server running on http://localhost:3000`));
