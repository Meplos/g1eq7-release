const express = require('express');
const router = express.Router();

const useCaseUS = require('../../domain/useCase/us');

router.post('/:idUS/modify', useCaseUS.modifyUS);
router.post('/create', useCaseUS.createUS);
router.get('/display/:idProject', useCaseUS.getAllUS);


module.exports = router;