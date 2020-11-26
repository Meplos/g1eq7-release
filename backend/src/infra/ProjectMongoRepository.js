const Model = require("./MongooseSchema");
const mongoose = require("mongoose");

async function createProject(project) {
  const projectToAdd = new Model.Project(project);
  let _id = null;
  await projectToAdd.save().then((result) => {
    _id = result._id;
  });
  return _id;
}

async function getOneProject(projectId) {
  let project = {};
  await Model.Project.findById(mongoose.Types.ObjectId(projectId))
    .exec()
    .then((res) => {
      project = res;
    });
  return project;
}

async function getAllProject() {
  let projects = [];
  await Model.Project.find({})
    .exec()
    .then((res) => {
      projects = res;
    });
  return projects;
}

async function modifyProject(project) {
  Model.Project.update(
    { _id: mongoose.Types.ObjectId(project.id) },
    project
  ).exec((err, res) => {
    if (err) throw err;
    if (res.modifiedCount < 1) throw "No row updated";
  });
}

module.exports = {
  createProject,
  getOneProject,
  getAllProject,
  modifyProject,
};
