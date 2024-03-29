import styles from "./button.module.css";
import { useState } from "react";

// いいねボタン
function LikeButton() {
  const [count, setCount] = useState(0);
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
