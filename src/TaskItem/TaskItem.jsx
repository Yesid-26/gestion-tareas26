import React from 'react';

const TaskItem = ({ task, onDelete, onComplete, onEdit }) => {
  const handleComplete = () => {
    onComplete(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    onEdit(task);
  };

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex flex-col">
        <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.title}
        </span>
        <span className="text-sm text-gray-600">{task.description}</span>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleComplete}
          className={`px-4 py-2 rounded-md text-white ${task.completed ? 'bg-gray-500' : 'bg-green-500'}`}
        >
          {task.completed ? 'Completada' : 'Marcar como completada'}
        </button>
        <button
          onClick={handleEdit}
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 rounded-md bg-red-500 text-white"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
