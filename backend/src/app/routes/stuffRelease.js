const express = require("express");
const router = express.Router();

const useCaseRelease = require("../../domain/useCase/release");

router.post("/:idRelease/modify", useCaseRelease.modifyRelease);
router.post("/create", useCaseRelease.createRelease);
router.get("/display/:idProject", useCaseRelease.getAllRelease);

module.exports = router;
