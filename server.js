const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const port = "8080";
const host = "0.0.0.0";

app.use("/", require("./routes/todo"));

app.listen(port, host, () => {
  console.log(`The server is listening at http://${host}:${port}`);
});
