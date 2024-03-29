import styles from "./button.module.css";
import { useState, useEffect } from "react";

// いいねボタン
function LikeButton() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // countの値が変更されたときにlocalStorageに保存する
    localStorage.setItem("count", count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <span className={styles.likeButton} onClick={handleClick}>
        にゃんこにハートを授ける：❤️ {count} ❤️
      </span>
    </div>
  );
}

export default LikeButton;
