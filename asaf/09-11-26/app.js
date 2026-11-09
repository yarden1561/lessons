const express = require('express');
const {sql} = require('./db');
const app = express();
const cityRoutes = require( './routes/cityRoute.js')
const doctorRoutes = require( './routes/doctorRoute.js')
const hospitalRoutes = require( './routes/hospitalRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const productRoutes = require('./routes/productRoutes.js')


app.use(express.json());

app.use('/doctors', doctorRoutes);
app.use('/city', cityRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(3000, () => console.log(`Server running on http://localhost:3000`));