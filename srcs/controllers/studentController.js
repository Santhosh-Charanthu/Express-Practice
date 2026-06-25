const db = require("../config/db");

module.exports.getStudents = (req, res) => {
  const query = "SELECT * FROM students";
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json(result);
  });
};

module.exports.insertStudents = (req, res) => {
  const { name, email, branch, cgpa } = req.body;
  const query = `
    INSERT INTO students(name, email, branch, cgpa)
    VALUES(?, ?, ?, ?)
    `;

  if (!name || !email || !branch || !cgpa)
    return res.status(400).json({ message: "All fields are required" });

  db.query(query, [name, email, branch, cgpa], (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(200).json({
      message: "Student created successfully",
      studentId: result.insertId,
    });
  });
};

module.exports.getStudentById = (req, res) => {
  const { id } = req.params;
  let student = null;
  const query = `SELECT * FROM students
    WHERE id = ?
    `;

  db.query(query, [id], (err, result) => {
    if (result.length == 0)
      return res.json({ message: "No student exists with this id" });
    student = result[0];
    res.status(200).json({ student });
  });
};
