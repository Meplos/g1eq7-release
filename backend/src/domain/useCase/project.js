let projectList = [
  {
    id: 1,
    name: "Test",
    start_date: "2020-11-12",
    state: "Ouvert",
    end_date: "2020-11-12",
    git_repo: null,
    description: "Projet de test",
  },
];

exports.getProjects = (req, res) => {
  res.status("200").send({ projectList });
};

exports.addProject = (req, res) => {
  req.body.id = projectList[projectList.length - 1].id + 1;
  projectList.push(req.body);

  res.status("201").send({ projectList });
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
