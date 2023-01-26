import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { IoIosPaper } from "react-icons/io"
import {BiPhoneCall} from "react-icons/bi";
import { Fade } from "react-reveal";
import ContactCard from '../components/ContactCard'
import pdf from '../images/Koh_Hui_Lyn_Resume.pdf'
import { Divider } from '@mui/material';
const Contact = () => {
  return (
    <>
    <div className='contactDiv'>
    <Fade>
      <Divider>
      <h1><BiPhoneCall className='phoneIcon'/>Let's get in touch!</h1>
        
      </Divider>
    <div className='cards'>
      {/* Github */}
      <ContactCard 
      icon={<AiFillGithub size={50}/>}
      title={"Github"}
      link={"https://github.com/KohHuiLyn"}
      desc="Check out my Github to see some of my projects!"/>

      {/* LinkedIn */}
      <ContactCard 
      icon={<AiFillLinkedin size={50}/>}
      title={"LinkedIn"}
      link={"https://www.linkedin.com/in/hui-lyn-koh-04865a239/"}
      desc="Check out my LinkedIn for more info about me!"/>

      {/* Git hub */}
      <ContactCard 
      icon={<IoIosPaper size={50}/>}
      title={"Resume"}
      link={pdf}
      desc="Click here for a PDF of my Resume which contains more information about me! "/>
    </div>
    </Fade>
    </div>
    
    
    </>
  )
}

export default Contact