const path = require('path');
const Image = require('../models/Image');

exports.images__get = async (req, res) =>{
    const images = await Image.find().sort({ _id: -1 })
    res.json(images)
}

exports.imageItem__get = async (req, res) =>{
    const image = await Image.findById(req.params.id)
    res.json(image)
}

exports.images__post = async (req, res) =>{
    const newImage = await new Image({
        imageName: req.file.filename,
        category: req.body.category
    });
    newImage.save();
    res.redirect('http://localhost:3001/')
}

exports.searchDocs__get = async (req, res) =>{
    const image = await Image.find({ category:  {'$regex': req.query.query,$options:'i'} });
    if(image.length == 0){
        res.json('no records found with this query')
    }
    res.json(image)
}