const express = require("express");
const router = express.Router();
const SQL = require("@nearform/sql");
const { v4: uuid } = require("uuid");
const { query } = require("../lib/database");

router.post("/", async (req, res) => {
  const { text } = req.body;
  const id = uuid();
  const date = new Date().toDateString();
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

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deleteItem = await query(SQL`DELETE FROM todo WHERE id=${id}`);
  console.log(deleteItem);
  res.send(deleteItem);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updateCompleted = await query(
    SQL`UPDATE todo SET completed=true WHERE id = ${id}`
  );
  res.send(updateCompleted);
});

module.exports = router;
