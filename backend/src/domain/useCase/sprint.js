const SprintRepository = require("../../infra/SprintMongoRepository");

exports.getAllSprint = (req, res) => {
    //console.log(req);
  
    let projectId = req.params.idProject;
    SprintRepository.getSprintOfProject(projectId)
      .then((list) => {
        console.log(list);
  
        res.status(200).send(list);
      })
      .catch(() => res.sendStatus(400));
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