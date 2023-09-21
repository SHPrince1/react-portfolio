import React from 'react'
import style from '../styles/contact.module.css'
import ContactImage from '../assets/contact-us-image-removebg.png'
import { Button } from '@mui/material'

const Contact = () => {
  return (
    <>
    <div className={style.parentDiv}>
        <div className={style.imageSection}>
<img src={ContactImage} alt='Con' className={style.imagCus} />
            
        </div>
        <div className={style.textSection}>

            <h1>GET IN TOUCH</h1>
            <form >
            <div className={style.names}>

                <input placeholder='First Name' />
                <input placeholder='Last Name' />
            </div>
            

            <div className={style.address}>

                <input  placeholder='Phone Number'/>
                <input placeholder='Email Address'/>
            </div>
            <div className={style.textDiv}>
                <textarea type='text' placeholder='Type your message' className={style.textSpace} />
            </div>

            <button className={style.send} type='submit'>SEND</button>
            
            {/* <Button /> */}
            </form>
        </div>

    </div>
    
    </>
  )
}

export default Contact