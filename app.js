require("dotenv").config();

const express = require("express");
const db = require("./srcs/config/db");
const createStudentsTable = require("./srcs/config/initDB");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/student", require("./srcs/routes/studentRoutes"));

createStudentsTable();

app.listen(PORT, () => {
  console.log(`Server ruuning on http://localhost:${PORT}`);
});
