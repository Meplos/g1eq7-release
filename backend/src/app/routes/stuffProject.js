const express = require('express');
const router = express.Router();

const useCaseProject = require('../../domain/useCase/project');

router.post('/create', useCaseProject.addProject);

router.post('/:idProject/modify', useCaseProject.modifyProject);

router.get('/:idProject', useCaseProject.getProject);

router.get('/', useCaseProject.getProjects);

router.get('/:idProject/burndownchart', useCaseProject.getProject);

module.exports = router;