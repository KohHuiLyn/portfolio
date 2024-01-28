import React from "react";
import { Typography } from '@mui/material'
import { RiRocketFill, RiMoneyDollarCircleLine} from 'react-icons/ri'
import {FaBowlingBall} from 'react-icons/fa'
import thirdEye2 from "../images/thirdeye2.gif";
import thirdEyeba from "../images/thirdeyeba.gif";
import lunarlander from "../images/lunarlander.gif";
import cifar10 from "../images/cifar10.gif";
import cifar10_modecollapse from "../images/cifar10_modecollapse.png";
import admin from "../images/admin.png"
import pos from "../images/pos.png"
import { MdDirectionsCar } from 'react-icons/md'
const Projects = () => {
  return (
<>
<div style={{padding:1, margin: 'auto', borderBottom: 1, borderColor:"white"}}>
  <h3 style={{paddingTop: "1%", margin: 'auto', textAlign: "center"}}><FaBowlingBall size={25}/> The Third Eye</h3>
  <Typography sx={{paddingTop: 1, width:{lg: 0.6, md: 0.7, sm: 0.8}, margin: 'auto', textAlign:"center"}}>
  The Third Eye is a project that aimed to use Pose Estimation (Computer Vision) to aid coaches' analysis of a bowlers performance by producing consistent and accurate intelligent analysis.
  <br/>
  <img style={{maxWidth:"90%", height: 'auto', padding: 0, marginTop: '10px'}} src={thirdEye2} alt="Ball Release Model of Third Eye" />
  <img style={{maxWidth:"90%", height: 'auto', padding: 0, marginTop: '10px'}} src={thirdEyeba} alt="Back Angle Model of Third Eye" />
  <br/>
  <br/> It is a webapp where coaches can upload the training videos of their students to be analysed by a Pose Estimation Model. This model can analyse various things, such as:
  <br/> - Steps taken (bowlers full strut usually take 4-5 steps)
  <br/> - Back Angle of the bowler throughout the entire video
  <br/> - Ball Release Timing, whether the ball was thrown too early, late or other labels
  <br/>  

  <br/>  
  This aimed to help out coaches as watching many training videos can become extremely time consuming and tedious, and can take up to many hours. 
  <br/><br/>  At the end of the 6 months duration of the project, we managed to successfully make this model and all the calculations from scratch, and create a useful model that the client is still using to this day.
  <br/><br/>I had a lot of fun doing this project as it had an extremely unique premise which required a lot of unique ways to solve issues. I also grew closer with my team members as we went out to collect training videos quite a number of times as we required lots of data, and also bonded over
  helping one another after encountering many hiccups along the way.
  </Typography>
</div>
<br/>
<div style={{padding:1, margin: 'auto'}}>
  <h3 style={{paddingTop: "2%", margin: 'auto', textAlign: "center"}}><RiRocketFill size={25}/> LunarLanderV2</h3>
  <Typography sx={{paddingTop: 1, width:{lg: 0.6, md: 0.7, sm: 0.8}, margin: 'auto', textAlign:"center"}}>
  <img style={{maxWidth:"90%", height: 'auto', padding: 0, marginTop: '10px'}} src={lunarlander} alt="Lunar Lander" />
  <br/>
  I trained a Deep Q-Network(DQN) agent to play the LunarLanderV2 game from OpenAI gym. 
  <br/><br/>The goal of this game was to land the spaceship between the 2 flag poles safely without crashing. If the lander crashes or moves away from the landing pad, points are deducted. After coming to rest, both legs must have ground contact. Readjusting this will take away points as well. 
  <br/><br/>As Reinforcement Learning was not taught during class curriculum, I had a lot of fun experimenting and self-learning as I think that this area of AI is very interesting. It was fun to adjust parameters just to see the outcome and how it affected the DQN Agent's movement.
  <br/> <br/>
  After experimenting many model parameters like adjusting its epsilon value or its number of episodes, I finally managed to create a model that successfully landed the ship safely between the two flagpoles.
  </Typography>
</div>
<div style={{padding:1, margin: 'auto', textAlign:'center'}}>
  <h3 style={{paddingTop: "2%", margin: 'auto', textAlign: "center"}}><MdDirectionsCar size={25}/> CIFAR10 GAN</h3>
  <img style={{maxWidth:"90%", height: 'auto', padding: 0, marginTop: '20px', backgroundColor:"white"  }} src={cifar10} alt="Cifar10 Cars" />
  <Typography sx={{paddingTop: 1, width:{lg: 0.6, md: 0.7, sm: 0.8}, margin: 'auto', textAlign:"center"}}>
  I created a CIFAR10 GAN for a Poly project, where I trained a model to generate pictures of cars. It was quite complicated to understand at first as I was very new to it.
  <br/> I ran into a lot of problems like Mode Collapse, where the generator can only produce the same photos, and it was always very hard to experiment as it took many hours to train the models.
  <br/>
  <img style={{maxWidth:"90%", height: 'auto', padding: 0, marginTop: '10px', backgroundColor:"white"  }} src={cifar10_modecollapse} alt="Cifar10 Cars" />
  <br/><i>Mode collapse</i>
  <br/><br/>
  After hours and hours of model tweaking, it was able to produce passable pictures, I felt a huge sense of satisfaction! This area of AI is definitely an interesting one as there is great potential for it. In the future I aim to try out GANs with other forms of media like mp3 formats (audio).
  </Typography>
</div>
<div style={{padding:1, margin: 'auto'}}>
  <h3 style={{paddingTop: "1%", margin: 'auto', textAlign: "center"}}><RiMoneyDollarCircleLine size={25}/> ABC POS/Admin</h3>
  <Typography sx={{paddingTop: 1, width:{lg: 0.6, md: 0.7, sm: 0.8}, margin: 'auto', textAlign:"center"}}>
  During my time working in ABC Cooking Studio, I also made a Cashier Point of Service (POS) system, Admin Dashboard system and the backend system for these two websites.
  <img style={{maxWidth:"90%", height: 'auto', padding: 0, marginTop: '20px', backgroundColor:"white"  }} src={pos} alt="ABC POS" /><br/><i>ABC POS</i><br/>
  <img style={{maxWidth:"90%", height: 'auto', padding: 0, marginTop: '10px', backgroundColor:"white"  }} src={admin} alt="ABC POS" /> <br/> <i>Admin System</i>
  <br/>I mainly worked in NextJS (React) and MySQL using TypeORM. This internship not only helped me learn hard skills, but soft skills as well.
  <br/>From my experience working there, I learnt how to better communicate with people, work on a project timeframe, and the skill of picking up things on the fly.
  <br/>Often times, I would also have to communicate very techinical things to non-techinical colleagues like those in the Marketing/Design department. I learnt how to condense the complicated things I wanted to say into more lay man terms, so that everyone was able to understand.
  </Typography>
</div>
    </>
  );
};

export default Projects;
