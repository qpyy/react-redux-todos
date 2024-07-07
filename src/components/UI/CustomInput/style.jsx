import styled from "styled-components";

const StyledCustomInput = styled.input`
  width: ${(props) => props.width};
  background-color: ${(props) => props.bgColor};
  height: 26px;
  border: 2px solid #373a3d;
  margin: 0 10px;
  border-radius: 4px;
  color: #373a3d;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  transition: border-color 0.4s;

  &:focus {
    border-color: #42a1ff;
  }
`;

export { StyledCustomInput };
