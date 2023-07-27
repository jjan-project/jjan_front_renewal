import { List, ListCenter, ListItem } from "./ScrollSelect.styles";
import type { ScrollPickerProps } from "./types";
import useScrollSelect from "./useScrollSelect";

const ScrollSelect = ({
  list,
  width,
  height,
  onSelectedChange,
}: ScrollPickerProps) => {
  const { newList, ref, selected, itemRefs, handleScroll, ITEM_HEIGHT } =
    useScrollSelect(list, height, onSelectedChange);

  return (
    <List
      ref={ref}
      onScroll={handleScroll}
      width={width}
      itemHeight={ITEM_HEIGHT}
    >
      <ListCenter itemHeight={ITEM_HEIGHT} />
      {newList.map((item, index) => (
        <ListItem
          key={index}
          isSelected={index === selected}
          itemHeight={ITEM_HEIGHT}
          ref={el => (itemRefs.current[index] = el)}
        >
          {item}
        </ListItem>
      ))}
    </List>
  );
};

export default ScrollSelect;
