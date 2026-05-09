import { useContext } from "react";
import { TasksContext } from "./TaskProvider";
import TaskItem from "./TaskItem";

function CompletedTaskList() {
  const { completedTasks, deleteTask } = useContext(TasksContext);
  return (
    <ul className="completed-task-list">
      {completedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}export default CompletedTaskList;
