import { useContext } from "react";
import { TasksContext } from "./TaskProvider";
import TaskItem from "./TaskItem";

function TaskList() {
  const { activeTasks, deleteTask, completeTask } = useContext(TasksContext);
  return (
    <ul className="task-list">
      {activeTasks.map((task) => (
        <TaskItem 
         key={task.id} task={task} />
      ))}
    </ul>
  );
}export default TaskList;