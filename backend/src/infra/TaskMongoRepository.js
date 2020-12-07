const mongoose = require("mongoose");
const Model = require("./MongooseSchema");

async function createTask(task) {
  let dependenciesId = [];
  task.dependencies.forEach((curr) =>
    dependenciesId.push(mongoose.Types.ObjectId(curr))
  );
  task.dependencies = dependenciesId;
  task.idUs = mongoose.Types.ObjectId(task.idUs);
  task.idProject = mongoose.Types.ObjectId(task.idProject);
  const newTask = Model.Task(task);
  let _id;
  await newTask
    .save()
    .then((res) => {
      _id = res._id;
    })
    .catch((err) => console.log(err));
  return _id;
}

async function getOneTasks(taskId) {
  let task = null;
  await (await Model.Task.findById(mongoose.Types.ObjectId(taskId)))
    .exec()
    .then((res) => {
      task = res;
    });
  return task;
}

async function getTasksOfProject(idProject) {
  let tasks = [];
  await Model.Task.find({ idProject: idProject })
    .exec()
    .then((res) => {
      tasks = res;
    });
  return tasks;
}

async function modifyTask(task) {
  Model.Task.update({ _id: mongoose.Types.ObjectId(task._id) }, task).exec(
    (err, res) => {
      if (err) throw err;
      if (res.modifiedCount < 1) throw "No row updated";
    }
  );
}

module.exports = {
  createTask,
  getOneTasks,
  getTasksOfProject,
  modifyTask,
};
