const express = require("express");
const multer = require("multer");
const fs = require("fs");
const useCaseRelease = require("../../domain/useCase/release");
const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const body = JSON.parse(JSON.stringify(req.body));
    console.log(req.headers["Content-Type"]);
    console.log("---------- body --------------");
    console.log(body);
    console.log("------------------------------");

    const { idProject } = body;
    const dir = `uploads/${idProject}/`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    return cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post(
  "/:idRelease/modify",
  upload.single("file"),
  useCaseRelease.modifyRelease
);
router.post("/create", upload.single("file"), useCaseRelease.createRelease);
router.get("/display/:idProject", useCaseRelease.getAllRelease);

module.exports = router;
