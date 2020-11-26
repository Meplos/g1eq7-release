const Model = require("./MongooseSchema");
const mongoose = require("mongoose");

async function createSprint(sprint) {
    const newSprint = Model.Sprint(sprint);
    newSprint.projectLink = mongoose.Types.ObjectId(sprint.idProject);
    await newSprint.save((err) => {
      if (err) throw err;
    });
  }

async function getSprintOfProject(projectId) {
    let list = [];
    await Model.Sprint.find({ projectLink: projectId })
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