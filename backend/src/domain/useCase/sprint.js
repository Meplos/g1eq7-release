const SprintRepository = require("../../infra/SprintMongoRepository");

exports.getAllSprint = (req, res) => {
  //console.log(req);

  let idProject = req.params.idProject;
  SprintRepository.getSprintOfProject(idProject)
    .then((list) => {
      console.log(list);

      res.status(200).send(list);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

exports.addSprint = (req, res) => {
  const sprint = req.body;
  SprintRepository.createSprint(sprint)
    .then((id) => {
      console.log(id);

      sprint._id = id;
      res.status(201).send(sprint);
    })
    .catch((err) => console.log(err));
};

exports.getAllUSFromCurrentSprint = (req,res) => {
  let idProject = req.params.idProject;
  SprintRepository.getAllUSFromCurrentSprint(idProject)
    .then((list) => {
      console.log("US in actual sprint: "+list)
      res.status(200).send(list);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
}
