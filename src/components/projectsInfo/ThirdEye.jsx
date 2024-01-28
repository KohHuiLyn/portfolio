
import Slider from 'infinite-react-carousel';
import thirdEye2 from "../../images/thirdeye2.gif";
import baFlowchart from "../../images/baFlowchart.png";

import { Typography } from '@mui/material'
import React from 'react'
const ThirdEye = () => {
  return (
    <Slider adaptiveHeight={true}  dots>
    <div>
      <Typography>The Third Eye is a project that aims to use Computer Vision to aid coaches' analysis of a bowlers performance by producing consistent and accurate intelligent analysis.
      <br/><br/>
      <img style={{maxWidth:"100%", height: 'auto', padding: 0, margin: 0}} src={thirdEye2} alt="Ball Release Model of Third Eye" />
    <br/>
    <i>Third Eye calculating the Ball Release</i>
    <br/> After coaches capture training videos of their students, they can upload it to the site. 
    <br/><br/>The Pose Estimation Model will analyse the video, and calculate:
      <br/> - The student's Back Angle throughout the video 
      <br/> - The number of steps they took
      <br/> - Their Ball Release Type (The timing of their throw)
      </Typography>
    </div>
    <div>
      <Typography>
      <img style={{height:'50vh', width: 'auto', padding: 0, margin: 0}} src={baFlowchart} alt="Back Angle" />
      A lot of planning went into 
      </Typography>
    </div>
    <div>
      <Typography>
        
      </Typography>
    </div>
    <div>
    <Typography>
        
        </Typography>
    </div>
    <div>
    <Typography>
        
        </Typography>
    </div>
  </Slider>

  )
}

export default ThirdEye