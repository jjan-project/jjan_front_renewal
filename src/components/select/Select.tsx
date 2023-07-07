import { useState } from "react";

import { Typo } from "../typo";

import * as S from "./Select.styles";
import { SelectOption, SelectProps } from "./types";

const Select = <T,>(props: SelectProps<T>) => {
  const { options, value, onChange, testId } = props;
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option: SelectOption<T>) => {
    if (option !== value) onChange(option);
  };

  return (
    <S.Container
      tabIndex={0}
      onClick={() => setIsOpen(prev => !prev)}
      onBlur={() => {
        setIsOpen(false);
      }}
      data-testid={testId}
    >
      <Typo
        appearance="header2"
        style={{
          flexGrow: 1,
        }}
      >
        {value?.label}
      </Typo>
      <S.Caret />
      <S.Options isOpen={isOpen} role="list">
        {options.map((option, index) => (
          <S.Option
            key={index}
            role="listitem"
            onClick={e => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
          >
            {option.label}
          </S.Option>
        ))}
      </S.Options>
    </S.Container>
  );
};

export { Select };
