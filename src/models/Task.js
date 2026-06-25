class Task {
  constructor(id, title, description, priority, status, createdAt) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.status = status;
    this.createdAt = createdAt;
  }
}

module.exports = Task;
