const {sql} = require('../db.js');

exports.getAllCities = async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM cities`;
    res.json(rows);
  } catch (error) {
    console.error('Error fetching cities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getCities = async (req, res) => {
  try {
    const cities = await sql`SELECT * FROM cities order by city_id`;
    res.json(cities);
  } catch (error) {
    console.error('Error fetching cities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createCity = async (req, res) => {
  try {
    const {city_name} = req.body;
    const city = await sql`INSERT INTO cities (city_name) VALUES (${city_name})`;
    res.json(city);
  } catch (error) {
    console.error('Error creating city:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateCity = async (req, res) => {
  try {
    const {id} = req.params;
    const {city_name} = req.body;
    const rows = await sql`UPDATE cities SET city_name = ${city_name} WHERE city_id = ${id}`;
    res.json(rows);
  } catch (error) {
    console.error('Error updating city:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteCity = async (req, res) => {
  try {
    const {id} = req.params;
    const rows = await sql`DELETE FROM cities WHERE city_id = ${id}`;
    res.json(rows);
  } catch (error) {
    console.error('Error deleting city:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};