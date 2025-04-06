const TaskForm = ({ task, onSave }) => {
    const [title, setTitle] = useState(task ? task.title : "");
    const [description, setDescription] = useState(task ? task.description : "");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (title.trim() === "") return;
      const newTask = { id: task ? task.id : uuidv4(), title, description, completed: false, createdAt: new Date() };
      onSave(newTask);
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          className="border p-2 w-full"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Guardar</button>
      </form>
    );
  };
  
  export default TaskForm;
  