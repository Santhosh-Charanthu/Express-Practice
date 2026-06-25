import { useState, useEffect } from "react";
import axios from "axios";

export default function TaskList({ tasks, setTasks }) {
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    const data = res.data;
    setTasks(data.tasks);
  };

  const deleteTask = async (id) => {
    const res = await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    if (!res.data) {
      console.log(res.data.message);
    }
    setTasks(res.data.tasks);
  };

  return (
    <div>
      <h1>All Tasks</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.priority}</p>
          <p>{task.status}</p>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
