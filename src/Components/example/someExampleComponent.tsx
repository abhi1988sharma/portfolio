import React from "react";
import styles from "./someExampleComponent.module.scss"

type MyFirstComponentProps = {

}

const SomeExampleComponent: React.FC<MyFirstComponentProps> = () => {
  return (
    <div className={styles.container}>
    <h1>Header</h1>
    <p>My supercool component</p>
  </div>
  )
}

export default SomeExampleComponent;