const app = require("express")();
const bodyParser = require("body-parser");

const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello world ✌"));

app.listen(PORT, () => {
  console.log("Server running...");
  console.log(`local: http://localhost:${PORT}`);
});
