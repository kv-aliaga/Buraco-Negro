import React from "react";
import { Link } from "react-router-dom";

export type HeaderProps = {
  links: [{ url: string; displayName: string }];
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const links: React.ReactElement[] = props.links.map((l) => (
    <Link to={l.url}>{l.displayName}</Link>
  ));

  return (
    <header>
      <h1>Buracos Negros</h1>
      <nav>
        <ul>
          {links.map((l) => (
            <li>{l}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
