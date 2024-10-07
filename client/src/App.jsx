import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div className="container mx-auto p-4">
    <h1 className="cursor-pointer text-center text-3xl font-bold mb-4">Task Manager</h1>
    <div className="mb-4 justify-center flex">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task"
        className="border rounded outline-none p-2 mr-2 w-64" autoFocus
      />
      <button onClick={addTask} className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </div>

    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`mb-2 pl-2 flex border border-gray-400 justify-between items-center ${
            task.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {task.text}
          <div>
            <button
              onClick={() => toggleTask(index)}
              className={`mr-2 p-1 text-white rounded ${
                task.completed ? 'bg-yellow-500' : 'bg-green-500'
              }`}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(index)} className="bg-red-500 text-white p-1 rounded">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;
