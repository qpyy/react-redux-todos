import { StyledCustomButton } from "./style";

const CustomButton = ({ type, buttonText }) => {
  return <StyledCustomButton type={type}>{buttonText}</StyledCustomButton>;
};

export default CustomButton;
