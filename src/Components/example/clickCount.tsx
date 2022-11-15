import React, { useState } from 'react';
import styles from "./clickCount.module.scss";

function ClickCount() {

  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ClickCount;