import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mensaje de error

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    setNewTaskTitle(event.target.value);
    setErrorMessage(''); // Resetear mensaje de error cada vez que se cambia el texto
  };

  // Expresión regular para validar el título (solo letras, números y espacios)
  const isValidTitle = (title) => /^[a-zA-Z0-9 ]*$/.test(title);

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') {
      setErrorMessage('El título no puede estar vacío.');
      return;
    }
    if (!isValidTitle(newTaskTitle)) {
      setErrorMessage('El título contiene caracteres no permitidos.');
      return;
    }

    const newTaskObj = {
      id: uuidv4(),
      title: newTaskTitle,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTaskTitle('');
  };

  const handleSaveEditedTask = () => {
    if (newTaskTitle.trim() === '') {
      setErrorMessage('El título no puede estar vacío.');
      return;
    }
    if (!isValidTitle(newTaskTitle)) {
      setErrorMessage('El título contiene caracteres no permitidos.');
      return;
    }

    setTasks(tasks.map(task =>
      task.id === editingTaskId ? { ...task, title: newTaskTitle } : task
    ));
    setEditingTaskId(null);
    setNewTaskTitle('');
  };

  const handleToggleCompletion = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEditTask = (task) => {
    setEditingTaskId(task.id);
    setNewTaskTitle(task.title); // Set task title to input for editing
  };

  const handleMarkCompleted = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };

  const handleRevertCompletion = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: false } : task
    ));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true; // 'all'
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-extrabold text-white mb-8">Gestión de Tareas</h1>

      {/* Formulario para agregar o editar tareas */}
      <div className="flex mb-8 w-full max-w-xl bg-gray-800 rounded-lg shadow-md p-4">
        <input
          type="text"
          value={newTaskTitle}
          onChange={handleInputChange}
          placeholder="Agregar nueva tarea"
          className="px-4 py-3 border rounded-l-lg w-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <button
          onClick={editingTaskId ? handleSaveEditedTask : handleAddTask}
          className="px-6 py-3 bg-teal-500 text-white rounded-r-lg hover:bg-teal-600 transition duration-300"
        >
          {editingTaskId ? 'Guardar cambios' : 'Añadir tarea'}
        </button>
      </div>

      {/* Mensaje de error si el título no es válido */}
      {errorMessage && (
        <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
      )}

      {/* Filtro de tareas */}
      <div className="mb-8 space-x-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-3 rounded-md ${filter === 'all' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-teal-500 border border-teal-500'} hover:bg-teal-600 transition duration-300`}
        >
          Todas
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-6 py-3 rounded-md ${filter === 'active' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-teal-500 border border-teal-500'} hover:bg-teal-600 transition duration-300`}
        >
          Activas
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-6 py-3 rounded-md ${filter === 'completed' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-teal-500 border border-teal-500'} hover:bg-teal-600 transition duration-300`}
        >
          Completadas
        </button>
      </div>

      {/* Lista de tareas */}
      <ul className="w-full max-w-xl space-y-6">
        {filteredTasks.map((task) => (
          <li key={task.id} className={`flex justify-between items-center p-6 rounded-lg bg-gray-800 shadow-md transition duration-300 ${task.completed ? 'bg-green-900' : 'bg-gray-700'}`}>
            <div className="flex items-center space-x-4">
              {/* Cuadro de verificación */}
              <div
                onClick={() => handleToggleCompletion(task.id)}
                className={`w-6 h-6 border-2 rounded-full ${task.completed ? 'bg-teal-500' : 'bg-gray-300'} cursor-pointer flex items-center justify-center`}
              >
                {task.completed && <span className="text-white">✔</span>}
              </div>

              <span
                onClick={() => handleToggleCompletion(task.id)}
                className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : 'text-gray-300 hover:text-teal-500'}`}
              >
                {task.title}
              </span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleEditTask(task)}
                className="text-teal-500 hover:text-teal-700 transition duration-300"
              >
                Editar
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 hover:text-red-700 transition duration-300"
              >
                Eliminar
              </button>
              {/* Botón de Completar tarea */}
              <button
                onClick={() => handleMarkCompleted(task.id)}
                className={`text-teal-500 hover:text-teal-700 transition duration-300 ${task.completed ? 'cursor-not-allowed' : ''}`}
                disabled={task.completed} // Deshabilitar si la tarea ya está completada
              >
                Completar
              </button>

              {/* Botón de Revertir tarea completada */}
              {task.completed && (filter === 'all' || filter === 'completed') && (
                <button
                  onClick={() => handleRevertCompletion(task.id)}
                  className="text-yellow-500 hover:text-yellow-700 transition duration-300"
                >
                  Revertir
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Contador de tareas pendientes */}
      <div className="mt-6 text-lg text-gray-300">
        <p>{tasks.filter(task => !task.completed).length} tarea(s) pendiente(s)</p>
      </div>
    </div>
  );
}

export default App;
