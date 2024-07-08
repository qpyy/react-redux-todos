import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../../components/UI/CustomInput";
import Header from "../../components/UI/Header";
import { setCurrentTask, updateCurrentTask } from "../../store/slices/currentTaskSlice";
import { convertIdToDateTime, getTodosFromStorage, updateTodoInStorage } from "../../utils";
import { StyledTextarea, StyledTodoDetailsWrapper } from "./style";

const TodoDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentTask = useSelector((state) => state.currentTask);
  const [taskStatus, setTaskStatus] = useState("");

  useEffect(() => {
    const storedTodos = getTodosFromStorage();
    const foundTask = storedTodos.find((task) => task.id === id);

    if (foundTask) {
      dispatch(setCurrentTask(foundTask));
    }
  }, [id]);

  useEffect(() => {
    if (currentTask) {
      updateTaskStatus();
    }
  }, [currentTask]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    dispatch(updateCurrentTask({ [name]: value }));
    updateTodoInStorage(id, { [name]: value });
  };

  const updateTaskStatus = () => {
    if (currentTask.completed) {
      setTaskStatus("Выполнено");
      return;
    }

    if (isOverdue()) {
      setTaskStatus("Просрочена");
      return;
    }

    setTaskStatus("Не выполнено");
  };

  const isOverdue = () => {
    if (!currentTask?.dueDate) return false;

    return new Date(currentTask.dueDate) < new Date();
  };

  return (
    <>
      <Header />
      <StyledTodoDetailsWrapper>
        {currentTask ? (
          <div>
            <h2>Детали задачи</h2>
            <p>Дата создания: {convertIdToDateTime(currentTask.id)}</p>
            <p>
              Название задачи:{" "}
              <CustomInput
                bgColor="transparent"
                width="90%"
                type="text"
                name="task"
                value={currentTask.task}
                onChangeAction={handleInputChange}
              />
            </p>
            <p>
              Описание:{" "}
              <StyledTextarea
                name="description"
                value={currentTask.description}
                onChange={handleInputChange}
                rows={4}
                cols={50}
              />
            </p>
            <p>
              Ожидаемое время выполнения:{" "}
              <CustomInput
                bgColor="transparent"
                width="90%"
                type="datetime-local"
                name="dueDate"
                value={currentTask.dueDate}
                onChangeAction={handleInputChange}
              />
            </p>
            <p>Статус: {taskStatus}</p>
          </div>
        ) : (
          <p>Задача не найдена</p>
        )}
      </StyledTodoDetailsWrapper>
    </>
  );
};

export default TodoDetails;
