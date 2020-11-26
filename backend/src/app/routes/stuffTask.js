const express = require("express");
const router = express.Router();

const useCaseTask = require("../../domain/useCase/task");

router.post("/:idTask/modify", useCaseTask.modifytask);
router.post("/create", useCaseTask.createTask);
router.get("/display/:idProject", useCaseTask.getAllTask);

module.exports = router;
