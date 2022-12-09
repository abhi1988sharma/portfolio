import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC=() =>{return(
    <div className={styles.container}>
    <a className={styles.footerLinks} href="https://www.linkedin.com/"><img className={styles.mediaLogo} src="images/linkedin.png" alt= "linkedin"></img></a>
    <a className={styles.footerLinks} href="https://github.com/abhi1988sharma"><img className={styles.mediaLogo} src="images/github.png" alt= "github"></img></a>
    <a className={styles.footerLinks} href="https://twitter.com/"><img className={styles.mediaLogo} src="images/twitter.png" alt= "twitter"></img></a>
    <a className={styles.footerLinks} href="https://abhi1988sharma.github.io/portfolio"><img className={styles.mediaLogo} src="images/web-link.png" alt= "Webpage"></img></a>
    <p className={styles.created}>© Abhishek Sharma</p>
  </div>
);}

export default Footer;