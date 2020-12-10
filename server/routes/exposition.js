const express = require('express');
const router = express.Router();

const expositionController = require('../controllers/exposition');

router.post('/', expositionController.create);
router.get('/', expositionController.getAll);
router.get('/:id', expositionController.getOne);

module.exports = router
