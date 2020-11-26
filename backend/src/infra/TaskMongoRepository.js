const mongoose = require("mongoose");
const Model = require("./MongooseSchema");

async function createTask(task) {
  const newTask = Model.Task(task);
  newTask.idProject = mongoose.Types.ObjectId(task.idProject);
  await newTask.save((err) => {
    if (err) throw err;
  });
}

async function getOneTask(taskId) {
  let task = {};
  await Model.Task.findById(mongoose.Types.ObjectId(taskId))
    .exec()
    .then((res) => (task = res));
  return task;
}

async function getTaskOfProject(projectId) {
  let list = [];
  await Model.Task.find({ idProject: projectId })
    .exec()
    .then((res) => {
      list = res;
    });
  return list;
}

async function modifyTask(task) {
  await Model.Task.update({ _id: task.id }, task).exec((err, res) => {
    if (err) throw err;
    if (res.modifiedCount < 1) throw "No row updated";
  });
}

module.exports = {
    createTask,
    getOneTask,
    getTaskOfProject,
    modifyTask,
};
