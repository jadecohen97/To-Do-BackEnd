const express = require("express");
const router = express.Router();
const SQL = require("@nearform/sql");
const { v4: uuid } = require("uuid");
var format = require("date-format");
const { query } = require("../lib/database");

router.post("/", async (req, res) => {
  const { text } = req.body;
  const id = uuid();
  const date = format();
  const createdToDo = SQL`INSERT INTO todo(
        id,
        text,
        date
    ) VALUES (${id}, ${text}, ${date})`;
  await query(createdToDo);
  console.log(createdToDo);
  res.send({ id, text, date });
});

router.get("/", async (req, res) => {
  const allToDos = await query(SQL`SELECT * FROM todo`);
  console.log(allToDos);
  res.send(allToDos);
});

module.exports = router;
