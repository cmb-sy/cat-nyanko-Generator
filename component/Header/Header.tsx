import React from "react";
import style from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={style.header}>
      <h1>
        <a className="text-2xl font-logo">にゃんこワールド🐈</a>
      </h1>
      <Link href={"/nyankoGratitudeWorld"} className={style.toCatWorld}>
        🐱 にゃんこ感謝ワールドへ移動する 🐱
      </Link>
    </header>
  );
};

export default Header;
