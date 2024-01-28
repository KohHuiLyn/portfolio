import { Button, Typography } from '@mui/material'
import React from 'react'
import { MdDirectionsCar } from 'react-icons/md'
import elena from "../images/hi.gif";
import noct from "../images/noct.gif";
import { RiRocketFill, RiMoneyDollarCircleLine} from 'react-icons/ri'
import { Fade } from 'react-reveal'
import NestedList from './projectsInfo/ProjectsInfoSmallList'
import {FaBowlingBall} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { BiChevronsDown } from 'react-icons/bi';
const ProjectsSmall = () => {
  return (
    <div>
    <div className='homeElement'>
        <Fade>
            <Typography sx={{padding: 2,margin: 'auto', width:{lg: 0.6, md: 0.9, sm: 1}}}>
            Throughout my time in Poly and my Internship, I've done a lot of projects involving skills such as:
            <NestedList/>
            <Fade delay={2500}>
            <Typography  sx={{marginTop: 1, marginBottom: 2}}>Check out my more interesting projects in my projects page like: <br/>
            <FaBowlingBall size={20}/> The Third Eye <br/>  <RiRocketFill size={20}/> LunarLanderV2 <br/> 
            <MdDirectionsCar size={20} /> CIFAR10 GAN <br/> 
            <RiMoneyDollarCircleLine size={20}/> ABC POS/Admin </Typography>
            
              <br/>Check out more about me below!
                <BiChevronsDown className="downArrow" size={50}/>


            </Fade>
            </Typography>

        </Fade>
    </div>
    <div className='homeElement'>
        <Fade>
            <Typography sx={{padding: 2,margin: 'auto', width:{lg: 0.6, md: 0.9, sm: 1}}}>
            During my free time, I love to do things like draw, play my guitar - <i>though I'm not very good at any of them. </i> I also love to play games like MapleStory, Overwatch, Minecraft, Pokemon, Yakuza... the list goes on...
            <br/> I love making dumb things like these too:<br/>
            <img style={{maxWidth:"35%", height: 'auto', padding: 0, marginTop: '10px'}} src={elena} alt="Me and elena" />
            <br/><i>Me at my friend's house while she naps</i><br/>            
            <img style={{maxWidth:"20%", height: 'auto', padding: 0, marginTop: '10px'}} src={noct} alt="noct!" />
            <br/><i>Noctis from FFXV eating Cup Noodles</i>
            </Typography>

        </Fade>
    </div>
</div>
  )
}

export default ProjectsSmall