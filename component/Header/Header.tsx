import React from "react";
import style from "./Header.module.css";
import Link from "next/link";

type HeaderProps = {
  url: string;
  title: string;
  toWorld: string;
};

const Header: React.FC<HeaderProps> = ({ url, title, toWorld }) => {
  return (
    <header className={style.header}>
      <h1>
        <a className="text-2xl font-logo">{title}</a>
      </h1>
      <Link href={url} className={style.toCatWorld}>
        {toWorld}
      </Link>
    </header>
  );
};

export default Header;
