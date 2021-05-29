const express = require('express');
const router = express.Router();

const expositionController = require('../controllers/exposition');

router.post('/', expositionController.create);
router.get('/', expositionController.getAll);
router.get('/:id', expositionController.getOne);
router.delete('/:id', expositionController.delete);

module.exports = router
