const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    imageName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
}, { timestamps: { createdAt: 'created_at' } });

const images = mongoose.model('image', imageSchema);

module.exports = images;