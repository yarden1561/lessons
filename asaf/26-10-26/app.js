const express = require('express');
let {sql} = require('./db.js');

const app = express();

app.use(express.json());

app.get('/cities', async (req, res) => {

  const cities = await sql`SELECT * FROM cities order by city_id`;
  res.json(cities);
});

app.post('/city', async (req, res) => {
  try {
  const {city_name} = req.body;
  const city = await sql`INSERT INTO cities (city_name) VALUES (${city_name})`;
  res.json(city);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
});

app.put('/city/:id', async (req, res) => {
  try {
  const {id} = req.params;
  const {city_name} = req.body;
  const rows = await sql`UPDATE cities SET city_name = ${city_name} WHERE city_id = ${id}`;
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
});

app.delete('/city/:id', async (req, res) => {
  try {
  const {id} = req.params;
  const rows = await sql`DELETE FROM cities WHERE city_id = ${id}`;
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
});

app.get('/full/city/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const city = await sql`SELECT * FROM cities JOIN doctors ON cities.city_id = doctors.city_id WHERE cities.city_id = ${id}`;
    res.json(city);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/full/cities', async (req, res) => {
  try {
    const cities = await sql`SELECT * FROM cities JOIN doctors ON cities.city_id = doctors.city_id`;
    res.json(cities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Doctors endpoints
// doctor_id, full_name , prices , city_id


app.get('/doctors', async (req, res) => {

  const rows = await sql`SELECT * FROM doctors order by doctor_id`;
  res.json(rows);
});

app.post('/doctors', async (req, res) => {
  try {
  const {full_name, prices, city_id} = req.body;
  const rows = await sql`INSERT INTO doctors (full_name, prices, city_id) VALUES (${full_name}, ${prices}, ${city_id})`;
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
});

app.put('/doctors/:id', async (req, res) => {
  try {
  const {id} = req.params;
  const {full_name, prices, city_id} = req.body;
  const rows = await sql`UPDATE doctors SET full_name = ${full_name}, prices = ${prices}, city_id = ${city_id} WHERE doctor_id = ${id}`;
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
});

app.delete('/doctors/:id', async (req, res) => {
  try {
  const {id} = req.params;
  const rows = await sql`DELETE FROM doctors WHERE doctor_id = ${id}`;
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
});

app.listen(3000, () => console.log(`Server running on http://localhost:3000`));
