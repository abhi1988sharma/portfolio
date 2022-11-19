import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC=() =>{return(
    <div className={styles.container}>
    <a className={styles.footerLinks} href="https://www.linkedin.com/">LinkedIn</a>
    <a className={styles.footerLinks} href="https://twitter.com/">Twitter</a>
    <a className={styles.footerLinks} href="https://abhi1988sharma.github.io/portfolio">Website</a>
    <p>© Abhishek Sharma.</p>
  </div>
);}

export default Footer;