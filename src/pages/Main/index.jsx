import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoForm from "../../components/TodoForm";
import Todo from "../../components/Todo";
import Header from "../../components/UI/Header";
import { addTodo, toggleComplete, deleteTodo, setTodos } from "../../store/slices/todoSlices";
import { getTodosFromStorage, saveTodosToStorage } from "../../utils";
import { MainWrapper } from "./style";

const Main = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    const storedTodos = getTodosFromStorage();
    dispatch(setTodos(storedTodos));
  }, [dispatch]);

  useEffect(() => {
    saveTodosToStorage(todos);
  }, [todos]);

  const handleAddTodo = (todo) => {
    if (!todo.trim()) return;

    const newTodo = { id: Date.now().toString(), task: todo, completed: false, description: "" };
    dispatch(addTodo(newTodo));
    saveTodosToStorage([...todos, newTodo]);
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
    saveTodosToStorage(todos);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    saveTodosToStorage(todos);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const todosCopy = [...todos];
    const [reorderedItem] = todosCopy.splice(result.source.index, 1);
    todosCopy.splice(result.destination.index, 0, reorderedItem);
    dispatch(setTodos(todosCopy));
    saveTodosToStorage(todosCopy);
  };
  return (
    <>
      <Header />
      <MainWrapper>
        <h1>Задачи на сегодня!</h1>
        <TodoForm addTodo={handleAddTodo} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todos">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {todos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Todo
                          task={todo}
                          key={todo.id}
                          toggleComplete={() => handleToggleComplete(todo.id)}
                          deleteTodo={() => handleDeleteTodo(todo.id)}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </MainWrapper>
    </>
  );
};

export default Main;
