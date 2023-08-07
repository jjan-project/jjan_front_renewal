import styled from "@emotion/styled";

import { Flex } from "@/components/flex";

const StyledCheckBox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid black;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;

  &:checked::after {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
  }
`;

const CheckBox = ({ label }: { label: string }) => {
  return (
    <Flex alignItems="center" gap="10px">
      <StyledCheckBox type="checkbox" id="checkbox1" />
      <label htmlFor="checkbox1">{label}</label>
    </Flex>
  );
};

export { CheckBox };
