import { Typography } from '@mui/material'
import React from 'react'
import { BiChevronsDown } from 'react-icons/bi'
import portrait from "../images/test.gif";
import { Fade } from 'react-reveal'

const HomeTop = () => {
  return (
        <div className='homeElement'>
        <Fade delay={500}>
            <img src={portrait} className="portrait" alt="hi" />
            <h1>Hello! I'm Hui Lyn!</h1>
            </Fade>
            <Fade delay={1500}>
            <Typography sx={{marginBottom: 3}}>I'm a Third Year Student at Singapore Polytechnic currently <br/>pursuing a Diploma in Applied AI and Analytics!</Typography>
            </Fade>
            <Fade delay={2500}>
            <Typography  sx={{marginBottom: 1}}>Check out some of my<br/> projects below!</Typography>
                <div className="downArrowDiv">
                <BiChevronsDown className="downArrow" size={50}/>

                </div>
            </Fade>
        </div>
  )
}

export default HomeTop