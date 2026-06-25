const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

const PORT = process.env.PORT;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/tasks", require("./src/routes/taskRoutes"));

app.get("/", (req, res) => {
  res.send("Working...");
});

app.listen(PORT, () => {
  console.log(`Listening to port http://localhost:${PORT}`);
});
