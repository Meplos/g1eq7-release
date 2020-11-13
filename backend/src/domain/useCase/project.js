let projectList = [];

exports.getProjects = (req, res) => {
  res.status("200").send({ projectList });
};

exports.addProject = (req, res) => {
  if (projectList.length === 0) {
    req.body.id = 0;
  } else {
    req.body.id = projectList[projectList.length - 1].id + 1;
  }
  const project = req.body;
  projectList.push(project);

  res.status("201").send(project);
};

exports.modifyProject = (req, res) => {
  let projet_at_modify = projectList.find(
    (projet) => projet.id == req.params.idProject
  );
  projet_at_modify.name = req.body.name;
  projet_at_modify.start_date = req.body.start_date;
  projet_at_modify.state = req.body.state;
  projet_at_modify.end_date = req.body.end_date;
  projet_at_modify.git_repo = req.body.git_repo;
  projet_at_modify.desc = req.body.desc;

  res.status("200").send({ projectList });
};

exports.getProject = (req, res) => {
  let project = projectList.find(
    (projet) => projet.id === eval(req.params.idProject)
  );

  res.send(project);
};
