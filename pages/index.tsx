import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import styles from "./index.module.css";
import Header from "../component/Header/Header";
import LikeButton from "../component/Button/button";
import "bootstrap/dist/css/bootstrap.min.css";
// getServerSidePropsから渡されるpropsの型
type Props = {
  initialImageUrl: string;
};

type Image = {
  url: string;
};

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl); // 初期値を渡す
  const [loading, setLoading] = useState(false); // 初期状態はfalseにしておく

  // ボタンをクリックしたときに画像を読み込む処理
  const handleClick = async () => {
    setLoading(true); // 読込中フラグを立てる
    const newImage = await fetchImage();
    setImageUrl(newImage.url); // 画像URLの状態を更新する
    setLoading(false); // 読込中フラグを倒す
  };

  return (
    // ローディング中でなければ、画像を表示する

    <div className={styles.page}>
      <Header
        url="/nyankoGratitudeWorld"
        title="にゃんこワールド🐈"
        toWorld="🐱 にゃんこ感謝ワールドへ移動する 🐱"
      />
      <button onClick={handleClick} className={styles.button}>
        にゃんこを見る
      </button>
      <div className={styles.frame}>
        {loading || <img src={imageUrl} className={styles.img} />}
      </div>
      <LikeButton />
    </div>
  );
};

export default IndexPage;

// サーバーサイドで実行する処理
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const image = await fetchImage();
  return {
    props: {
      initialImageUrl: image.url,
    },
  };
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images: unknown = await res.json();
  // 配列として表現されているか？
  if (!Array.isArray(images)) {
    throw new Error("猫の画像が取得できませんでした");
  }
  const image: unknown = images[0];
  // Imageの構造をなしているか？
  if (!isImage(image)) {
    throw new Error("猫の画像が取得できませんでした");
  }
  return image;
};

// 型ガード関数
const isImage = (value: unknown): value is Image => {
  // 値がオブジェクトなのか？
  if (!value || typeof value !== "object") {
    return false;
  }
  // urlプロパティが存在し、かつ、それが文字列なのか？
  return "url" in value && typeof value.url === "string";
};
