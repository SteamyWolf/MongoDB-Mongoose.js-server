const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    quantity: Number
});

module.exports = mongoose.model('Products', ProductSchema, 'products');