const TaskMongoRepository = require("../../infra/TaskMongoRepository");

exports.createTask = (req, res) => {
  const newTask = req.body;
  TaskMongoRepository.createTask(newTask)
    .then(res.status("201").send(newTask))
    .catch(() => res.sendStatus(400));
};

exports.modifytask = (req, res) => {
  let taskModify = req.body;
  TaskMongoRepository.modifyTask(taskModify)
    .then(res.status(200).send(taskModify))
    .catch(() => res.sendStatus(400));
};

exports.getAllTask = (req, res) => {
  //console.log(req);

  let projectId = req.params.idProject;
  TaskMongoRepository.getAllTask(projectId)
    .then((list) => {
      console.log(list);

      res.status(200).send(list);
    })
    .catch(() => res.sendStatus(400));
};
