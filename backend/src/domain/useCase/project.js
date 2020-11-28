const ProjectRepository = require("../../infra/ProjectMongoRepository");

exports.getProjects = (req, res) => {
  ProjectRepository.getAllProject()
    .then((projects) => {
      console.log(projects);
      res.status(200).send({ projectList: projects });
    })
    .catch((err) => console.log(err));
};

exports.addProject = (req, res) => {
  if (!req.body.name || req.body.name.length === 0) {
    res.sendStatus(400);
    return;
  }
  const project = req.body;
  ProjectRepository.createProject(project)
    .then((id) => {
      console.log(id);

      project._id = id;
      res.status(201).send(project);
    })
    .catch((err) => console.log(err));
};

exports.modifyProject = (req, res) => {
  if (!req.body.name || req.body.name.length === 0) {
    res.sendStatus(400);
  }
  const projectModify = req.body;
  ProjectRepository.modifyProject(projectModify)
    .then(() => {
      res.status(200).send({ projectModify });
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

exports.getProject = (req, res) => {
  ProjectRepository.getOneProject(req.params.idProject)
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(() => res.sendStatus(404));
};
