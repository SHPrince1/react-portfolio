import React from 'react'
import Style from "../styles/myskills.module.css"
import styled from 'styled-components'

const MySkills = ({bgcolor,progress,height,text}) => {

    const Parentdiv = { 
        height: height, 
        width: '250%', 
        backgroundColor: 'whitesmoke', 
        borderRadius: 40, 
        margin: "20px auto", 

        
        
      } 
      
      const Childdiv = { 
        height: '100%', 
        width: `${progress}%`, 
        text:`${text}%`,
        
        backgroundColor: bgcolor, 
       borderRadius:40, 
        textAlign: 'right'
      } 
      
      const progresstext = { 
        padding: 5, 
        color: '#fff', 
        fontWeight: 900 
      } 
  return (
    <>



        
     
    <div style={Parentdiv}> 
      <div style={Childdiv}> 
        <span style={progresstext}> {text}  {`${progress}%`} </span> 
      </div> 
    </div> 
    

    </>
  )
}

export default MySkills




