import React, { useState } from "react";
import styles from "./home.module.scss";
import Typewriter from "typewriter-effect";



const Home: React.FC=() => {
  const[state]=useState({
    title: "Hello world!",
    titleTwo: "My name is",
    titleThree: "Abhishek Sharma",
    image:"images/main.gif"
});
return(
  <div className={styles.home}>
    <div className={styles.homeIntro}>
      <h2>
        <div className={styles.title}>{state.title}</div>
        <div className={styles.titleTwo}>{state.titleTwo}</div>
        <div className={styles.titleThree}>{state.titleThree}</div>
      </h2>
      <div className={styles.text}>
        <Typewriter
        options = {{
          autoStart: true,
          loop: true,
          delay: 40,
          strings:[
            "Aspiring Developer.",
            "Software enthusiast.",
            "Experienced proffesional."
          ], 

        }} />

      </div>
      <div className={styles.contactMe}>
        <button className={styles.button} ref="https://abhi1988sharma.github.io/portfolio/#/contact">Contact Me</button>
      </div>
      <div className={styles.homeImage}>
        

      </div>
    </div>
    <div className={styles.homeImage}>
    <img className={styles.mainImage} src={state.image} alt="home pic" />  
    </div>
  </div>
)
}

export default Home;