const express = require('express');
const router = express.Router();

const useCaseProject = require('../../domain/useCase/project');

router.get('/', useCaseProject.getProjects);

module.exports = router;