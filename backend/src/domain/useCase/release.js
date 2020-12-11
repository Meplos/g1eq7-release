const ReleaseMongoRepository = require("../../infra/ReleaseMongoRepository");

function createReleaseObject(req) {
  console.log("_____________________________________");
  console.log(req.file);
  console.log("_____________________________________");
  const release = JSON.parse(JSON.stringify(req.body));
  release.usList = JSON.parse(req.body.usList);
  release.filename = req.file.filename;
  release.filepath = req.file.path;
  return release;
}

exports.createRelease = (req, res) => {
  const release = createReleaseObject(req);
  release._id = null;
  console.log(release);
  ReleaseMongoRepository.createRelease(release)
    .then((result) => {
      release._id = result;
      res.status(201).send(release);
    })
    .catch((err) => console.log(err));
};

exports.modifyRelease = (req, res) => {
  const release = createReleaseObject(req);
  console.log(release);
  ReleaseMongoRepository.modifyRelease(release)
    .then(res.status(200).send(release))
    .catch(() => res.sendStatus(400));
};

exports.getAllRelease = (req, res) => {
  //console.log(req);

  let idProject = req.params.idProject;
  ReleaseMongoRepository.getReleaseOfProject(idProject)
    .then((list) => {
      console.log(list);

      res.status(200).send(list);
    })
    .catch(() => res.sendStatus(400));
};
