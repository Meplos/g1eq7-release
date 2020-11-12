const express = require('express');
const router = express.Router();

const useCaseUS = require('../../domain/useCase/us');

router.post('/create', useCaseUS.createUS);


module.exports = router;