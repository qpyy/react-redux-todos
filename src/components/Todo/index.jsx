import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import detailsIcon from "../../assets/icons/detailsIcon.svg";
import { StyledParagraph, StyledIcon, StyledTodo, StyledIconDetails } from "./style";

const Todo = ({ task, toggleComplete, deleteTodo }) => {
  return (
    <StyledTodo>
      <Link to={`/details/${task.id}`}>
        <StyledIconDetails src={detailsIcon} onClick={() => deleteTodo(task.id)} />
      </Link>
      <StyledParagraph completed={task.completed} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </StyledParagraph>
      <StyledIcon src={deleteIcon} onClick={() => deleteTodo(task.id)} />
    </StyledTodo>
  );
};

export default Todo;
