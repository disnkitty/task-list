import { createContext, useState } from 'react';
export const TasksContext = createContext();
function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [sortType, setSortType] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');
  function addTask(task) {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  }

  function deleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }
  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task,
      ),
    );
  }

  function toggleSortOrder(type) {
    if (sortType === type) {
      setSortOrder((sortOrder) => (sortOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortType(type);
      setSortOrder('asc');
    }
  }

  function sortTask(tasks) {
    return tasks.slice().sort((a, b) => {
      if (sortType === 'priority') {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return sortOrder === 'asc'
          ? priorityOrder[a.priority] - priorityOrder[b.priority]
          : priorityOrder[b.priority] - priorityOrder[a.priority];
      } else {
        return sortOrder === 'asc'
          ? new Date(a.deadline) - new Date(b.deadline)
          : new Date(b.deadline) - new Date(a.deadline);
      }
    });
  }
  const completedTasks = tasks.filter((t) => t.completed);
  const activeTasks = sortTask(tasks.filter((t) => !t.completed));
  return (
    <div>
      <TasksContext.Provider
        value={{
          sortType,
          sortOrder,
          toggleSortOrder,
          addTask,
          deleteTask,
          completeTask,
          completedTasks,
          activeTasks,
          setSortType,
          setSortOrder,
        }}
      >
        {children}
      </TasksContext.Provider>
    </div>
  );
}

export default TaskProvider;
