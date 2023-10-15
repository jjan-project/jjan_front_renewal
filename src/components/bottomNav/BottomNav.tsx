import { ReactNode } from "react";
import { Link } from "react-router-dom";

import type { BottomNavProps, ItemProps } from "./types";

import "./BottomNav.css";

const Item = ({ label, url, icon }: ItemProps) => {
  const isClicked = window.location.pathname === url;
  return (
    <li>
      <Link to={url} style={{ color: isClicked ? "#5B1FD9" : "black" }}>
        <div className={`${isClicked && "bottom-icon--active"}`}>{icon}</div>
        <span>{label}</span>
      </Link>
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
