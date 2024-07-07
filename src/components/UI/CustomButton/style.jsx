import styled from "styled-components";

const StyledCustomButton = styled.button`
  border: 2px solid #373a3d;
  border-radius: 4px;
  background-color: transparent;
  height: 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0 10px;
  transition-duration: 0.4s;
  color: #373a3d;
  cursor: pointer;

  &:hover {
    background-color: #373a3d;
    color: #adacac;
  }

  &:active {
    background-color: #adacac;
    color: #373a3d;
  }
`;

export { StyledCustomButton };
