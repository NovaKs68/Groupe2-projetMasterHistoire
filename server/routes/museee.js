const express = require('express');
const router = express.Router();

const museeController = require('../controllers/museee');

router.post('/', museeController.create);
router.get('/', museeController.getAll);
router.get('/:id', museeController.getOne);
router.delete('/:id', museeController.delete);

module.exports = router
