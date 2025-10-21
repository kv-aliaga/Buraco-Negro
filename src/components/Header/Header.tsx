import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export type HeaderProps = {
  links: [{ url: string; displayName: string }];
};

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header>
      <h1>Buracos Negros</h1>
      <nav>
        <ul>
          {links.map(({ url, displayName }) => (
            <li key={url}>
              <Link to={url}>{displayName}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
