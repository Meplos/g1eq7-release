const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3000;

const stuffProject = require("./routes/stuffProject");
const stuffUS = require("./routes/stuffUS");
const mongoose = require("mongoose");

const DBNAME = "cdp";
const HOST = "mongodb:27017";

mongoose.connect(`mongodb://${HOST}/${DBNAME}`, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB connected");
  app.use(bodyParser.json());
  app.use(cors());

  app.use("/project/:idProject/us", stuffUS);
  app.use("/project", stuffProject);

  app.get("/", (req, res) => res.send("Hello world ✌"));

  app.listen(PORT, () => {
    console.log("Server running...");
    console.log(`local: http://localhost:${PORT}`);
  });
});
