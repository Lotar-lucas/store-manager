const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.createProduct);
router.get('/', productController.getAll);
router.put('/:id', productController.updateProduct);
router.get('/:id', productController.getProductById);
router.delete('/:id', productController.exclude);
module.exports = router;