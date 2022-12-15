import React, { useState } from "react";
import style from "./contact.module.scss";
import { db } from "./submitForm";

const Contact: React.FC = () => {
const [name, setName] = useState<string>("");
const [email, setEmail] = useState<string>("");
const [message, setMessage] = useState<string>("");

const [, setLoader] = useState<boolean>(false);

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoader(true);

  db(e,{ name: name,
    email: email,
    message: message,})
    
    .then(() => {
      setLoader(false);
      alert("Your message has been submitted👍");
    })
    .catch((error: { message: any; }) => {
      alert(error.message);
      setLoader(false);
    });

  setName("");
  setEmail("");
  setMessage("");
};

return (
  <form className={style.form} onSubmit={handleSubmit}>
    <div className={style.contact}>Contact Me 🤳</div>

    <label>Name</label>
    <input
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <label>Email</label>
    <input
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <label>Message</label>
    <textarea
      placeholder="Message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    ></textarea>

    <button type="submit"> Submit </button>
  </form>
);
};

export default Contact;