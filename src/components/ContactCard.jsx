import { CardActions, CardContent, Typography, Button, Card } from '@mui/material'
import React from 'react'

const ContactCard = (props) => {
  return (
    <Card className="contactCard" sx={{ maxWidth: 300,boxShadow:'5px 10px #ff9696'}}>
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