const Task = require("../models/Task");
let tasks = [
  {
    id: 1,
    title: "DSA",
    description: "Practice Binary Search",
    priority: 1,
    status: "PENDING",
  },

  {
    id: 2,
    title: "PMS Project",
    description: "Build Authentication for PMS",
    priority: 2,
    status: "PENDING",
  },

  {
    id: 3,
    title: "Aptitude",
    description: "Practice Profit and Loss",
    priority: 3,
    status: "PENDING",
  },
];
let id = 4;

module.exports.createTask = (req, res) => {
  const { title, description, priority } = req.body;
  if (!title || !description || !priority) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const createdAt = new Date();
  const task = new Task(
    id++,
    title,
    description,
    priority,
    "PENDING",
    createdAt,
  );
  tasks.push(task);
  res.status(201).json({
    message: "Task created successfully",
    task: tasks[tasks.length - 1],
  });
};

module.exports.getTasks = (req, res) => {
  const query = req.query.status;
  if (query) {
    const filteredTasks = tasks.filter((t) => t.status === String(query));
    return res.json({ filteredTasks });
  }
  return res.status(200).json({ tasks });
};

module.exports.getTaskById = (req, res) => {
  const { id } = req.params;
  let task = tasks.filter((t) => t.id == id);
  if (task.length == 0) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json(task);
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, priority } = req.body;
  let task = tasks.find((t) => t.id == id);
  if (task == null) {
    res.status(404).json({ message: "Task not found" });
    return;
  }
  if (title) {
    task.title = title;
  }
  if (description) {
    task.description = description;
  }
  if (priority != undefined) {
    task.priority = priority;
  }
  res.status(200).json({ message: "Task Updated Successfully!", task });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id == id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  tasks = tasks.filter((t) => t.id != id);
  res.status(200).json({ message: "Task Deleted Successfully!", tasks });
};

module.exports.markAsComplete = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === Number(id));
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  task.status = "COMPLETED";
  res.status(200).json({ message: "Task marked as Completed!", task });
};
