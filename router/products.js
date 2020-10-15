const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

//ENTERED: /POSTS/

//Gets back all the products:
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch(error) {
        res.json({message: error})
    }
})

//Gets back only one specific product:
router.get('/:productId', async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
    } catch(error) {
        res.json(error);
    }
})

//Submits a product:
router.post('/add', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity
    });
    try {
        const savedProduct = await product.save();
        res.json(savedProduct)
    } catch (error) {
        res.json({message: error})
    }
});

//Deletes a product:
router.delete('/:productId', async (req, res) => {
    try {
        const deletedPost =  await Product.remove({ _id: req.params.productId })
        res.json(deletedPost);
    } catch(error) {
        res.json(error);
    }
});

//Update a product
router.patch('/:productId/:quantity', async (req, res) => {
    console.log(req.params)
    try {
        const postUpdate = await Product.findOneAndUpdate({ _id: req.params.productId }, {$set: {quantity: req.params.quantity}});
        res.json(postUpdate);
    } catch (error) {
        res.json(error);
    }
})

module.exports = router;