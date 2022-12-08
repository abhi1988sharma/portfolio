import React from "react";
import style from "./cv.module.scss";


import InfoCard from "./InfoCard";
import experience from "./experience";
import CVComponent from "./CVComponent";
import education from "./education";
import SkillsList from "./SkillsList";

const info = {
  imgSrc: "./images/Abhishek Sharma.png",
  name: "Abhishek Sharma",
  profession: "Aspiring web developer",
  address: "Helsinki",
  phone: +358405040664,
  email: "abhi1988.sharma@gmail.com",
  about:
    "My current focus is to become a Web Developerexpert.I have skill of creating react App using typscript, javascript Scss modules and 3D game designing & making a game using Unity Game Engine and C# scripting language I have great understanding of computer fundamentals and Cisco networking."
};

const Cv: React.FC = () => {
  
  const educationComponent = education.map(item => <CVComponent item={item} />);

  const experienceComponent = experience.map(item => (
    <CVComponent item={item} />
  ));

  return (
    <div>
      <main>
        <section className={style.detailContainer}>
          <section className={style.info}>
            <InfoCard info={info} />
            <h2>
              <i className="fa fa-cogs" /> Skills
            </h2>
            <SkillsList />
           
          </section>

          <section className={style.education}>
            <h1>
              {" "}
              <i className="fa fa-university" /> Education{" "}
            </h1>
            {educationComponent}
          </section>
          <hr />
          <section className={style.work}>
            <h1>
              <i className="fa fa-briefcase fa" /> Work Experience{" "}
            </h1>
            {experienceComponent}
          </section>
          
          <section className={style.other}>
            <h1>
              {" "}
              <i className="fa fa-desktop" /> Other Interests{" "}
            </h1>
            <h3> Ayurveda</h3>
            <ul>
              <li>
                <i className="fa fa-book" /> Meditation
              </li>
              <li>
                <i className="fa fa-book" /> Yoga
              </li>
            </ul>
            <h3>Sustainability</h3>
            <ul>
              <li>Reducing waste</li>
              <li>Build a sustainable wardrobe</li>
            </ul>
          </section>
        </section>
      </main>
     
    </div>
  );
}
export default Cv;