import React from "react";
import { Link } from "react-router-dom";

export type HeaderProps = {
  links: [{ url: string; displayName: string }];
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const links: React.ReactElement[] = [];

  for (const { url, displayName } of props.links) {
    const link = <Link to={url}>{displayName}</Link>;
    links.push(link);
  }

  return (
    <header>
      <h1>Buracos Negros</h1>
      <ul>
        {links.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
