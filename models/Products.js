const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    quantity: Number,
    manufacturer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manufacturers'
    }
});

module.exports = mongoose.model('Products', ProductSchema, 'products');