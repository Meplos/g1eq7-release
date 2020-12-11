const TaskRepository = require("../../infra/TaskMongoRepository");
exports.createTask = (req, res) => {
  const newTask = req.body;
  console.log(newTask.dateEnd);
  TaskRepository.createTask(newTask)
    .then((_id) => {
      console.log(_id);
      newTask._id = _id;
      res.status("201").send(newTask);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

exports.modifyTask = (req, res) => {
  const taskToModify = req.body;
  TaskRepository.modifyTask(taskToModify)
    .then(() => {
      res.status(200).send(taskToModify);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

exports.getAllTask = (req, res) => {
  //console.log(req);
  TaskRepository.getTasksOfProject(req.params.idProject)
    .then((list) => {
      res.status(200).send(list);
    })
    .catch(() => res.sendStatus(404));
};
