const db = require("./db");

const createStudentsTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(50) NOT NULL,
        branch VARCHAR(50) NOT NULL,
        cgpa DECIMAL(3, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

  db.query(query, (err, result) => {
    if (err) {
      console.log("Table Creation Failed");
      console.log(err);
      return;
    }
    console.log("Students Table Ready");
  });
};

module.exports = createStudentsTable;
