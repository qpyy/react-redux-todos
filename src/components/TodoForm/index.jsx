import { useState } from "react";
import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import { StyledForm } from "./style";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        value={value}
        placeholderText="Что будем делать?"
        onChangeAction={(e) => setValue(e.target.value)}
      />
      <CustomButton type="submit" buttonText="Добавить" />
    </StyledForm>
  );
};

export default TodoForm;
