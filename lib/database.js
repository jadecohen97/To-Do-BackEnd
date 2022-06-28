const mysql = require("mysql");
const path = require("path");

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Jadecohens1234",
  port: 3306,
});

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  database: "mydb_toDo",
  password: "Jadecohens1234",
});
exports.pool = pool;

function query(sql) {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
exports.query = query;