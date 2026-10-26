const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

let products = [
    { id: 1, name: 'Product 1' , price: 10.99 },
    { id: 2, name: 'Product 2' , price: 19.99 },
    { id: 3, name: 'Product 3' , price: 29.99 },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
    console.log(req.ip);
  res.send('About Page' + req.ip);
});

app.get('/products', (req, res) => {
  return res.json(products);
});

app.post('/products', (req, res) => {
    let product = req.body;
    product = {id: products.length + 1, ...product};
    products.push(product);
    return res.status(201).json({ success: true });
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }
    return res.json(product);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));