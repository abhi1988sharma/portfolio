import React from "react";
import styles from "./navbar.module.scss"


type Navbarprops = {

}

const Navbar: React.FC<Navbarprops> = () => {
  return (
    <div className={styles.container}>
   <Link to="/">Home</Link> <Link to="first">My First Component</Link>
   <Link to="/">Home</Link> <Link to="first">My First Component</Link>
   <Link to="/">Home</Link> <Link to="first">My First Component</Link>
  </div>
  )
}

export default Navbar;