import { Avatar, Grid } from '@mui/material'
import React from 'react'
import { FadeDiv, avatarStyle } from './AboutPhoto.styles'

const AboutPhoto = () => {


  return (
    <Grid item container xs={12} md={5.75}>
      <FadeDiv data-aos="fade-up" data-aos-duration="1000">
        <Avatar
          alt='Guilherme M. Toso'
          src='/images/about-me.jpg'
          sx={avatarStyle}
        >
        </Avatar>
      </FadeDiv>
    </Grid>
  )
}

export default AboutPhoto