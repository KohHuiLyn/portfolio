import React, { useRef, useState } from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { IoIosPaper } from "react-icons/io"
import {BiPhoneCall, BiMailSend} from "react-icons/bi";
import { Fade, Rotate } from "react-reveal";
import ContactCard from '../components/ContactCard'
import pdf from '../images/Koh_Hui_Lyn_Resume.pdf'
import { Button, Card, CardContent, Divider, TextField, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [disabled, setDisabled] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    setDisabled(true)
    setSuccess(false)
    setError(false)
    console.log("MSG SENDING...")

    emailjs.sendForm(process.env.REACT_APP_EMAILSVC_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          console.log("MSG SENT SUCCESFULLY")
          setDisabled(false)
          setSuccess(true)
          e.target.reset()
      }, (error) => {
        setDisabled(false)
          console.log(error.text);
          setError(true)
      });
  }
  return (
    <>
    <div className='contactDiv'>
    <Fade duration={1000}>
      <Divider>
      <h1><Rotate><BiPhoneCall size={50}/></Rotate>Let's get in touch!</h1>
      </Divider>
    </Fade>
    <Fade delay={1000}>
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

      {/* Resume */}
      <ContactCard 
      icon={<IoIosPaper size={50}/>}
      title={"Resume"}
      link={pdf}
      desc="View a PDF of my Resume to see more info!"/>
    </div>
    </Fade>
  
    {/* Email div */}
    <Fade bottom delay={1500}>
    <Divider className='emailDiv' style={disabled?{pointerEvents:"none", marginTop:10}:{marginTop:10,}}>
      <Card sx={{paddingLeft: 10, paddingRight: 10, whiteSpace: 'normal', width: {lg: '70vw', xl: '50vw', md: '80vw', sm:'100vw'}}}>
        <CardContent style={disabled?{opacity:"0.4",}:{}} sx={{width: '100%', margin:0}}>
          <AiOutlineMail size={70}/><br/>Want to drop me an email? You can send me a message through here!
            <Typography sx={{color: 'text.secondary'}}>Or email me directly at <a href="mailto:kohhuilyn.dev@gmail.com">kohhuilyn.dev@gmail.com</a>! </Typography>
            <br/>
            <form ref={form} onSubmit={sendEmail}>
              <TextField sx={{width:'100%'}} label="Your Name" name='user_name' variant="outlined" />
              <br/>
              <TextField sx={{marginTop: 1, width:'100%'}} label="Your Email" name='user_email' variant="outlined" />
              <br/>
              <TextField multiline rows={5} sx={{marginTop: 1, width:'100%'}} label="Your Message" name='message' variant="outlined" />
              <br/>
              <Button className='emailBtn' type='submit' style={{backgroundColor: "black", color: "white"}} sx={{width:'100%', marginTop:1}}>Send<BiMailSend size={30} id='emailIcon' style={{marginLeft:3}}/></Button>
            </form>
            <Typography style={success?{marginTop:1}:{display: "none"}}>Your message was sent successfully!</Typography>
            <Typography style={error?{marginTop:1}:{display: "none"}}>There was an error sending your message!<br/> You can email me directly at <a href="mailto:kohhuilyn.dev@gmail.com">kohhuilyn.dev@gmail.com</a> instead! </Typography>

          </CardContent>
      </Card>
    </Divider>
    </Fade>
    </div>
    
    
    </>
  )
}

export default Contact