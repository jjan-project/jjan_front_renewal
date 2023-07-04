import { ReactNode } from "react";

import type { BottomNavProps, ItemProps } from "./types";

import "./BottomNav.css";

const Item = ({ label, url, icon }: ItemProps) => {
  const isClicked = window.location.pathname === url;

  return (
    <li>
      <a
        href={url}
        style={{
          color: isClicked ? "#5B1FD9" : "black",
        }}
      >
        <div className={`${isClicked && "bottom-icon--active"}`}>{icon}</div>
        <span>{label}</span>
      </a>
    </li>
  );
};

const BottomNavBase = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="bottom-nav">
      <ul>{children}</ul>
    </nav>
  );
};

const BottomNav = ({ items }: BottomNavProps) => {
  return (
    <BottomNavBase>
      {items.map((item, index) => (
        <Item key={index} label={item.label} url={item.url} icon={item.icon} />
      ))}
    </BottomNavBase>
  );
};

export { BottomNav };
