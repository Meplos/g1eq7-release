const Model = require("./MongooseSchema");
const mongoose = require("mongoose");

async function createSprint(sprint) {
  sprint.idProject = mongoose.Types.ObjectId(sprint.idProject);
  const newSprint = Model.Sprint(sprint);
  let _id = null;
  await newSprint.save().then((res) => {
    _id = res._id;
  });
  return _id;
}

async function getSprintOfProject(idProject) {
  let list = [];
  await Model.Sprint.find({ idProject: mongoose.Types.ObjectId(idProject) })
    .exec()
    .then((res) => {
      list = res;
    });
  return list;
}

module.exports = {
  createSprint,
  getSprintOfProject,
};
