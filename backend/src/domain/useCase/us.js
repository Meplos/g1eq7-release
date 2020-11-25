let usList = [];
const { Model } = require("mongoose");
const USMongoRepository = require("../../infra/USMongoRepository");
const UserStoryRepository = require("../../infra/USMongoRepository");

exports.createUS = (req, res) => {
  const newUS = req.body;
  UserStoryRepository.createUS(newUS)
    .then(res.status("201").send(newUS))
    .catch(() => res.sendStatus(400));
};

exports.modifyUS = (req, res) => {
  let usModify = req.body;
  UserStoryRepository.modifyUS(usModify)
    .then(res.status(200).send(usModify))
    .catch(() => res.sendStatus(400));
};

exports.getAllUS = (req, res) => {
  //console.log(req);

  let projectId = req.params.idProject;
  USMongoRepository.getUsOfProject(projectId)
    .then((list) => {
      console.log(list);

      res.status(200).send(list);
    })
    .catch(() => res.sendStatus(400));
};
