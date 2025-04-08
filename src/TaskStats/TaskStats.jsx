// Componente funcional TaskStats que recibe una prop: tasks, que es un array con todas las tareas.
const TaskStats = ({ tasks }) => {
  
  // Filtra las tareas para contar cuántas no están completadas (es decir, aquellas cuyo valor 'completed' es falso)
  const pendingTasks = tasks.filter(task => !task.completed).length;
  
  return (
    <div>
      {/* Muestra la cantidad de tareas pendientes, que es el resultado del filtro */}
      <p>Tareas pendientes: {pendingTasks}</p>
      
      {/* Muestra el total de tareas, que es simplemente la longitud del array 'tasks' */}
      <p>Total de tareas: {tasks.length}</p>
    </div>
  );
};

// Exporta el componente TaskStats para que pueda ser utilizado en otras partes de la aplicación
export default TaskStats;
