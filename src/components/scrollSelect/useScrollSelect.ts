/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRef, useEffect, useState } from "react";

const SCROLL_DEBOUNCE_TIME = 100;

const useScrollSelect = (
  list: (string | number)[],
  height: number,
  onSelectedChange?: (selected: string | number) => void,
) => {
  const newList = ["", ...list, ""];
  const ref = useRef<HTMLUListElement>(null);
  const [selected, setSelected] = useState(1);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const ITEM_HEIGHT = height / 3;

  const handleScroll = () => {
    if (ref.current) {
      clearTimeout(timerRef.current!);
      if (ref.current.scrollTop < ITEM_HEIGHT) {
        ref.current.scrollTop = ITEM_HEIGHT;
      }
      timerRef.current = setTimeout(() => {
        const index = Math.floor(
          (ref.current!.scrollTop + ITEM_HEIGHT / 2) / ITEM_HEIGHT,
        );
        if (list[index] !== "") {
          setSelected(index);
          itemRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          onSelectedChange && onSelectedChange(newList[index]);
        }
      }, SCROLL_DEBOUNCE_TIME);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = selected * ITEM_HEIGHT;
    }
  }, []);

  return {
    newList,
    ref,
    selected,
    itemRefs,
    handleScroll,
    ITEM_HEIGHT,
  };
};

export default useScrollSelect;
