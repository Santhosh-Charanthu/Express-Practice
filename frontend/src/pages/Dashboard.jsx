import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { useState } from "react";
export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <TaskForm tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
