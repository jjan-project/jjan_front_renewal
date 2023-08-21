import * as S from "./CheckBox.styles";
import { CheckBoxProps } from "./types";

const CheckBox = ({
  id,
  backgroundColor = "black",
  borderRadius = "50%",
  width = 20,
  height = 20,
  isChecked,
  onChange,
}: CheckBoxProps) => {
  return (
    <S.CheckBox
      type="checkbox"
      id={id}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      width={width}
      height={height}
      checked={isChecked}
      onChange={onChange}
    />
  );
};

export { CheckBox };
