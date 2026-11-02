const {sql} = require('./db.js');

exports.getDoctors = async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM doctors order by doctor_id`;
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createDoctor = async (req, res) => {
  try {
    const {full_name, prices, city_id} = req.body;
    const rows = await sql`INSERT INTO doctors (full_name, prices, city_id) VALUES (${full_name}, ${prices}, ${city_id})`;
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
  const {id} = req.params;
  const {full_name, prices, city_id} = req.body;
  const rows = await sql`UPDATE doctors SET full_name = ${full_name}, prices = ${prices}, city_id = ${city_id} WHERE doctor_id = ${id}`;
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
}

exports.deleteDoctor = async (req, res) => {
  try {
  const {id} = req.params;
  const rows = await sql`DELETE FROM doctors WHERE doctor_id = ${id}`;
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
}

exports.getFullDoctors = async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM doctors JOIN cities ON doctors.city_id = cities.city_id`;
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' }); 
  }
}

exports.getFullDoctor = async (req, res) => {
  try {
    const {id} = req.params;
    const rows = await sql`SELECT * FROM doctors JOIN cities ON doctors.city_id = cities.city_id WHERE doctors.doctor_id = ${id}`;
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}