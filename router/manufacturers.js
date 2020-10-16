const express = require('express');
const router = express.Router();
const Manufacturer = require('../models/Manufacturers');

//ENTERED: /manufacturers/

router.get('/', async (req, res) => {
    try {
        const getManufac = await Manufacturer.find();
        res.json(getManufac);
    } catch(err) {
        res.json(err);
    }
});

router.post('/add', async (req,res) => {
    const manufac = new Manufacturer({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        products: []
    })
    try {
        const addManufac = await manufac.save();
        res.json(addManufac);
    } catch (err) {
        res.json(err);
    }
});

router.patch('/:manufacId', async (req, res) => {
    try {
        const updatedManufac = await Manufacturer.findByIdAndUpdate(req.params.manufacId,
            {
                name: req.body.name,
                address: req.body.address,
                phone: req.body.phone
            }
        );
        res.json(updatedManufac);
    } catch(err) {
        res.json(err);
    }
});

router.delete('/:manufacId', async (req, res) => {
    try {
        const deletedManufac = await Manufacturer.remove({ _id: req.params.manufacId });
        res.json(deletedManufac);
    } catch(err) {
        res.json(err);
    }
});

router.get('/manufacturer/:id', async (req, res) => {
    try {
        await Manufacturer.findOne({ _id: req.params.id })
        .populate('products')
        .exec((err, products) => {
            res.json(products)
        })
    } catch(err) {
        res.json(err)
    }
})


//Export router:
module.exports = router;