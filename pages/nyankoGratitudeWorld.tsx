import React, { useState, useEffect } from "react";
import NyankoWorld from "../component/niyankoWorld/nyankoWorld";
import Header from "../component/Header/Header";
import styles from "./index.module.css";
import Image from "next/image";
import nekoGami from "../public/neko-god.png";

function NyankoTanksWorld() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // クライアントサイドでのみlocalStorageを使用する
    const storedCount = localStorage.getItem("count");
    if (storedCount !== null) {
      setCount(parseInt(storedCount));
    }
  }, []); // [] は初回のみ実行されることを示します

  let thanksWord: string;

  if (count === 0) {
    thanksWord = "かにゃ。ハートがなくて悲しいにゃ";
  } else if (count < 10) {
    thanksWord = "もハートをくれてありがとう。感謝にゃ";
  } else if (count < 20) {
    thanksWord = "もハートをくれてありがとうにゃ。感激で震えるにゃ";
  } else if (count < 30) {
    thanksWord = "もハートをくれるなんて、嬉しくて涙が止まらないにゃ";
  } else if (count < 50) {
    thanksWord = "なんて正気にゃ？びっくりにゃ";
  } else if (count < 90) {
    thanksWord = "なんて、もうすぐ100じゃないかにゃ。100個の肉球を与えるにゃ";
  } else if (count < 500) {
    thanksWord = "なんて考えられないにゃ。僕を飼ってくださいにゃ";
  } else {
    thanksWord =
      "とは、、、神様にゃ。約束します今夜あなたの家に恩返ししに行きます。";
  }

  return (
    <div className={styles.nyankoGratitudeWorld}>
      <NyankoWorld />
      <div>
        <Header
          url="/"
          title="にゃんこ感謝ワールド"
          toWorld="にゃんこワールドへ戻る"
        />
        <Image src={nekoGami} className={styles.nekogami} alt="猫神" />
      </div>
      <p className={styles.nekoGamiText}>
        {count}
        {thanksWord}
      </p>
    </div>
  );
}

export default NyankoTanksWorld;
