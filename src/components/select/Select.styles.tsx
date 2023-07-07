import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  min-height: 1.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0 0.5em;
  border-radius: 0.25em;
  outline: none;
`;

export const Value = styled.span`
  flex-grow: 1;
`;

export const Caret = styled.div`
  translate: 0 25%;
  border: 0.25em solid transparent;
  border-top-color: #777;
`;

export const Options = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  max-height: 15em;
  overflow-y: auto;
  border: 0.05em solid #777;
  border-radius: 0.25em;
  width: 100%;
  left: 0;
  top: calc(100%);
  background-color: white;
  z-index: 100;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Option = styled.li`
  padding: 0.25em 0.5em;
  cursor: pointer;
`;
