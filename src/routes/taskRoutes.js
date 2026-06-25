const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskController");

router.post("/", taskControllers.createTask);
router.get("/", taskControllers.getTasks);
router.get("/:id", taskControllers.getTaskById);
router.patch("/:id", taskControllers.updateTask);
router.delete("/:id", taskControllers.deleteTask);
router.patch("/:id/complete", taskControllers.markAsComplete);

module.exports = router;
