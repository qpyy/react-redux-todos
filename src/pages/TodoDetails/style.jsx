import styled from "styled-components";

const StyledTodoDetailsWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  max-width: 650px;
  margin: 160px auto 0 auto;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 15px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
    font-size: 18px;
  }

  input,
  textarea {
    padding: 10px;
    margin-top: 5px;
    border-radius: 4px;
    background-color: transparent;
    font-size: 16px;
    transition: border-color 0.4s;

    &:focus {
      border-color: #42a1ff;
      outline: none;
    }
  }
`;

const StyledTextarea = styled.textarea`
  border: 2px solid #373a3d;
  border-radius: 4px;
  background-color: transparent;
  transition: border-color 0.4s;
  color: #373a3d;
  font-size: 16px;
  font-weight: bold;
  width: 90%;
  padding: 10px;
  margin-top: 5px;
  margin: 0 10px;
  resize: none;

  &:focus {
    border-color: #42a1ff;
    outline: none;
  }
`;

export { StyledTodoDetailsWrapper, StyledTextarea };
