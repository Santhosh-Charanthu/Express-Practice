import { useEffect, useState } from "react";
import axios from "axios";

export default function TaskForm({ tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("LOW");

  const createTask = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/tasks", {
      title,
      description,
      priority,
    });
    setTitle("");
    setDescription("");
    setPriority("LOW");
    setTasks([...tasks, res.data.task]);
  };

  return (
    <form onSubmit={createTask}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        type="text"
        id="description"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="priority">Priority</label>
      <select
        value={priority}
        id="priority"
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>

      <button type="submit">Create Task</button>
    </form>
  );
}
