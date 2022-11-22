import React from "react";
import style from "./contact.module.scss";

const Contact: React.FC = () => {

  return (
    <form className={style.form}>
      <h1>Contact Me 🤳</h1>

      <label>Name</label>
      <input placeholder="Name"/>

      <label>Email</label>
      <input
        placeholder="Email"/>

      <label>Message</label>
      <textarea placeholder="Message"></textarea>

      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;