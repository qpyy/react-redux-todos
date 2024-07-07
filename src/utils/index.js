const getTodosFromStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const updateTodoInStorage = (id, updatedTask) => {
  const todos = getTodosFromStorage();

  const updatedTodos = todos.map((task) => (task.id === id ? { ...task, ...updatedTask } : task));
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
};

const saveTodosToStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const convertIdToDateTime = (id) => {
  const date = new Date(parseInt(id, 10));

  const [year, month, day, hours, minutes, seconds] = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
    String(date.getHours()).padStart(2, "0"),
    String(date.getMinutes()).padStart(2, "0"),
    String(date.getSeconds()).padStart(2, "0"),
  ];

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};

export { updateTodoInStorage, getTodosFromStorage, saveTodosToStorage, convertIdToDateTime };
