import React from "react";
import styles from "./contact.module.scss"

type ContactProps = {

}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className={styles.container}>
    <h1>Contact</h1>
    <p>My supercool component</p>
  </div>
  )
}

export default Contact;