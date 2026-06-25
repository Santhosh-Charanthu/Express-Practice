const express = require("express");
const router = express.Router();
const studentControllers = require("../controllers/studentController");

router.get("/", studentControllers.getStudents);

router.get("/:id", studentControllers.getStudentById);

router.post("/insert-student", studentControllers.insertStudents);

module.exports = router;
