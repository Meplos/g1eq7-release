const mongoose = require("mongoose");
const Model = require("./MongooseSchema");

async function createUS(us) {
  const newUS = Model.UserStory(us);
  await newUS.save((err) => {
    if (err) throw err;
  });
}

async function getOneUs(usId) {
  let us = {};
  await Model.UserStory.findById(mongoose.Types.ObjectId(usId))
    .exec()
    .then((res) => (us = res));
  return us;
}

async function getUsOfProject(projectId) {
  let list = [];
  await Model.UserStory.find({ idProject: projectId })
    .exec()
    .then((res) => {
      list = res;
    });
  return list;
}

async function modifyUS(us) {
  await Model.UserStory.update({ _id: us.id }, us).exec((err, res) => {
    if (err) throw err;
    if (res.modifiedCount < 1) throw "No row updated";
  });
}

module.exports = {
  createUS,
  getOneUs,
  getUsOfProject,
  modifyUS,
};
