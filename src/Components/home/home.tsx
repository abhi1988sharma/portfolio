import React from "react";
import styles from "./home.module.scss"



const Home: React.FC=() => {
  return (
    <div className={styles.container}>
    <h1>Header</h1>
    <p>My supercool component</p>
  </div>
  )
}

export default Home;