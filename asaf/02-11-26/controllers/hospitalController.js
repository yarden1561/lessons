const {sql} = require('../db.js');

// hospital_id, hospital_name , hospital_country(text)

exports.getHospitals = async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM hospitals order by hospital_id`;
    res.json(rows);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createHospital = async (req, res) => {
  try {
    const {hospital_name, hospital_country} = req.body;
    const rows = await sql`INSERT INTO hospitals (hospital_name, hospital_country) VALUES (${hospital_name}, ${hospital_country})`;
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } 
};

exports.updateHospital = async (req, res) => {
  try {
    const {id} = req.params;
    const {hospital_name, hospital_country} = req.body;
    const rows = await sql`UPDATE hospitals SET hospital_name = ${hospital_name}, hospital_country = ${hospital_country} WHERE hospital_id = ${id}`;
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteHospital = async (req, res) => {
    try {
    const {id} = req.params;
    const rows = await sql`DELETE FROM hospitals WHERE hospital_id = ${id}`;
    res.json(rows);
  }
    catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

