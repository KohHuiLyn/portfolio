import { CardContent, Typography, Card } from '@mui/material'
import React from 'react'

const ContactCard = (props) => {
  return (
    <Card className="contactCard" sx={{ maxWidth: 270,boxShadow:'5px 10px rgb(100, 126, 206)'}}>
      <a className="contactLink" target="_blank" rel="noopener noreferrer" href={props.link}>
      <CardContent>
        <Typography className="contactTop"  gutterBottom variant="h5" component="div">
          {props.icon}      
          <br/><u>{props.title}</u>
        </Typography>
        <Typography align='center' variant="body2" color="text.secondary">
      {props.desc}
        </Typography>
      </CardContent>
      </a>

    </Card>
  )
}

export default ContactCard