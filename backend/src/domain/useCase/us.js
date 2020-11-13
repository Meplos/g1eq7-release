let usList = [
  {
    id: 1,
    description: "En tant que développeur je veux pouvoir me créer un compte",
    type: "NewFeature",
    state: "Ouvert",
    projectId: 1,
    priority: 1,
    difficulty: 3,
    sprintId: null,
  },
];

exports.createUS = (req, res) => {
  if (usList.length > 0) {
    req.body.id = usList[usList.length - 1].id + 1;
  } else {
    req.body.id = 1;
  }
  usList.push(req.body);
  res.status("201").send({ usList });
};

exports.modifyUS = (req, res) => {
  let us_at_modify = usList.find((us) => us.id == req.params.idUS);
  us_at_modify.description = req.body.description;
  us_at_modify.type = req.body.type;
  us_at_modify.state = req.body.state;
  us_at_modify.projectId = req.body.projectId;
  us_at_modify.priority = req.body.priority;
  us_at_modify.difficulty = req.body.difficulty;
  us_at_modify.sprintId = req.body.sprintId;
  res.status("200").send({ usList });
};

exports.getAllUS = (req, res) => {
  console.log(req);
  let projectId = eval(req.params.idProject);
  let projectUS = [];

  usList.forEach((us) => {
    if (us.projectId === projectId) projectUS.push(us);
  });

  res.status("200").send(projectUS);
};
