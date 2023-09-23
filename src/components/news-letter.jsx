import React from "react";
import style from '../styles/newsletter.module.css';

const NewsLetter = () => {
  return (
    <>
      <div className={style.parentDiv}>
        <div className={style.text}>
          <h5>Subscribe to our NewsLetter and never miss latest updates</h5>
        </div>

        <div className={style.inputDiv}>
            <input type="email" placeholder="Enter Address"  /> <button>Submit</button>

           
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
