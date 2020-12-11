const express = require("express");
const router = express.Router();

const useCaseSprint = require("../../domain/useCase/sprint");

router.post("/create", useCaseSprint.addSprint);
router.post("/:idSprint/modify", useCaseSprint.modifySprint);

router.get("/display/:idProject", useCaseSprint.getAllSprint);

router.get("/uscurrent/:idProject", useCaseSprint.getAllUSFromCurrentSprint);

module.exports = router;
