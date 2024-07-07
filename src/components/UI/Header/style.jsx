import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #373a3d;
  z-index: 10;
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.18);
`;

const StyledSearchResults = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 5px 0;
  width: 60%;
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 9;
  top: 55px; /* расстояние между наверху и поисковыми результатами */
`;

const StyledSearchItem = styled.li`
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #f1f1f1;
  }

  a {
    color: #000;
    text-decoration: none;
    font-size: 16px;
  }
`;

export { StyledHeader, StyledSearchResults, StyledSearchItem };
