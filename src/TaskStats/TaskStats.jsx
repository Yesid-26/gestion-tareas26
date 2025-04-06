const TaskStats = ({ tasks }) => {
    const pendingTasks = tasks.filter(task => !task.completed).length;
    return (
      <div>
        <p>Tareas pendientes: {pendingTasks}</p>
        <p>Total de tareas: {tasks.length}</p>
      </div>
    );
  };
  
  export default TaskStats;
  