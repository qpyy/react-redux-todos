import styled from "styled-components";
import { ReactComponent as homeIcon } from "../../../assets/icons/homeIcon.svg";

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
  top: 55px;
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

const StyledHomeIcon = styled(homeIcon)`
  width: 48px;
  height: 48px;
  margin-left: 20px;
  fill: #fff;
  transition: fill 0.2s;

  &:hover {
    fill: #42a1ff;
  }

  &:active {
    fill: #000;
  }
`;

export { StyledHeader, StyledSearchResults, StyledSearchItem, StyledHomeIcon };
