import React, { useState, useContext, ReactNode, useEffect } from "react";

import { TabsContext } from "./context";
import * as S from "./Tabs.styles";
import type { TabsProps, TabProps, TabPannelProps, Appearance } from "./types";

const TabsBase = ({
  defaultName,
  children,
  appearance = "primary",
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultName);
  const [tabCount, setTabCount] = useState<number>(0);
  const [appearanceTab, setAppearanceTab] = useState<Appearance>(appearance);

  useEffect(() => {
    setTabCount(React.Children.count(children));

    if (appearance) setAppearanceTab(appearance);
  }, [children, appearance]);

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
        tabCount,
        setTabCount,
        appearanceTab,
        setAppearanceTab,
      }}
    >
      <S.TabsBase>{children}</S.TabsBase>
    </TabsContext.Provider>
  );
};

const List = ({ children }: { children: ReactNode }) => {
  return <S.TabList>{children}</S.TabList>;
};

const Tab = ({ name, leftIcon, rightIcon, children, isDisable }: TabProps) => {
  const { activeTab, setActiveTab, tabCount, appearanceTab } =
    useContext(TabsContext);
  const isActive = name === activeTab;

  const tabItemWidth = 100 / (tabCount - 1);

  return (
    <S.Tab
      appearance={appearanceTab}
      isActive={isActive}
      onClick={() => setActiveTab(name)}
      disabled={isDisable}
      width={tabItemWidth}
    >
      {leftIcon} {children} {rightIcon}
    </S.Tab>
  );
};

const Panel = ({ name, children }: TabPannelProps) => {
  const { activeTab } = useContext(TabsContext);
  const isVisible = name === activeTab;

  return isVisible ? <S.Pannel>{children}</S.Pannel> : null;
};

export const Tabs = Object.assign(TabsBase, { Panel, Tab, List });
