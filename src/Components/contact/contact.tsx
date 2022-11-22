import React, { useState } from "react";
import style from "./contact.module.scss";
import { handleSubmit } from "./submitForm";

const Contact: React.FC = () => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');


    const send = (e: React.FormEvent<HTMLFormElement>) => {
      handleSubmit(e, {
        name: name,
        email: email,
        message: message,
      })
      .then(x => alert(x ? 'OK' : 'fail'))
    }

  return (
    <form className={style.form} onSubmit={(e) => send(e)}>
      <h1>Contact Me 🤳</h1>

      <label>Name</label>
      <input placeholder="Name"
        onChange={e => setName(e.target.value)}
        value={name}/>

      <label>Email</label>
      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        value={email}/>

      <label>Message</label>
      <textarea
        placeholder="Message"
        onChange={e => setMessage(e.target.value)}
        value={message}/>

      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;