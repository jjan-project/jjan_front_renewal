import { ReactNode } from "react";

type BottomNavProps = {
  items: ItemProps[];
};

type ItemProps = {
  label: string;
  url: string;
  icon?: ReactNode;
};

export type { BottomNavProps, ItemProps };
