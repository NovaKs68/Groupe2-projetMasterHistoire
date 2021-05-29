const express = require('express');
const router = express.Router();

const themeController = require('../controllers/theme');

router.post('/', themeController.create);
router.get('/', themeController.getAll);
router.get('/:id', themeController.getOne);
router.delete('/:id', themeController.delete);

module.exports = router
