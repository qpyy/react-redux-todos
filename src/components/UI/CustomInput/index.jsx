import { StyledCustomInput } from "./style";

const CustomInput = ({ width, type, name, value, onChangeAction, bgColor, placeholderText }) => {
  return (
    <StyledCustomInput
      width={width}
      type={type}
      name={name}
      value={value}
      onChange={onChangeAction}
      style={{ backgroundColor: bgColor }}
      placeholder={placeholderText}
    />
  );
};

export default CustomInput;
