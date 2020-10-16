const mongoose = require('mongoose');

const ManufacturerSchema = mongoose.Schema({
    name: String,
    address: String,
    phone: Number,
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }]
})

module.exports = mongoose.model('Manufacturers', ManufacturerSchema, 'manufacturers')