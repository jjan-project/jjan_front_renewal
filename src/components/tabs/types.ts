import { ReactNode } from "react";

type TabsProps = {
  defaultName: string;
  children: ReactNode;
  appearance?: Appearance;
};

type TabProps = {
  name: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  isDisable?: boolean;
};

type TabInterface = {
  isActive?: boolean;
  isDisable?: boolean;
  appearance: Appearance;
  width: number;
};

type TabPannelProps = {
  name: string;
  children: ReactNode;
};

type Appearance = "primary" | "secondary";

export type { TabsProps, TabProps, TabPannelProps, TabInterface, Appearance };
