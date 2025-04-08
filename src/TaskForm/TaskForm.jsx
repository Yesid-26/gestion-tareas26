import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Asegúrate de importar uuidv4 si lo necesitas

const TaskForm = ({ task, onSave }) => {
  
  // useState para manejar el título de la tarea. Si existe una tarea (task), usa su título; de lo contrario, empieza con un string vacío.
  const [title, setTitle] = useState(task ? task.title : "");
  
  // useState para manejar la descripción de la tarea. Igual que el título, si existe una tarea, usa su descripción.
  const [description, setDescription] = useState(task ? task.description : "");

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se recargue al enviarlo.
    
    // Si el título está vacío (después de eliminar espacios), no se hace nada.
    if (title.trim() === "") return;

    // Crea un nuevo objeto de tarea. Si hay una tarea existente, usa su ID; si no, genera uno nuevo con uuidv4().
    const newTask = { 
      id: task ? task.id : uuidv4(), 
      title, 
      description, 
      completed: false, // La tarea comienza como no completada
      createdAt: new Date() // Establece la fecha de creación
    };

    // Llama a la función onSave (pasada como prop) para guardar la nueva tarea (o la tarea editada)
    onSave(newTask);
  };

  return (
    // Formulario para crear o editar una tarea
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* Contenedor para el título de la tarea */}
      <div className="border p-4 rounded-lg shadow-md">
        <input
          type="text"
          value={title} // El valor del input es el estado del título
          autoFocus // Se encarga de al iniciar el programa la casilla esté automáticamente seleccionada
          pattern='[A-Za-z0-9/s] {3,50}' // Se encarga de los caracteres y la cantidad de caracteres
          onChange={(e) => setTitle(e.target.value)} // Actualiza el título cuando cambia el valor
          placeholder="Título" // Texto de ayuda para el campo
          className="border-none w-full focus:outline-none" // Clases de estilo de Tailwind
        />
      </div>
      
      {/* Contenedor para la descripción de la tarea */}
      <div className="border p-4 rounded-lg shadow-md">
        <textarea
          value={description} // El valor del textarea es el estado de la descripción
          onChange={(e) => setDescription(e.target.value)} // Actualiza la descripción cuando cambia el valor
          placeholder="Descripción" // Texto de ayuda para el campo
          className="border-none w-full focus:outline-none" // Clases de estilo de Tailwind
        />
      </div>
      
      {/* Botón para enviar el formulario y guardar la tarea */}
      <button type="submit" className="bg-blue-500 text-white p-2 mt-4 rounded-lg hover:bg-blue-600 transition-all">
        Guardar
      </button>
    </form>
  );
};

export default TaskForm;
