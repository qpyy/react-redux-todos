import { useState } from "react";
import { Link } from "react-router-dom";
import CustomInput from "../CustomInput";
import { getTodosFromStorage } from "../../../utils";
import {
  StyledHeader,
  StyledSearchResults,
  StyledSearchItem,
  StyledHomeImage,
  StyledHomeIcon,
} from "./style";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim() !== "") {
      const storedTodos = getTodosFromStorage();

      const filteredTodos = storedTodos.filter((todo) =>
        todo.task.toLowerCase().includes(e.target.value.toLowerCase())
      );

      setSearchResults(filteredTodos);
    } else {
      setSearchResults([]);
    }
  };

  const clearSearchResults = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <StyledHeader>
      <CustomInput
        width="60%"
        placeholderText="Поиск задачи..."
        value={searchTerm}
        onChangeAction={handleInputChange}
      />

      {searchResults.length > 0 && (
        <StyledSearchResults>
          {searchResults.map((todo) => (
            <StyledSearchItem key={todo.id}>
              <Link to={`/details/${todo.id}`} onClick={clearSearchResults}>
                {todo.task}
              </Link>
            </StyledSearchItem>
          ))}
        </StyledSearchResults>
      )}

      <Link to="/main">
        <StyledHomeIcon alt="Home" />
      </Link>
    </StyledHeader>
  );
};

export default Header;
