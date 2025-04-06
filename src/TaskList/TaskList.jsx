const TaskList = ({ tasks, onDelete, onToggleComplete, onEdit }) => {
    return (
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} onToggleComplete={onToggleComplete} onEdit={onEdit} />
        ))}
      </div>
    );
  };
  
  export default TaskList;
  