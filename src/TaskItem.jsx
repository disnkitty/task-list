import { useContext } from "react";
import { TasksContext } from "./TaskProvider";

function TaskItem({ task }) {
  const { title, priority, deadline, id, completed } = task;
  const { deleteTask, completeTask } = useContext(TasksContext);

  return (
    <li
      className={`task-item ${(priority === 'Low' && 'low') || (priority === 'Medium' && 'medium') || (priority === 'High' && 'high')}`}
    >
      <div className="task-info">
        <div>
          {title} <strong> {priority}</strong>{' '}
        </div>
        <div className="task-deadline">Due: {deadline}</div>
      </div>
      <div className="task-buttons">
        {completed === false && (
          <button className="complete-button" onClick={() => completeTask(id)}>
            Complete
          </button>
        )}

        <button className="delete-button" onClick={() => deleteTask(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
export default TaskItem;
