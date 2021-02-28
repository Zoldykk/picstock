const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const controller = require('../controllers/controller')


// Mutler Config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({storage: storage, fileFilter: fileFilter});

router.get('/api/images/search', controller.searchDocsGet)
router.get('/api/images', controller.imagesGet)
router.get('/api/images/:id', controller.imageItemGet)
router.post('/api/images', upload.single('imageName'), controller.imagesPost)

module.exports = router
