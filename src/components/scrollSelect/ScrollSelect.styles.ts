import styled from "@emotion/styled";

interface ItemHeightProps {
  itemHeight: number;
}

interface ListProps extends ItemHeightProps {
  width: number | undefined;
}

interface ListItemProps extends ItemHeightProps {
  isSelected: boolean;
}

export const List = styled.ul<ListProps>`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ itemHeight }) => `${itemHeight * 3}px`};
  overflow-y: scroll;
  position: relative;

  // For Chrome, Safari and Opera
  ::-webkit-scrollbar {
    display: none;
  }

  // For Firefox
  scrollbar-width: none;
`;

export const ListCenter = styled.div<ItemHeightProps>`
  box-sizing: border-box;
  border-top: 1.3px solid black;
  border-bottom: 1.3px solid black;
  height: ${({ itemHeight }) => `${itemHeight}px`};
  position: sticky;
  top: ${({ itemHeight }) => `${itemHeight}px`};
`;

export const ListItem = styled.li<ListItemProps>`
  height: ${({ itemHeight }) => `${itemHeight}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ isSelected }) => isSelected && "bold"};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.4)};
`;
