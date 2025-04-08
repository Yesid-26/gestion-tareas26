// Importa React para poder usar JSX en el componente
import React from 'react'; 

// Componente funcional TaskItem que recibe props: task (la tarea a mostrar), onDelete (función para eliminar la tarea),
// onComplete (función para marcar la tarea como completada), y onEdit (función para editar la tarea)
const TaskItem = ({ task, onDelete, onComplete, onEdit }) => {

  // Función que maneja la acción de marcar la tarea como completada. Llama a la función onComplete y pasa el ID de la tarea.
  const handleComplete = () => {
    onComplete(task.id);
  };

  // Función que maneja la acción de eliminar la tarea. Llama a la función onDelete y pasa el ID de la tarea.
  const handleDelete = () => {
    onDelete(task.id);
  };

  // Función que maneja la acción de editar la tarea. Llama a la función onEdit y pasa la tarea completa.
  const handleEdit = () => {
    onEdit(task);
  };

  return (
    // Contenedor principal de la tarea, usa clases de Tailwind para el diseño y espaciado
    <div className="flex justify-between items-center p-4 border-b">
      
      {/* Contenedor para el título y la descripción de la tarea */}
      <div className="flex flex-col">
        {/* El título de la tarea. Si la tarea está marcada como completada, se aplica un estilo de línea tachada */}
        <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.title}
        </span>
        {/* Descripción de la tarea, con un color gris más tenue */}
        <span className="text-sm text-gray-600">{task.description}</span>
      </div>
      
      {/* Contenedor para los botones de acción: marcar como completada, editar, eliminar */}
      <div className="flex space-x-2">
        {/* Botón para marcar la tarea como completada. El color de fondo cambia dependiendo del estado de la tarea */}
        <button
          onClick={handleComplete} // Al hacer clic, llama a handleComplete
          className={`px-4 py-2 rounded-md text-white ${task.completed ? 'bg-gray-500' : 'bg-green-500'}`} // Cambia el color de fondo según si la tarea está completada o no
        >
          {/* El texto del botón cambia dependiendo del estado de la tarea */}
          {task.completed ? 'Completada' : 'Marcar como completada'}
        </button>
        
        {/* Botón para editar la tarea. Siempre tiene el mismo color de fondo (azul) */}
        <button
          onClick={handleEdit} // Al hacer clic, llama a handleEdit
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Editar
        </button>

        {/* Botón para eliminar la tarea. Siempre tiene el mismo color de fondo (rojo) */}
        <button
          onClick={handleDelete} // Al hacer clic, llama a handleDelete
          className="px-4 py-2 rounded-md bg-red-500 text-white"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

// Exporta el componente TaskItem para que pueda ser utilizado en otros lugares de la aplicación
export default TaskItem;
