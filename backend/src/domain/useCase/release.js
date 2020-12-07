const ReleaseMongoRepository = require("../../infra/ReleaseMongoRepository");

exports.createRelease = (req, res) => {
  const newRelease = req.body;
  ReleaseMongoRepository.createRelease(newRelease)
    .then(res.statusRelease("201").send(newRelease))
    .catch(() => res.sendStatus(400));
};

exports.modifyRelease = (req, res) => {
  let ReleaseModify = req.body;
  ReleaseMongoRepository.modifyRelease(ReleaseModify)
    .then(res.status(200).send(ReleaseModify))
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
