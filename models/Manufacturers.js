const mongoose = require('mongoose');
const products = require('./Products');

const ManufacturerSchema = mongoose.Schema({
    name: String,
    address: String,
    phone: Number,
    products: products
})