const express = require('express');
const {sql} = require('./db.js');
const app = express();
import cityRoutes from './routes/cityRoute.js';
import doctorRoutes from './routes/doctorRoute.js';

app.use('/doctors', doctorRoutes);
app.use('/city', cityRoutes);

app.use(express.json());

app.listen(3000, () => console.log(`Server running on http://localhost:3000`));