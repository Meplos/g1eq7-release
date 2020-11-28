const TaskRepository = require("../../infra/TaskMongoRepository");
exports.createTask = (req, res) => {
  const newTask = req.body;

  TaskRepository.createTask(newTask)
    .then((t) => {
      newTask._id = t._id;
      res.status("201").send(newTask);
    })
    .catch(() => res.sendStatus(400));
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
