const mongoose = require("mongoose");
const Model = require("./MongooseSchema");

async function createRelease(release) {
  let usList = [];
  release.dependencies.forEach((curr) =>
    usList.push(mongoose.Types.ObjectId(curr))
  );
  release.usList = usList;
  release.projectId = mongoose.Types.ObjectId(release.projectId);

  const releaseToAdd = Model.Release(release);
  let _id;
  await releaseToAdd
    .save()
    .then((res) => {
      _id = res._id;
    })
    .catch((err) => console.log(err));
  return _id;
}

async function getOneRelease(releaseId) {
  let release = null;
  await Model.Release.findById(mongoose.Types.ObjectId(releaseId))
    .exec()
    .then((res) => {
      release = res;
    });
  return release;
}

async function getReleaseOfProject(projectId) {
  let releases = [];
  await Model.Release.find({ idProject: mongoose.Types.ObjectId(projectId) })
    .exec()
    .then((res) => (releases = res));
  return releases;
}

async function modifyRelease(release) {
  let usList = [];
  release.dependencies.forEach((curr) =>
    usList.push(mongoose.Types.ObjectId(curr))
  );
  release.usList = usList;
  release.projectId = mongoose.Types.ObjectId(release.projectId);
  Model.Release.update(
    { _id: mongoose.Types.ObjectId(release._id) },
    release
  ).exec((err, res) => {
    if (err) throw err;
    if (res.modifiedCount < 1) throw "No row updated";
  });
}
module.exports = {
  createRelease,
  getOneRelease,
  getReleaseOfProject,
  modifyRelease,
};
