const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3000;
require('dotenv/config')

//IMPORT ROUTES
const productRoutes = require('./router/products');

//MIDDLEWARES: Functions that execute when routes are hit
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/products', productRoutes)

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on the home page')
})

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('connected to DB!')
);

//LISTENING
app.listen(port, () => {
    console.log(`Port ${port} reporting in...roger`)
})