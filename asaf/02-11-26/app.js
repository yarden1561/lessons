const express = require('express');
const {sql} = require('./db');
const app = express();
const cityRoutes = require( './routes/cityRoute.js')
const doctorRoutes = require( './routes/doctorRoute.js')

app.use(express.json());

app.use('/doctors', doctorRoutes);
app.use('/city', cityRoutes);

app.listen(3000, () => console.log(`Server running on http://localhost:3000`));