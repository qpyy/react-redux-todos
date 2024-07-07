import styled from "styled-components";

const StyledTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  min-width: 300px;
  box-sizing: border-box;
`;

const StyledParagraph = styled.p`
  font-size: 22px;
  cursor: pointer;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  flex: 1;
  text-align: center;
`;

const StyledIcon = styled.img`
  cursor: pointer;
  width: 24px;
  margin-left: 10px;
  transition: width 0.2s;

  &:hover {
    width: 28px;
  }

  &:active {
    width: 22px;
  }
`;

const StyledIconDetails = styled.img`
  cursor: pointer;
  width: 20px;
  padding-top: 2px;
  margin-right: 10px;
  transition: width 0.2s;

  &:hover {
    width: 24px;
  }

  &:active {
    width: 18px;
  }
`;

export { StyledParagraph, StyledIcon, StyledTodo, StyledIconDetails };
