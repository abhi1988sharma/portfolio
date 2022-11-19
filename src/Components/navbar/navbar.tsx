import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss"



type Navbarprops = {

}

const Navbar: React.FC<Navbarprops> = () => {
  const [isPhone, setIsPhone] = useState(false);
  return (
    <nav className={styles.container}>
      <a className={styles.logo} href= "https://abhi1988sharma.github.io/portfolio/#/">AS</a>
      <ul className={isPhone? styles.navlinksphone: styles.navlinks}
      onClick ={()=> setIsPhone (false)}>
      <Link className = {styles.home} to="/"><li>Home</li></Link> 
      <Link className = {styles.projects} to="projects"><li>Projects</li></Link>
      <Link className = {styles.cv} to="cv"><li>CV</li></Link> 
      <Link className = {styles.contact} to="contact"><li>Contact Me</li></Link>
      </ul>
      <button className={styles.phoneMenuIcon}
      onClick = {()=> setIsPhone(!isPhone)}>
        {isPhone ? (<i className="fas fa-times"></i>): (<i className="fas fa-bars"></i>)}
      </button>
  </nav>
  )
}

export default Navbar;