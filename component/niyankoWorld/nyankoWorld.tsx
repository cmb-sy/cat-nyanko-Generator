import React from "react";
import styles from "./nyankoWorld.module.css";

const NyankoWorld = () => {
  // li要素を生成する関数
  const numberPad: number = 100;
  const generatePad = (): number[] => {
    const storePads = [];
    for (let i: number = 0; i < numberPad; i++) {
      storePads.push(<li key={i}></li>);
    }
    return storePads;
  };
  return <ul className={styles.circles}>{generatePad()}</ul>;
};

export default NyankoWorld;
