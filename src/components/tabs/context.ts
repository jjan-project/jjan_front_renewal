/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

import type { Appearance } from "./types";

const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;

  tabCount: number;
  setTabCount: React.Dispatch<React.SetStateAction<number>>;

  appearanceTab: Appearance;
  setAppearanceTab: React.Dispatch<React.SetStateAction<Appearance>>;
}>({
  activeTab: "",
  setActiveTab: () => {},

  tabCount: 0,
  setTabCount: () => {},

  appearanceTab: "primary",
  setAppearanceTab: () => {},
});

export { TabsContext };
