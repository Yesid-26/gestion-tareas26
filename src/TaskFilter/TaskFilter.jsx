// Definición del componente TaskFilter, que recibe dos props: filter y onFilterChange
const TaskFilter = ({ filter, onFilterChange }) => {
  return (
    // Contenedor principal con clase 'flex' para alineación horizontal y 'space-x-2' para separar los botones
    <div className="flex space-x-2">
      
      {/* Botón para filtrar todas las tareas */}
      <button 
        // Cuando se hace clic, se cambia el filtro a 'all' (todas las tareas)
        onClick={() => onFilterChange('all')} 
        // Condicional para aplicar un estilo destacado si el filtro actual es 'all'
        className={filter === 'all' ? 'bg-blue-500 text-white' : ''}
      >
        Todas
      </button>

      {/* Botón para filtrar solo las tareas activas */}
      <button 
        // Cuando se hace clic, se cambia el filtro a 'active' (tareas activas)
        onClick={() => onFilterChange('active')} 
        // Condicional para aplicar un estilo destacado si el filtro actual es 'active'
        className={filter === 'active' ? 'bg-blue-500 text-white' : ''}
      >
        Activas
      </button>

      {/* Botón para filtrar solo las tareas completadas */}
      <button 
        // Cuando se hace clic, se cambia el filtro a 'completed' (tareas completadas)
        onClick={() => onFilterChange('completed')} 
        // Condicional para aplicar un estilo destacado si el filtro actual es 'completed'
        className={filter === 'completed' ? 'bg-blue-500 text-white' : ''}
      >
        Completadas
      </button>
    </div>
  );
};

// Exportación del componente para que pueda ser utilizado en otros archivos
export default TaskFilter;
