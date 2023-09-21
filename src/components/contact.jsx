import React from 'react'
import style from '../styles/contact.module.css'
import ContactImage from '../assets/contact-us-image-removebg.png'
import { Button } from '@mui/material'

const Contact = () => {
  return (
    <>
    <div className={style.parentDiv}>
        <div className={style.imageSection}>
<img src={ContactImage} alt='Con' />
            
        </div>
        <div className={style.textSection}>

            <h3>GET IN TOUCH</h3>
            <form >
            <div className={style.names}>

                <input />
                <input />
            </div>
            

            <div className={style.address}>

                <input  placeholder='Phone Number'/>
                <input />
            </div>
            <div className={style.textDiv}>
                <input type='text'  className={style.textSpace}></input >
            </div>

            <button className={style.send}>SEND</button>
            {/* <Button /> */}
            </form>
        </div>

    </div>
    
    </>
  )
}

export default Contact