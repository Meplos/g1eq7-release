const express = require('express');
const router = express.Router();

const useCaseProject = require('../../domain/useCase/project');

router.post('/create', useCaseProject.addProject);

router.post('/modify', useCaseProject.modifyProject);

router.get('/', useCaseProject.getProjects);

module.exports = router;