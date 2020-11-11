const app = require("express")();
const bodyParser = require("body-parser");

const PORT = 3000;

const stuffProject = require('./routes/stuffProject');

app.use(bodyParser.json());

app.use('/project', stuffProject);

app.get("/", (req, res) => res.send("Hello world ✌"));

app.listen(PORT, () => {
  console.log("Server running...");
  console.log(`local: http://localhost:${PORT}`);
});
