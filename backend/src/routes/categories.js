const router = require('express').Router();

const CategoryController = require('../controllers/CategoryController');

router.get('/categories', CategoryController.index);

module.exports = router;
