import { useState } from "react";
import { StyledHeader, StyledSearchResults, StyledSearchItem } from "./style";
import { Link } from "react-router-dom";
import { getTodosFromStorage } from "../../../utils";
import CustomInput from "../CustomInput";

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
    </StyledHeader>
  );
};

export default Header;
