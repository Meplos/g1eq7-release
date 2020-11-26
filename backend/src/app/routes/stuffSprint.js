const express = require('express');
const router = express.Router();

const useCaseSprint = require('../../domain/useCase/sprint');

router.post("/create", useCaseSprint.addSprint);

router.get("/display/:idProject", useCaseSprint.getAllSprint);

module.exports = router;