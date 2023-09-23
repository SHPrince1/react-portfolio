import React from "react";
import style from "../styles/contact.module.css";
import ContactImage from "../assets/contact-us-image-removebg.png";
import { Button } from "@mui/material";
import NewsLetter from "./news-letter";

const Contact = () => {
  return (
    <>
      <div className={style.parentDiv}>
        <div className={style.imageSection}>
          <img src={ContactImage} alt="Con" className={style.imagCus} />
        </div>
        <div className={style.textSection}>
          <h1>GET IN TOUCH</h1>
          <form>
            <div className={style.names}>
              <input placeholder="First Name" type="text" />
              <input placeholder="Last Name" type="text" />
            </div>

            <div className={style.address}>
              <input placeholder="Phone Number" type="num" />
              <input placeholder="Email Address" type="email" />
            </div>
            <div className={style.textDiv}>
              <textarea
                type="text"
                placeholder="Type your message"
                className={style.textSpace}
              />
            </div>

            <button className={style.send} type="submit">
              SEND
            </button>

            {/* <Button /> */}
          </form>
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
    </>
  );
};

export default Contact;
