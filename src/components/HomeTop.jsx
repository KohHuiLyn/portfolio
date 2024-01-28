import { Typography } from '@mui/material'
import React from 'react'
import { BiChevronsDown } from 'react-icons/bi'
import portrait from "../images/huilyn.jpg";
import { Fade } from 'react-reveal'

const HomeTop = () => {
  return (
        <div className='homeElement'>
        <Fade delay={500}>
            <img src={portrait} className="portrait" alt="hi" />
            <h1>Hello! I'm Hui Lyn!</h1>
            </Fade>
            <Fade delay={1500}>
            <Typography sx={{marginBottom: 3}}>I'm currently a Freshman pursuing Computer Science at Singapore Management University. <br/> I graduated from Singapore Polytechnic with a Diploma in Applied AI and Analytics, and attained a cGPA of 3.8!</Typography>
            </Fade>
            <Fade delay={2500}>
            <Typography  sx={{marginBottom: 1}}>Scroll for more information</Typography>
                <div className="downArrowDiv">
                <BiChevronsDown className="downArrow" size={50}/>

                </div>
            </Fade>
        </div>
  )
}

export default HomeTop