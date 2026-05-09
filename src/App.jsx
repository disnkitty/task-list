import { useContext, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import CompletedTaskList from './CompletedTaskList';
import Footer from './Footer';
import { TasksContext } from './TaskProvider';

function App() {
  const { sortType, sortOrder, toggleSortOrder } = useContext(TasksContext);
  const [isActiveFirstPlus, setIsActiveFirstPlus] = useState(false);
  const [isActiveSecondPlus, setIsActiveSecondPlus] = useState(false);
  const [isActiveThirdPlus, setIsActiveThirdPlus] = useState(false);

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with priority</h1>
        <button
          onClick={() => setIsActiveFirstPlus(!isActiveFirstPlus)}
          className={`close-button ${isActiveFirstPlus && 'open'}`}
        >
          +
        </button>
        {isActiveFirstPlus && <TaskForm />}
      </div>

      <div className="task-container">
        <h2>Tasks:</h2>
        <button
          onClick={() => setIsActiveSecondPlus(!isActiveSecondPlus)}
          className={`close-button ${isActiveSecondPlus && 'open'}`}
        >
          +
        </button>
        <div className="sort-controls">
          <button
            className={`sort-button ${sortType === 'date' && 'active'}`}
            onClick={() => toggleSortOrder('date')}
          >
            By Date{' '}
            {sortType === 'date' && (sortOrder === 'asc' ? '\u2191' : '\u2193')}
          </button>
          <button
            className={`sort-button ${sortType === 'priority' && 'active'}`}
            onClick={() => toggleSortOrder('priority')}
          >
            By Priority{' '}
            {sortType === 'priority' &&
              (sortOrder === 'asc' ? '\u2191' : '\u2193')}
          </button>
        </div>
        {isActiveSecondPlus && <TaskList />}
      </div>

      <div className="completed-task-container">
        <h3>Completed Tasks</h3>
        <button
          onClick={() => setIsActiveThirdPlus(!isActiveThirdPlus)}
          className={`close-button ${isActiveThirdPlus && 'open'}`}
        >
          +
        </button>
        {isActiveThirdPlus && <CompletedTaskList />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
