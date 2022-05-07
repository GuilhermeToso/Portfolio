import React from 'react'
import { AboutGrid } from './About.styles'
import { PageGrid } from '../Styles'
import {Typography} from "@mui/material"

const About = () => {
  return (
    <PageGrid item top="100%" id='about'>
      <Typography
        variant='h3'
        fontFamily='Archivo'
      >
        About
      </Typography>
    </PageGrid>
    )
}

export default About